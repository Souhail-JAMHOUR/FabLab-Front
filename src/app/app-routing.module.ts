import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {MemberReservationComponent} from "./member-reservation/member-reservation.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {MemberTemplateComponent} from "./member-template/member-template.component";
import {DashboardComponent} from './dashboard/dashboard.component'; // Importez le composant MainComponent
import {UsersComponent} from './users/users.component'; // Importez le composant FailuresComponent
import {ProjectsComponent} from './projects/projects.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {FailuresComponent} from './failures/failures.component';
import {CardsInfoComponent} from './cards-info/cards-info.component';
import {SignInComponent} from './signin/signin.component';
import {SignUpComponent} from './signup/signup.component';
import {ReservationdetailsComponent} from "./reservationdetails/reservationdetails.component";
import {NewReservationPageComponent} from "./new-reservation-page/new-reservation-page.component";


const routes: Routes = [
  {path: "", redirectTo: "/signin", pathMatch: "full"},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {
    path: "member", component: MemberTemplateComponent, children: [
      {path: "home", component: HomepageComponent},
      {path: 'new-reservation', component: NewReservationPageComponent},
      {
        path: "reservation", component: MemberReservationComponent, children: [
          {path: 'reservation/:id', component: ReservationdetailsComponent},

        ]
      },
    ]
  },
  {
    path: "admin", component: AdminTemplateComponent, children: [
      {path: 'users', component: UsersComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'edit-profile', component: EditProfileComponent},
      {path: 'failures', component: FailuresComponent},
      {path: 'cards-info', component: CardsInfoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
