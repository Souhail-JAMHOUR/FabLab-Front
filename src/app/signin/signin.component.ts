// signin.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
signUp() {
throw new Error('Method not implemented.');
}
signIn() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {}

  goToSignUp(): void {
    this.router.navigate(['/admin/signup']); // Naviguer vers la page d'inscription
  }
}
