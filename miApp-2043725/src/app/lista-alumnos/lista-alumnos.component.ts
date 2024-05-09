import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { alumno } from 'src/models/alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent implements OnInit {
  alumnos: alumno[] = [];
  nuevoAlumno: alumno = { 
    nombre: '',
    presente: false
  }
  
  constructor() {}

  agregarAlumno(): void {
    this.alumnos.push(this.nuevoAlumno);
    this.nuevoAlumno = {
      nombre: "",
      presente: false
    }
  }

  ngOnInit() {}
} 