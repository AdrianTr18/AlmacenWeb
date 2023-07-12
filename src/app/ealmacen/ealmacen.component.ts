import { Component } from '@angular/core';

@Component({
  selector: 'app-ealmacen',
  templateUrl: './ealmacen.component.html',
  styleUrls: ['./ealmacen.component.css']
})
export class EalmacenComponent {
  //Variables
  nombreEmpresa = "Backus";
  nombre: string = "";
  rol: string = "";
  color: string = "";
  tipo = "ESTADO DE ALMACEN";

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
