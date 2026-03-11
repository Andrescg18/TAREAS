import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea } from '../tarea/tarea';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, Usuario],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})

export class Tareas {

  @Input() tareas: any[] = [];
  @Input() usuarios: any[] = [];

  usuarioSeleccionadoId = '';

  seleccionarUsuario(id: string) {
    this.usuarioSeleccionadoId = id;
  }

  agregarTarea(titulo: string) {

    if (titulo.trim() === '') return;

    this.tareas.push({
      id: Date.now().toString(),
      titulo: titulo,
      fecha: new Date(),
      completado: false
    });

  }

  eliminarTarea(id: string) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

}