import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { heroe } from '../data/heroe-entity';
import { heroes } from '../data/heroes-entity';


@Injectable({
  providedIn: 'root'
})
export class HeroeServiceService {
  urlApi = "https://adl-wcbdf-eje-10-superheroes.onrender.com/api/v1/heroes"
  //urlApi = "https://jsonplaceholder.typicode.com/users"
  // Inyectamos el cliente http para conectarnos
  constructor( private httpClient: HttpClient) { }
  //get
  getAllHeroes():Observable<heroes>{
    return this.httpClient.get<heroes>(this.urlApi)
  }
  //get by id
  getHeroe(id:number):Observable<heroe>{
    return this.httpClient.get<heroe>(this.urlApi+"/"+id)
  }
  //post
  postHeroe(Heroe:any):Observable<heroe>{
    return this.httpClient.post<heroe>(this.urlApi,Heroe)
  }
  //put
  putHeroe(id:number, Heroe:heroe):Observable<heroe>{
    return this.httpClient.put<heroe>(this.urlApi+"/"+id,Heroe)
  }
  //delete
  deleteHeroe(id:number):Observable<heroe>{
    return this.httpClient.delete<heroe>(this.urlApi+"/"+id)
  }

}