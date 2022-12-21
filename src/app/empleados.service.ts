import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()
export class EmpleadosService {
  constructor(
    private servicioEmpleados: ServicioEmpleadosService,
    private dataService: DataServices
  ) {}

  setEmpleados(misEmpleados: Empleado[]) {
    this.empleados= misEmpleados;
  }

  obtenerEmpleados() {
    return this.dataService.cargarEmpleados();
  }

  empleados: Empleado[] = [];

  /*
    empleados:Empleado[]= [

        new Empleado("Leonardo", "Garbarino", "Frontend Developer", 60000),
        new Empleado("Juan", "Perez", "Backend Developer", 55000),
        new Empleado("María", "Gonzalez", "Full Stack Developer", 75000),
        new Empleado("Laura", "Mendez", "Tester QA", 47000),
        new Empleado("Martin", "Moroi", "Director de Desarrollo", 155000),
        new Empleado("Ana", "Fernandez", "Auxiliar de servicios", 30000),
    
      ];
      */

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioEmpleados.muestraMensaje(
      'Trabajador agregado correctamente con el nombre: ' +
        empleado.nombre +
        ' ' +
        empleado.apellido
    );
    this.empleados.push(empleado);
    // Luego de inyectar el dataService, llamamos al metodo guardarEmpleados
    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataService.actualizarEmpleado(indice, empleado);
  }

  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
    this.dataService.eliminarEmpleado(indice);
    // Reconstruimos el array empleados para que no nos de error con los indices
    if(this.empleados != null ){
    this.dataService.guardarEmpleados(this.empleados);
  }
}
}
