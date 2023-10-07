// signup.component.ts
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  formSignup!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.formSignup = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control(""),
      confirmedPassword: this.fb.control(""),
      email: this.fb.control(""),
      name: this.fb.control("")
    })
  }

  signUp() {
    let request = {...this.formSignup.value}
    this.authService.signup(request).subscribe({
      next: user => {
        this.router.navigateByUrl("/signin");
      }
    })
  }

  goToSignIn(): void {
    this.router.navigate(['/signin']); // Naviguer vers la page de connexion
  }

}
