import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 
  constructor(){


  }
  
  ngOnInit(): void {
    firebase.initializeApp({
      apikey: "AIzaSyB3D9FfkCqKU2GIErPjC3W7Gus6URK1cdg"
    });
    
  }
 

  



}