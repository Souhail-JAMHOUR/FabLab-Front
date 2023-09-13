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
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environment.development";
import { UploadTryComponent } from './upload-try/upload-try.component';


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
    UploadTryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BreadcrumbModule,
    BrowserAnimationsModule,
    InlineSVGModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
