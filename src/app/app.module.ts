import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './signin/signin.component'; // Import the SigninComponent
import { SignUpComponent } from './signup/signup.component'; // Import the SignupComponent
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent, // Declare the SigninComponent
    SignUpComponent, // Declare the SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
