import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IClient } from '../../models/client';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _clientService: ClientService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  public createClient(form:IClient): void{
    this._clientService.createClients(form).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.location.back()
  }

}
