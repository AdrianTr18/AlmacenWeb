import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { LotesEntrantesComponent } from './lotentrantes/lotentrantes.component';
import { LotessalientesComponent } from './lotsalientes/lotessalientes.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GraficosComponent } from './graficos/graficos.component';
import { InicioComponent } from './inicio/inicio.component';
import { RalmacenComponent } from './ralmacen/ralmacen.component';
import { AlmacenService } from './services/almacen/almacen.service';
import { CondicionService } from './services/condicion/condicion.service';
import { DriverService } from './services/driver/driver.service';
import { LoginService } from './services/login/login.service';
import { LoteentranteService } from './services/loteentrante/loteentrante.service';
import { LotesalienteService } from './services/lotesaliente/lotesaliente.service';
import { EalmacenComponent } from './ealmacen/ealmacen.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UbicacionService } from './services/ubicacion/ubicacion.service';
import { UsuarioService } from './services/usuario/usuario.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'lotes-entrantes', component: LotesEntrantesComponent },
  { path: 'lotes-salientes', component: LotessalientesComponent },
  { path: 'registrar-almacen', component: RalmacenComponent },
  { path: 'estado-almacen', component: EalmacenComponent },
  { path: 'registrar-reporte', component: ReportesComponent },
  { path: 'tarjetas', component: TarjetasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LotesEntrantesComponent,
    LotessalientesComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    GraficosComponent,
    InicioComponent,
    RalmacenComponent,
    EalmacenComponent,
    TarjetasComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AlmacenService,
    CondicionService,
    DriverService,
    LoginService,
    LoteentranteService,
    LotesalienteService,
    UbicacionService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
