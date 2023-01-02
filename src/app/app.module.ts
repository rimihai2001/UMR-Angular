import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { HomepageComponent } from './pages/home-page/homepage.component';
import { SignupComponent } from './pages/signup-page/signup.component';
import { LoginComponent } from './pages/login-page/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';
import { AddConcertPageComponent } from './pages/add-concert-page/add-concert-page.component';
import { AllConcertsPageComponent } from './pages/all-concerts-page/all-concerts-page.component';
import { TodayConcertsPageComponent } from './pages/today-concerts-page/today-concerts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    LoginComponent,
    MainPageComponent,
    HeaderComponent,
    PromoBannerComponent,
    AddConcertPageComponent,
    AllConcertsPageComponent,
    TodayConcertsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
