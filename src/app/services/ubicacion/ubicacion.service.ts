import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private apiUrl = 'http://localhost:8080/internLocations';

  constructor(
    private http: HttpClient
  ) { }

  getAllLocations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
