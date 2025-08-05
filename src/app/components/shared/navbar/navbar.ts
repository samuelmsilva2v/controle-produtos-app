import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../core/services/usuario-service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  service = inject(UsuarioService);
  router = inject(Router);

  nomeUsuario!: string | undefined;

  ngOnInit() {
    this.nomeUsuario = this.service.getData()?.nome;
  }

  logout() {
    if(confirm('Deseja realmente sair do sistema?')) {
      this.service.signOut();
      this.router.navigate(['/autenticacao/login'])
    }
  }

  
}
