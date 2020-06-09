import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from './services/heroes.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CasaComponent } from './components/home/casa/casa.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { HeroesTarjetaComponent } from './components/heroes-tarjeta/heroes-tarjeta.component';
import { BuscadorTarjetaComponent } from './components/buscador-tarjeta/buscador-tarjeta.component';

//
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CasaComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    HeroesTarjetaComponent,
    BuscadorTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
    
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
