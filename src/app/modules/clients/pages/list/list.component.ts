import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { IClient } from '../../models/client';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  clientList: IClient[] = [];
  showDeleteModal: boolean = false;
  idToDelete!: number | undefined;

  constructor(
    private _clientService: ClientService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.getClientList()
    setInterval(() => {this.getClientList()}, 10000)

  }

  private getClientList(): void {
    this._clientService.getClients().subscribe({
      next: (res: IClient[]) => {
        this.clientList = res
      },
      error: (err) => {
      }
    })
  }

  public editUser(client: IClient) {
    this.router.navigateByUrl(
      `clientes/editar?cliente=${window.btoa(JSON.stringify(client))}`
    );
  }

  public confirmDelete(client:IClient){
    this.idToDelete = client.id;
    this.showDeleteModal = true;
  }

  public deleteUser() {
    this._clientService.deleteClients(this.idToDelete)
    .pipe(finalize(() => {
      this.showDeleteModal = false;
      this.getClientList()
    }))
    .subscribe({
      next: (res) => {
      },
      error: (err) => {
      }
    })

  }

}
