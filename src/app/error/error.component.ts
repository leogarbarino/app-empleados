import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate([""]);
 }

}
