import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  //Variables
  nombreEmpresa = "Backus";
  nombre: string = "";
  rol: string = "";
  color: string = "";
  urlImg = "/assets/Fondo_almacen.png";
  tipo = "REPORTE";

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
