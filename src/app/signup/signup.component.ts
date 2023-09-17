// signup.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
signIn() {
throw new Error('Method not implemented.');
}
signUp() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {}

  goToSignIn(): void {
    this.router.navigate(['/signin']); // Naviguer vers la page de connexion
  }
  
}
