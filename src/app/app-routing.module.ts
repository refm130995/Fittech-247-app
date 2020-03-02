import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'objetivo',
    loadChildren: () => import('./pages/objetivo/objetivo.module').then( m => m.ObjetivoPageModule)
  },
  {
    path: 'pasoinicial',
    loadChildren: () => import('./pages/pasoinicial/pasoinicial.module').then( m => m.PasoinicialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./pages/terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'registrar-info',
    loadChildren: () => import('./registrar-info/registrar-info.module').then( m => m.RegistrarInfoPageModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./pages/experiencia/experiencia.module').then( m => m.ExperienciaPageModule)
  },
  {
    path: 'lugar-ejercicios',
    loadChildren: () => import('./pages/lugar-ejercicios/lugar-ejercicios.module').then( m => m.LugarEjerciciosPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./pages/actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'corazon',
    loadChildren: () => import('./corazon/corazon.module').then( m => m.CorazonPageModule)
  },
  {
    path: 'antecedentefamiliar',
    loadChildren: () => import('./pages/antecedentefamiliar/antecedentefamiliar.module').then( m => m.AntecedentefamiliarPageModule)
  },
  {
    path: 'test-fuerza-info',
    loadChildren: () => import('./pages/TestFuerza/test-fuerza-info/test-fuerza-info.module').then( m => m.TestFuerzaInfoPageModule)
  },
  {
    path: 'test-fuerza-manual',
    loadChildren: () => import('./pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.module').then( m => m.TestFuerzaManualPageModule)
  },
  {
    path: 'test-fuerza-pasos1',
    loadChildren: () => import('./pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.module').then( m => m.TestFuerzaPasos1PageModule)
  },
  {
    path: 'test-fuerza-pasos2',
    loadChildren: () => import('./pages/TestFuerza/test-fuerza-pasos2/test-fuerza-pasos2.module').then( m => m.TestFuerzaPasos2PageModule)
  },
  {
    path: 'test-fuerza-pasos3',
    loadChildren: () => import('./pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.module').then( m => m.TestFuerzaPasos3PageModule)
  },
  {
    path: 'test-fuerza-pasos4/:id',
    loadChildren: () => import('./pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.module').then( m => m.TestFuerzaPasos4PageModule)
  },
  {
    path: 'test-fuerza-menu',
    loadChildren: () => import('./pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.module').then( m => m.TestFuerzaMenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
