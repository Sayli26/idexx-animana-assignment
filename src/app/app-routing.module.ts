import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './components/client/add-client/add-client.component';
import { GetClientComponent } from './components/client/get-client/get-client.component';
import { AddPatientComponent } from './components/patient/add-patient/add-patient.component';
import { GetPatientComponent } from './components/patient/get-patient/get-patient.component';
import { HomeComponent } from './components/home/home.component';

// if there are modules, those can be lazy loaded
const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'client/create',
    component: AddClientComponent
  },
  {
    path: 'clients',
    component: GetClientComponent
  },
  {
    path: 'patient/create',
    component: AddPatientComponent
  },
  {
    path: 'patients',
    component: GetPatientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
