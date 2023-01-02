import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  firebaseErrorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private db: AngularFireDatabase
  ) {
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.signupForm.invalid || this.signupForm.value.role === 'Role') {
      return;
    }
    
    var formData = {
      first_name: this.signupForm.value.fname,
      last_name: this.signupForm.value.lname,
      role: this.signupForm.value.role,
      email: this.signupForm.value.email
    };

    this.authService
      .signupUser(this.signupForm.value)
      .then(async (result) => {
        if (result == null)
        {
            let username = this.signupForm.value.email.replace(/[^a-z0-9]/gi, '')
            await this.db.object('users/' + username + '/info').set(formData);
            localStorage.setItem("user", username);
            // null is success, false means there was an error
            this.router.navigate(['../main']);
        }
          
        else if (result.isValid == false) {
          this.firebaseErrorMessage = result.message;
          this.router.navigate(['../']);
        }
      })
      .catch(() => {
        alert('Error');
      });
  }

}
