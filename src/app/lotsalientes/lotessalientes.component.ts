import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotessalientes',
  templateUrl: './lotsalientes.component.html',
  styleUrls: ['./lotsalientes.component.css']
})
export class LotessalientesComponent {

  //Variables
  nombreEmpresa="Backus";
  nombre: string="";
  rol: string="";
  color: string="";
  urlImg = "/assets/Fondo_cerveza.png";
  tipo = "LOTE SALIENTE";

  constructor(){}
  
  //Funciones para la clase
  setNombre(nombre: string){
    this.nombre = nombre;
    return nombre;
  }

  setRol(rol: string){
    this.rol = rol;
    return rol;
  }

  setColor(color: string){
    this.color = color;
    return color;
  }


  //Funciónes para los servicios

}
