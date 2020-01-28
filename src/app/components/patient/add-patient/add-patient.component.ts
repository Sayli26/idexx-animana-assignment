import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from 'src/app/service/patient-service/patient.service';
import { ApiService } from 'src/app/service/api-service/api.service';
import { IPatient } from 'src/app/models/patient';

const PATH: string = '/add-patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.sass'],
  providers: [PatientService],
})
export class AddPatientComponent implements OnInit {

  addPatientForm: FormGroup;
  
  constructor(private fb: FormBuilder, private apiService: ApiService<IPatient>) {
    this.createForm();
  }

  createForm() {
    this.addPatientForm = this.fb.group({
      name: ['', Validators.required ],
      class: [''],
      species: [''],
      dateOfBirth: ['', Validators.pattern('') ],
      crossBreed: [''],
      gender: ['', Validators.required ],
      warning: [''],
      remarks: [''],
      color: [''],
    });
  }

  ngOnInit() {
  }

  // Send request to api service
  addPatient() {
    if (this.addPatientForm.valid) {
      this.apiService.add(this.addPatientForm.value, PATH)
          .subscribe(res => {});
    }
  }

}
