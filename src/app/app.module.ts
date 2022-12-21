import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';


const appRoutes:Routes=[

{ path: "", component: HomeComponent},
{ path: "proyectos", component: ProyectosComponent},
{ path: "quienes", component: QuienesComponent},
{ path: "contacto", component: ContactoComponent},
{ path: "actualiza/:id", component: ActualizaComponent},
{ path: "login", component: LoginComponent},
{ path: "**", component: ErrorComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent,
    ActualizaComponent,
    ErrorComponent,
    LoginComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    ServicioEmpleadosService,
    EmpleadosService,
    DataServices,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
