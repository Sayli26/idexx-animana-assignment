import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './components/client/add-client/add-client.component';
import { GetClientComponent } from './components/client/get-client/get-client.component';
import { AddPatientComponent } from './components/patient/add-patient/add-patient.component';
import { GetPatientComponent } from './components/patient/get-patient/get-patient.component';
import { ClientService } from './service/client-service/client.service';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CarouselModule } from 'ngx-bootstrap';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    GetClientComponent,
    AddPatientComponent,
    GetPatientComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
  ],
  providers: [ ClientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
