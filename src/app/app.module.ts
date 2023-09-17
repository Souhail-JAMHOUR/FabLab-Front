import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CopyNavbarComponent} from './navbar copy/navbar.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {EquipmentCardComponent} from './equipment-card/equipment-card.component';
import {ProjectCardComponent} from './project-card/project-card.component';
import {NewReservationPageComponent} from './new-reservation-page/new-reservation-page.component';
import {MemberTemplateComponent} from './member-template/member-template.component';
import {MemberReservationComponent} from './member-reservation/member-reservation.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AdminnavbarComponent} from './adminnavbar/adminnavbar.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {CarouselComponent} from './carousel/carousel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardComponent} from './card/card.component';
import {AdminTemplateComponent} from './admin-template/admin-template.component';
import {InlineSVGModule} from "ng-inline-svg-2";
import { CardsInfoComponent } from './cards-info/cards-info.component';
import { ComfirmFailuresComponent } from './comfirm-failures/comfirm-failures.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FailuresComponent } from './failures/failures.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CopyNavbarComponent,
    FooterComponent,
    EquipmentCardComponent,
    ProjectCardComponent,
    NewReservationPageComponent,
    MemberTemplateComponent,
    MemberReservationComponent,
    SidebarComponent,
    AdminnavbarComponent,
    BreadcrumbsComponent,
    CarouselComponent,
    CardComponent,
    AdminTemplateComponent,
    CardsInfoComponent,
    ComfirmFailuresComponent,
    DashboardComponent,
    EditProfileComponent,
    FailuresComponent,
    ProjectsComponent,
    SignInComponent,
    SignUpComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    InlineSVGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
