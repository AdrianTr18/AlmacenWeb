import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  /* Variables que nos servirán para darle interactividad al gráfico */

@Input() canvaName : string = "";
@Input() tipoGrafico : keyof ChartTypeRegistry = 'bar';
@Input() labelsGrafico : string[] = [];
@Input() tituloGrafico : string = "";
@Input() leyendaGrafico : string = "";
@Input() coloresGrafico : string[] = [];
@Input() borderColorGrafico : string[] = [];
@Input() valuesGrafico : number[] = [];

/* Método que permite generar el gráfico al abrir el componente */

ngOnInit() {
  let miCanvas = document.getElementById(this.canvaName); //id del canvas
  var chart = new Chart(this.canvaName, { //id del canvas
    type: this.tipoGrafico, //'bar', 'line', 'pie'
    data: {
      labels: this.labelsGrafico,  //['Tesis', 'Libros', 'Articulos', 'Revistas']
      datasets: [
        {
          label: this.leyendaGrafico, //'Cantidad'  
          data: this.valuesGrafico, //[12, 19, 3, 5]
          backgroundColor: this.coloresGrafico, //['#3e95cd', '#8e5ea2', '#3cba9'] o [rgb(255, 255, 255)]
          borderColor: this.borderColorGrafico, //['#3e95cd', '#8e5ea2', '#3cba9'] o [rgb(255,255,255)]
          borderWidth: 1
        }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: this.tituloGrafico, //'Cantidad'
          font: {
            family: 'IBM Plex Sans',
            weight: 'bold'
          },
          color: 'rgb(0, 0, 0)',
          padding: {
            top: 20,
            bottom: 20
          }
        }
      }
    }
  });
}
}
