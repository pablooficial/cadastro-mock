import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClient } from '../../models/client';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public editClient!: IClient

  constructor(
    private router: ActivatedRoute,
    private _clientService: ClientService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((f: any) => {
      if (f?.cliente) this.editClient = JSON.parse(window.atob(f.cliente));
    });
  }

  public submitForm(form:IClient): void {
    this._clientService.editClients(form,this.editClient.id).subscribe({
      next: (res) => {

      },
      error: (err) => {
        console.log(err);
      }
    })
    this.location.back()
  }

}
