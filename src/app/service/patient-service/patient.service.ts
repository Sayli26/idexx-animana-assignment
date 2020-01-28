import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { IPatient } from 'src/app/models/patient';

const PATH: string = '/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patients = [];

  constructor(private apiService: ApiService<IPatient>) { }

  ngOnInit() {
    
  }

  // This is not used currently
  // This service is created to demonstrate that instead of calling apiservice directly from component,
  // service layer can be introduced specific to each feature module
  getAllPatients() {
    return this.apiService.get(PATH).subscribe(patients => this.patients = patients);
  }

}
