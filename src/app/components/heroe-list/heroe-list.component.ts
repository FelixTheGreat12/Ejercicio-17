import { Component, inject } from '@angular/core';
import { HeroeServiceService } from '../../services/heroe-service.service';

@Component({
  selector: 'app-heroe-list',
  imports: [],
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.css'] // Corrección: styleUrls en lugar de styleUrl
})
export class HeroeListComponent {
  heroeService = inject(HeroeServiceService);
  listadoHeroes: any[] = [];

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
    // Obtiene los valores de los inputs del DOM
    const nombre = (document.getElementById('inputNombre') as HTMLInputElement).value;
    const poder = (document.getElementById('inputPoder') as HTMLInputElement).value;
    const universo = (document.getElementById('inputUniverso') as HTMLInputElement).value;
    const debilidad = (document.getElementById('inputDebilidad') as HTMLInputElement).value;

    // Crea un objeto con los datos del héroe
    const nuevoHeroe = {
      nombre,
      poder,
      universo,
      debilidad,
    };

    // Llama al servicio para agregar el héroe
    this.heroeService.addHeroe(nuevoHeroe).subscribe((data) => {
      if (data.estado === 1) {
        alert('Héroe agregado con éxito');
        this.CargarHeroes(); // Actualiza el listado de héroes
      } else {
        alert('Error al agregar el héroe');
      }
    });
  }
}
