import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://127.0.0.1:8080/clients"

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl)
  }
}
