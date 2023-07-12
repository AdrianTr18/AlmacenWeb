import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string="";
  rol: string="";
  color: string="";
  tipo: string="Inicio";

  constructor() { }

  ngOnInit(): void {

  }

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

  getTipo(){
    return this.tipo;
  }

}
