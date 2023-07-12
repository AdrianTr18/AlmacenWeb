import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartTypeRegistry } from 'chart.js';
import { DriverService } from '../services/driver/driver.service';
import { CondicionService } from '../services/condicion/condicion.service';
import { AlmacenService } from '../services/almacen/almacen.service';
import { UbicacionService } from '../services/ubicacion/ubicacion.service';
import { LoteentranteService } from '../services/loteentrante/loteentrante.service';
import { LotesalienteService } from '../services/lotesaliente/lotesaliente.service';

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
  almacenform!: FormGroup;
  reporteform!: FormGroup;

  //Variables para los servicios
  conductor: any;
  Location: any;
  condition: any;
  finalQuantityBoxes: any;
  almacen: any;
  reporte: any;
  loteEntrante: any;

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
    private almacenService: AlmacenService,
    private conditionService: CondicionService,
    private ubicacionService: UbicacionService,
    private loteEntranteService: LoteentranteService,
    private loteSalienteService: LotesalienteService,
  ) { }

  ngOnInit(): void {

    //Reporte
    this.reporteform = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      dni: ['', Validators.required],
      status: ['', Validators.required]
    });

    //Almacén
    this.almacenform = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      district: ['', Validators.required],
      province: ['', Validators.required],
      departament: ['', Validators.required],
      zone: ['', Validators.required],
      phone: ['', Validators.required],
      currentCapacity: ['', Validators.required],
      maxCapacity: ['', Validators.required],
      enabled: [true, Validators.required]
    });

    //Lotes Entrantes
    this.loteEntranteform = this.fb.group({
      fecha: ['', Validators.required],
      observations: ['', Validators.required],
      driver: ['', Validators.required],
      internalLocation: ['', Validators.required],
      condition: ['', Validators.required],
      finalQuantityBoxes: ['', Validators.required],
      enabled: ['', Validators.required]
    });

    //Lotes Salientes
    this.loteSalienteform = this.fb.group({
      fecha: ['', Validators.required],
      initialWeight: ['', Validators.required],
      initialQuantityBoxes: ['', Validators.required],
      driver: ['', Validators.required],
      warehouse: ['', Validators.required],
      enabled: ['', Validators.required]
    });

    //Funciones que consumen el servicio
    this.driverService.getDrivers().subscribe(data => {
      this.conductor = data;
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

    this.almacenService.getAllAlmacenes().subscribe(data => {
      this.almacen = data;
    },
      error => {
        console.log(error);
      });

    this.ubicacionService.getAllLocations().subscribe(data => {
      this.Location = data;
    },
      error => {
        console.log(error);
      });
  }

  //Funciones para el CRUD
  registrarLoteEntrante(): void {
    this.loteEntranteService.addRegister(this.loteEntranteform.value).subscribe(data => {
      alert("Almacen registrado correctamente");
      this.loteEntranteform.reset();
      return this.loteEntrante = data;
    },
      error => {
        console.log(error);
      });
  }

  registrarLoteSaliente(): void {
    this.loteSalienteService.addRegister(this.loteSalienteform.value).subscribe(data => {
      alert("Reporte registrado correctamente");
      this.reporteform.reset();
    }, err => {
      console.log(err);
    });
  }

  registrarAlmacen(): void {
    this.almacenService.addAlmacen(this.almacenform.value).subscribe(data => {
      alert("Almacen registrado correctamente");
      this.almacenform.reset();
      return this.almacen = data;
    }, err => {
      console.log(err);
    });
  }

  registrarReporte(): void {
    alert("Reporte registrado correctamente");
    this.reporteform.reset();
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
