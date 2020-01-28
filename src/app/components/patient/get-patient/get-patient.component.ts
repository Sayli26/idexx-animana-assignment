import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from 'src/app/service/api-service/api.service';
import { PatientService } from 'src/app/service/patient-service/patient.service';
import { IPatient } from 'src/app/models/patient';

const PATH: string = '/patients';

@Component({
  selector: 'app-get-patient',
  templateUrl: './get-patient.component.html',
  styleUrls: ['./get-patient.component.sass'],
  providers: [PatientService]
})
export class GetPatientComponent implements OnInit {

  public patients = [];

  constructor(private apiService: ApiService<IPatient>) { }

  ngOnInit() {
    this.apiService.get(PATH)
        .subscribe(patients => this.patients = patients);
  }

  deletePatient(id: string) {
    this.apiService.deleteById(id, '/delete-patient')
        .subscribe();
  }
}
