import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.css']
})
export class QuienesComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate([""]);
 }

}
