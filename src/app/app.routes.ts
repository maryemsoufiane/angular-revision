import { Routes } from '@angular/router';
import { MyFirstComp } from './my-first-comp/my-first-comp';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  {
    path: '',                // 👈 route par défaut
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MyFirstComp
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
