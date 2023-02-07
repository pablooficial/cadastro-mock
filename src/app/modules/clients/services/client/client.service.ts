import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public API = 'http://localhost:3000/clients'

  constructor(private _http: HttpClient) { }

  public getClients(): Observable<IClient[]>{
    return this._http.get<IClient[]>(this.API)
  }

  public createClients(value: IClient): Observable<any>{
    return this._http.post(this.API,value)
  }

  public editClients(value: IClient, id: any): Observable<any>{
    return this._http.put(`${this.API}/${id}`, value)
  }

  public deleteClients(id: any): Observable<any>{
    return this._http.delete(`${this.API}/${id}`)
  }
}
