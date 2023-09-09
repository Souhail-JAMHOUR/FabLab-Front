import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Importez le composant MainComponent
import { UsersComponent } from './users/users.component'; // Importez le composant FailuresComponent
import { ProjectsComponent } from './projects/projects.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MemberComponent } from './member/member.component';
import { FailuresComponent } from './failures/failures.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // Route par défaut pour le composant Main
  { path: 'users', component: UsersComponent }, // Route pour le composant Failures
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'member', component: MemberComponent },
  { path: 'failures', component: FailuresComponent },

  // Ajoutez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
