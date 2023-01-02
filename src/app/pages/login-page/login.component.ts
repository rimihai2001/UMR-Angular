import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        if (result == null) {
          // null is success, false means there was an error
          let username = this.loginForm.value.email.replace(/[^a-z0-9]/gi, '')
          localStorage.setItem("user", username);
          this.router.navigate(['/main']); // when the user is logged in, navigate them to profile
        } else if (result.isValid == false) {
          //console.log('login error', result);
          this.firebaseErrorMessage = result.message;
          alert("Login error!");
        }
      });
  }

}
