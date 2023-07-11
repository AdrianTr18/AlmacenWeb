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

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'lotes-entrantes', component: LotesEntrantesComponent },
  { path: 'lotes-salientes', component: LotessalientesComponent },
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
    InicioComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
