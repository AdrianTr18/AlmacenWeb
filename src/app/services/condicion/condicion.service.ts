import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CondicionService {

  private apiUrl = 'http://localhost:8080/detalleEntrada';

  constructor(
    private http: HttpClient
  ) { }

    getAllCondiciones(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
}
