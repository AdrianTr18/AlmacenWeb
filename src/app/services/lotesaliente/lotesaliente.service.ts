import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotesalienteService {

  private apiUrl = 'http://localhost:8080/outputRegisters';

  constructor(
    private http: HttpClient
  ) { }

  getAllRegisters(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  addRegister(register: any): Observable<any>{
    return this.http.post(this.apiUrl, register);
  }

}
