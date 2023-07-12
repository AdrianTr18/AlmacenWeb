import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoteentranteService {

  private url = 'http://localhost:8080/inputRegisters';

  constructor(
    private http: HttpClient
  ) { }

  getAllRegisters(): Observable<any>{
    return this.http.get(this.url);
  }

  getRegister(id: number): Observable<any>{
    return this.http.get(this.url + '/' + id);
  }

  addRegister(register: any): Observable<any>{
    return this.http.post(this.url, register);
  }

  


}
