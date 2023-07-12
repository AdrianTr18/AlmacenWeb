import { Component } from '@angular/core';

@Component({
  selector: 'app-ralmacen',
  templateUrl: './ralmacen.component.html',
  styleUrls: ['./ralmacen.component.css']
})
export class RalmacenComponent {
  //Variables
  nombreEmpresa = "Backus";
  nombre: string = "";
  rol: string = "";
  color: string = "";
  urlImg = "/assets/Fondo_almacen.png";
  tipo = "ALMACÉN";

  constructor() { }

  //Funciones para la clase
  setNombre(nombre: string) {
    this.nombre = nombre;
    return nombre;
  }

  setRol(rol: string) {
    this.rol = rol;
    return rol;
  }

  setColor(color: string) {
    this.color = color;
    return color;
  }
}
