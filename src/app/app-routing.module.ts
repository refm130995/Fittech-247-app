import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'objetivo',
    loadChildren: () => import('./objetivo/objetivo.module').then( m => m.ObjetivoPageModule)
  },
  {
    path: 'pasoinicial',
    loadChildren: () => import('./pasoinicial/pasoinicial.module').then( m => m.PasoinicialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'registrar-info',
    loadChildren: () => import('./registrar-info/registrar-info.module').then( m => m.RegistrarInfoPageModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./experiencia/experiencia.module').then( m => m.ExperienciaPageModule)
  },
  {
    path: 'lugar-ejercicios',
    loadChildren: () => import('./lugar-ejercicios/lugar-ejercicios.module').then( m => m.LugarEjerciciosPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'corazon',
    loadChildren: () => import('./corazon/corazon.module').then( m => m.CorazonPageModule)
  },
  {
    path: 'antecedentefamiliar',
    loadChildren: () => import('./antecedentefamiliar/antecedentefamiliar.module').then( m => m.AntecedentefamiliarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
