import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CopyNavbarComponent } from './navbar copy/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipmentCardComponent } from './equipment-card/equipment-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NewReservationPageComponent } from './new-reservation-page/new-reservation-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ReservationlistAdminComponent } from './reservationlist-admin/reservationlist-admin.component';
import { ReservationdetailsComponent } from './reservationdetails/reservationdetails.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component'; // Import MatStepperModule


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
    SidebarComponent,
    AdminnavbarComponent,
    SearchbarComponent,
    ReservationlistAdminComponent,
    ReservationdetailsComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
