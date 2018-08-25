import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  public lista: any;
  public parametros = { titulo : '', contenido : '' };
  public cambio = {};


  constructor(private http: HttpClient) { }

  peticionExterna() {
    this.http.get('http://localhost:8080/api/lista').subscribe( (respuesta: HttpHeaders) => { this.lista = respuesta; } );
  }
  borrarRegistro(item) {
    this.http.delete('http://localhost:8080/api/lista/' + item._id ).subscribe( ( respuesta: HttpHeaders) => { this.lista = respuesta; } );
  }

  crearRegistro() {
    this.http.post('http://localhost:8080/api/lista', this.parametros )
    .subscribe( ( respuesta: HttpHeaders) => { this.lista = respuesta; } );
  }

  editarRegistro(i: number, articulo: any) {
    for (const key in this.lista) {
      if (this.lista.hasOwnProperty(key)) {
        this.lista[key].mostrar = false;
      }
    }
    this.lista[i].mostrar = true;
    this.cambio = {titulo: articulo.titulo, contenido: articulo.contenido};
  }

  editarRegistroG(item, i) {
    this.http.put('http://localhost:8080/api/lista/' + item._id, this.cambio )
    .subscribe( ( respuesta: HttpHeaders) => { this.lista = respuesta; } );
    this.lista[i].mostrar = false;
  }

  cancelar(i: number) {
    this.lista[i].mostrar = false;
  }
}
