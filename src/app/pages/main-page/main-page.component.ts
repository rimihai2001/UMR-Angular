import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit(): void {}

  logout(): void {
    this.afAuth.signOut();
    localStorage.removeItem('user');
  }
}
