import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CasaComponent } from './components/home/casa/casa.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


//import { Name2Component } from './';
//import { Name3Component } from './';
//import { Name4Component } from './';
//import { PageNotFoundComponent } from './';

const ROUTES: Routes = [
    { path: 'home', component: CasaComponent },
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent },
    //{ path: 'path3', component: Name3Component },
    //{ path: 'path4', component: Name4Component },
    //{ path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash:true});

// @NgModule({
//     imports: [RouterModule.forChild(ROUTES)],
//     exports: [RouterModule]
// })
//export class FeatureRoutingModule {}
