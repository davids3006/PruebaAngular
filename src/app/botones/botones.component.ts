import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  text_color:String = '';
  button_disabled:boolean = false;

  src:String = 'https://images.pexels.com/photos/20798991/pexels-photo-20798991/free-photo-of-mar-paisaje-colina-montana.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
}
