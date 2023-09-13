// signin.component.ts
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
    formLogin!: FormGroup;

    constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.formLogin = this.fb.group({
            username: this.fb.control(""),
            password: this.fb.control("")
        })
    }

    goToSignUp(): void {
        this.router.navigate(['/signup']); // Naviguer vers la page d'inscription
    }


    signUp() {
        throw new Error('Method not implemented.');
    }

    signIn() {
        let username = this.formLogin.value.username;
        let password = this.formLogin.value.password;
        this.authService.login(username, password).then(resp => {
            this.router.navigateByUrl("/admin");
        })
            .catch(error => {
                this.errorMessage = error;
            })

    }
}
