import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboards',
    children: [
      {
        path: 'dashboard1/:id',
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
        path: 'regions',
        loadChildren: () =>
          import('./pages/regions/regions.module').then((m) => m.RegionsModule),
      },
      { path: 'dashboards', loadChildren: () => import('./pages/dashboards/dashboards.module').then(m => m.DashboardsModule) },

    ],
  },
  { path: 'WeekResults', loadChildren: () => import('./pages/week-results/week-results.module').then(m => m.WeekResultsModule) },
  { path: 'database', loadChildren: () => import('./pages/database/database.module').then(m => m.DatabaseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
