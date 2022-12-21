import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo = 'Listado de empleados de la empresa';

  constructor(private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService) { 
    // this.empleados= this.empleadosService.empleados;
  }

  ngOnInit(): void {
    //this.empleados= this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(
      response=>{
        console.log(response);
        this.empleados= Object.values(response);
        this.empleadosService.setEmpleados( this.empleados);
      },
      error=>{
        console.log(error);
       
      }
    );
  }

  empleados:Empleado[]= [];
 
  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado que se agregará: " + miEmpleado.nombre + " " + miEmpleado.apellido);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }


  cuadroNombre:string= "";
  cuadroApellido:string= "";
  cuadroCargo:string= "";
  cuadroSalario:number= 0;

  


}
