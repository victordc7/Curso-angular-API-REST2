import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  public lista: any;
  public modeloItem: any = { };
  constructor(private http: HttpClient) { }

  peticionExterna() {
    this.http.get('http://localhost:8080/api/lista').subscribe( (respuesta: HttpHeaders) => { this.lista = respuesta; } );
  }
  borrarRegistro(item) {
    this.http.delete('http://localhost:8080/api/lista/' + item._id ).subscribe( ( respuesta: HttpHeaders) => { this.lista = respuesta; } );
  }

  crearRegistro() {
    const parametros = { titulo : this.modeloItem.titulo, contenido : this.modeloItem.contenido };
    this.http.post('http://localhost:8080/api/lista', parametros ).subscribe( ( respuesta: HttpHeaders) => { this.lista = respuesta; } );
  }
}

