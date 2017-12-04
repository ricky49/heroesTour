import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router/src/router_module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from 'app/hero-detail/hero-detail.component';



const routes = [
  { path: 'heroes', loadChildren: './heroes/heroes.module' },
  { path : 'dashboard', component: DashboardComponent},
  { path : 'detail/:id', component: HeroDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export default RouterModule.forRoot(routes)
