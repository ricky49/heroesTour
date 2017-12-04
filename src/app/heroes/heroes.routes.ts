import {RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component'



const routes = [
    { path: '', component: HeroesComponent }
];

export default RouterModule.forChild(routes);
