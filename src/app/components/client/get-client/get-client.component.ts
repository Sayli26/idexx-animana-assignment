import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api-service/api.service';
import { ClientService } from 'src/app/service/client-service/client.service';
import { IClient } from 'src/app/models/client';

const PATH: string = '/clients';

@Component({
  selector: 'app-get-client',
  templateUrl: './get-client.component.html',
  styleUrls: ['./get-client.component.sass'],
  providers: [ClientService]
})
export class GetClientComponent implements OnInit {

  public clients = [];

  constructor(private apiService: ApiService<IClient>) { }

  ngOnInit() {
    this.apiService.get(PATH)
        .subscribe(clients => this.clients = clients);
  }

  deleteClient(id: string) {
    this.apiService.deleteById(id, '/delete-client')
        .subscribe();
  }
}
