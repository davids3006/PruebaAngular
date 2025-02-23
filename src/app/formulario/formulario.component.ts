import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  openAlert: boolean = false;
  mostrar_en_consola(name:String){
    console.log(name);
    this.openAlert = true;
  }

}
