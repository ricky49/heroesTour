import {RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes.component';

const routes = [
    { path: '', component: HeroesComponent }
];

export default RouterModule.forChild(routes);
