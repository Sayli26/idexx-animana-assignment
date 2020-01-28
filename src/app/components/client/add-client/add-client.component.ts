import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from 'src/app/service/client-service/client.service';
import { ApiService } from 'src/app/service/api-service/api.service';
import { IClient } from 'src/app/models/client';

const PATH: string = '/add-client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.sass'],
  providers: [ClientService],
})
export class AddClientComponent implements OnInit {

  addClientForm: FormGroup;
  
  constructor(private fb: FormBuilder, private apiService: ApiService<IClient>) {
    this.createForm();
  }

  createForm() {
    this.addClientForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      title: [''],
      initials: [''],
      address: [''],
      phone: [''],
      business: [''],
      iban: ['', Validators.required ],
      startDate: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

  // Send request to service
  addClient() {
    if (this.addClientForm.valid) {
      this.apiService.add(this.addClientForm.value, PATH)
          .subscribe(res => {});
    }
  }

}
