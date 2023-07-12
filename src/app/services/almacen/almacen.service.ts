import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  private apiUrl = 'http://localhost:8080/warehouses';

  constructor(
    private http: HttpClient
  ) { }

  getAllAlmacenes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addAlmacen(almacen: any): Observable<any> {
    return this.http.post(this.apiUrl, almacen);
  }

}
