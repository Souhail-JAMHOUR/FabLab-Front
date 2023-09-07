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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
