import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import heroesRoutes from './heroes.routes';
import { HeroesComponent } from './heroes.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroService } from 'app/hero.service';

@NgModule({
    declarations: [
        HeroesComponent
    ],
    imports: [ heroesRoutes, CommonModule, FormsModule ],
    providers: []
  } )

  export default class HeroesModule {}
