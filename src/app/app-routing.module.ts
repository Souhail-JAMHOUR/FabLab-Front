import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberTemplateComponent} from "./member-template/member-template.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {MemberReservationComponent} from "./member-reservation/member-reservation.component";

const routes: Routes = [
  {path: "", redirectTo: "member/home", pathMatch: "full"},

  {
    path: "member", component: MemberTemplateComponent, children: [
      {path: "home", component: HomepageComponent},
      {path: "reservation", component: MemberReservationComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
