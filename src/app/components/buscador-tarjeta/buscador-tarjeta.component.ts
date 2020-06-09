import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador-tarjeta',
  templateUrl: './buscador-tarjeta.component.html'
})
export class BuscadorTarjetaComponent implements OnInit {

  @Input() heroes:any = {};
  @Input() index: number;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  verHeroe(){
    console.log(this.index);
    this.router.navigate( ['/heroe', this.index]);
  }
}
