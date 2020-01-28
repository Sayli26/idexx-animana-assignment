import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { IClient } from 'src/app/models/client';

const PATH: string = '/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients = [];

  constructor(private apiService: ApiService<IClient>) { }

  ngOnInit() {
    
  }

  // This is not used currently
  // This service is created to demonstrate that instead of calling apiservice directly from component,
  // service layer can be introduced specific to each feature module
  getAllClients() {
    return this.apiService.get(PATH).subscribe(clients => this.clients = clients);
  }

}
