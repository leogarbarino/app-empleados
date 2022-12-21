import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate([""]);
 }

}
