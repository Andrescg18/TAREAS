import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header';
import { CommonModule } from '@angular/common';

interface Usuario {
  nombre: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuarios: Usuario[] = [
    { nombre: 'Antonia Céspedes', avatar: 'https://i.pravatar.cc/100?img=1' },
    { nombre: 'Emilia Torres', avatar: 'https://i.pravatar.cc/100?img=5' },
    { nombre: 'Marcos Jeremías', avatar: 'https://i.pravatar.cc/100?img=3' },
    { nombre: 'David Mercado', avatar: 'https://i.pravatar.cc/100?img=8' }
  ];

  usuarioSeleccionado?: Usuario;

  seleccionarUsuario(user: Usuario) {
    this.usuarioSeleccionado = user;
  }
}