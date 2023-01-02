import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConcertPageComponent } from './pages/add-concert-page/add-concert-page.component';
import { AllConcertsPageComponent } from './pages/all-concerts-page/all-concerts-page.component';
import { HomepageComponent } from './pages/home-page/homepage.component';
import { LoginComponent } from './pages/login-page/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignupComponent } from './pages/signup-page/signup.component';
import { TodayConcertsPageComponent } from './pages/today-concerts-page/today-concerts-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'concerts', component: AllConcertsPageComponent },
  { path: 'today-concerts', component: TodayConcertsPageComponent },
  { path: 'main', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: 'add-concert', component: AddConcertPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
