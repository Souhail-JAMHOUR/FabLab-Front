import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  constructor(private router: Router) { }

  openEditProfile(): void {
    this.router.navigate(['/edit-profile']);
  }
}