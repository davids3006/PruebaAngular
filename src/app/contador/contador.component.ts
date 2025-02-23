import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  //nombre:String = "Dulce Itzel";
  //edad:number = 34
  persona:Persona = {
    nombre: "Dulcte Itzel",
    edad: 34
  }

  numero:number = 0;

  decrementar(){
    this.numero--;
  }

  incrementar(){
    this.numero++;
  }
  

}
