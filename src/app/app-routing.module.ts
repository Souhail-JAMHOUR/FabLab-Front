import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // Redirige vers signin par défaut
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  // ... (autres routes) ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
