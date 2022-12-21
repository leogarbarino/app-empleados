
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
//import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregaCaracteristicas(value:string){
    this.miServicio.muestraMensaje("Característica a agregar: " + value);
    this.caracteristicasEmpleados.emit(value);
  }

 

}
