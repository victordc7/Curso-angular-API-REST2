import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  constructor( private mongoS: MongodbService) { }

  ngOnInit() {
    this.mongoS.peticionExterna();
  }

}
