import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboards',
    children: [
      {
        path: 'dashboard1',
        loadChildren: () =>
          import('./pages/dashboard1/dashboard1.module').then(
            (m) => m.Dashboard1Module
          ),
      },
    ],
  },
  {
    path: 'configs',
    children: [
      {
        path: 'managers',
        loadChildren: () =>
          import('./pages/managers/managers.module').then(
            (m) => m.ManagersModule
          ),
      },

      {
        path: 'areas',
        loadChildren: () =>
          import('./pages/areas/areas.module').then((m) => m.AreasModule),
      },

      {
        path: 'regions',
        loadChildren: () =>
          import('./pages/regions/regions.module').then((m) => m.RegionsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
