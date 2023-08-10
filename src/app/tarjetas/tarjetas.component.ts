import { Component, OnInit } from '@angular/core';
import { AlmacenService } from '../services/almacen/almacen.service';
import { Warerhouse } from '../model/warerhouse';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  //Varibles
  warerhouses: Warerhouse[] | undefined;
  urlImg: string="";
  inputWidth: number = 0;

  constructor(
    private almacenService: AlmacenService,
  ){}

  ngOnInit(): void {
  
    this.almacenService.getAllAlmacenes().subscribe(data => {
      this.warerhouses = data;
    },
      error => {
        console.log(error);
      });
    
  }

  setUrl(url: string){
    this.urlImg = url;
    return this.urlImg;
  }

  calcularWidth(maxCapacity: any, capacity: number){
    let calculo: number;

    calculo = (capacity / maxCapacity) * 100;

    return this.inputWidth = Math.round(calculo);
  }

}
