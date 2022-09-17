import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Marca} from './entidades/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:9000';

  listarMarcas(){
    return this.http.get<Marca[]>(this.Url + '/ListaMarcas');
  }
}
