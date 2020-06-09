import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html'
})
export class HeroesTarjetaComponent implements OnInit {

  @Input() heroes: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router : Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log( this.index );
    this.router.navigate( ['/heroe', this.index]);
    // this.heroeSeleccionado.emit( this.index );
  }

}
