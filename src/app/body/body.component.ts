import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartTypeRegistry } from 'chart.js';
import { DriverService } from '../services/driver/driver.service';
import { CondicionService } from '../services/condicion/condicion.service';
import { UbicacionService } from '../services/ubicacion/ubicacion.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //Variables generales
  @Input() tipo: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() nombre: string | undefined;
  @Input() rol: string | undefined;
  @Input() urlImage: string | undefined;
  @Input() nombreEmpresa: string | undefined;

  //variables para form group
  loteEntranteform!: FormGroup;
  loteSalienteform!: FormGroup;
  //Variables para los servicios
  conductor:any;
  Location:any;
  condition:any;
  finalQuantityBoxes:any;

  //Variables para el grafico
  tipoGrafico: keyof ChartTypeRegistry = 'bar';
  labelsGrafico: string[] = [];
  tituloGrafico: string = "";
  leyendaGrafico: string = "";
  colorsGrafico: string[] = [];
  borderColorGrafico: string[] = [];
  valuesGrafico: number[] = [];

  constructor(
    private fb: FormBuilder,
    private driverService: DriverService,
    private locationService: UbicacionService,
    private conditionService: CondicionService
  ){}

  ngOnInit(): void {
    //Lotes salientes
      this.loteSalienteform = this.fb.group({
        fecha: ['', Validators.required],
        observation: ['', Validators.required],
        driver: ['', Validators.required],
        internalLocation: ['', Validators.required],
        condition: ['', Validators.required],
        finalQuantityBoxes: ['', Validators.required]
      });


    //Funciones que consumen el servicio
    this.driverService.getDrivers().subscribe(data => {
      this.conductor = data;
    },
    error => {
      console.log(error);
    });

    this.locationService.getAllUbicaciones().subscribe(data => {
      this.Location = data;
    },
    error => {
      console.log(error);
    });

    this.conditionService.getAllCondiciones().subscribe(data => {
      this.condition = data;
    },
    error => {
      console.log(error);
    });

  }

  //Funciones para el CRUD
  registrarLoteEntrante(): void {
    
  }

  // Funciones para el grafico
  setTipo(tipo: keyof ChartTypeRegistry) {
    this.tipoGrafico = tipo;
    return this.tipoGrafico;
  }

  setLabels(labels: string[]) {
    this.labelsGrafico = labels;
    return this.labelsGrafico;
  }

  setTitulo(titulo: string) {
    this.tituloGrafico = titulo;
    return this.tituloGrafico;
  }

  setLeyenda(leyenda: string) {
    this.leyendaGrafico = leyenda;
    return this.leyendaGrafico;
  }

  setColors(colors: string[]) {
    this.colorsGrafico = colors;
    return this.colorsGrafico;
  }

  setBorderColor(borderColor: string[]) {
    this.borderColorGrafico = borderColor;
    return this.borderColorGrafico;
  }

  setValues(values: number[]) {
    this.valuesGrafico = values;
    return this.valuesGrafico;
  }

}
