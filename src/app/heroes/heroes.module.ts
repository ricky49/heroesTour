import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common/src/common_module';
import heroesRoutes from './heroes.routes';
import { HeroesComponent } from './heroes.component';

@NgModule({
    declarations: [
        HeroesComponent
    ],
    imports: [ heroesRoutes]
  })

  export default class HeroesModule {}
