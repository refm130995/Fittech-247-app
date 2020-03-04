import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path: 'eye',
        loadChildren: '../rutina/rutina.module#RutinaPageModule'
      },
      {
        path: 'nutrition',
        loadChildren: '../comida/comida.module#ComidaPageModule'
      },
      {
        path: 'about',
        loadChildren: '../perfil/perfil.module#PerfilPageModule'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
