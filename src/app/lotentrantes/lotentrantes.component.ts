import { Component } from '@angular/core';

@Component({
  selector: 'app-lotes-entrantes',
  templateUrl: './lotentrantes.component.html',
  styleUrls: ['./lotentrantes.component.css']
})
export class LotesEntrantesComponent {
  //Variables
  nombreEmpresa = "Backus";
  nombre: string = "";
  rol: string = "";
  color: string = "";
  urlImg = "/assets/Fondo_cerveza.png";
  tipo = "LOTE ENTRANTE";

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
