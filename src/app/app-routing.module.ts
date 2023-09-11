import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationdetailsComponent } from './reservationdetails/reservationdetails.component'; // Import MatStepperModule


const routes: Routes = [
  { path: 'reservation/:id', component: ReservationdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
