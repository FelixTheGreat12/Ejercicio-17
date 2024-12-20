import { Component, inject } from '@angular/core';
import { HeroeServiceService } from '../../services/heroe-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-heroe-list',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.css']
})
export class HeroeListComponent {
  heroeService = inject(HeroeServiceService);
  listadoHeroes: any[] = [];
  nombre: string = '';
  poder: string = '';
  universo: string = '';
  debilidad: string = '';


  constructor() {
    this.CargarHeroes();
  }

  EliminarHeroe(id: number) {
    this.heroeService.deleteHeroe(id).subscribe((data) => {
      if (data.estado === 1) {
        this.CargarHeroes();
      } else {
        alert(data.estado);
      }
    });
  }

  CargarHeroes() {
    this.heroeService.getAllHeroes().subscribe((data) => {
      this.listadoHeroes = data.heroes;
    });
  }

  AgregarHeroe() {
    const nuevoHeroe = {
      nombre: this.nombre,
      poder: this.poder,
      universo: this.universo,
      debilidad: this.debilidad,
    };
    
    this.heroeService.postHeroe(nuevoHeroe).subscribe((data) => {
        if (data.estado === 1) {
            alert('Héroe agregado con éxito');
            this.CargarHeroes(); // Actualiza el listado de héroes
        } else {
            alert('Error al agregar el héroe');
        }
      });

        this.nombre = '';
        this.poder = '';
        this.universo = '';
        this.debilidad = '';
  }
}