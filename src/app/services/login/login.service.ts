import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /* Modificar URL */
  private url = 'http://localhost:8080/login';

  constructor(
    private http: HttpClient
  ) { }

    /* Agregar función para verificar usuario y contraseña */

}
