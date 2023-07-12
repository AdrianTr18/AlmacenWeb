import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  //Varibles
  urlImg: string="";
  tamanio: string="25";

  ngOnInit(): void {
    
  }

  setUrl(url: string){
    this.urlImg = url;
    return this.urlImg;
  }

}
