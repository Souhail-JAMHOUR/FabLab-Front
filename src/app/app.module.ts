import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EquipementsComponent } from './equipements/equipements.component';
import { CardsInfoComponent } from './cards-info/cards-info.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
import { FailuresComponent } from './failures/failures.component';
import { ComfirmFailuresComponent } from './comfirm-failures/comfirm-failures.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    CardsComponent,
    UsersComponent,
    ProjectsComponent,
    EditProfileComponent,
    EquipementsComponent,
    CardsInfoComponent,
    MemberComponent,
    AdminComponent,
    FailuresComponent,
    ComfirmFailuresComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
