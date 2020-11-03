import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/timetable',
    pathMatch: 'full',
  },
  {
    path: 'timetable',
    loadChildren: () =>
      import('./pages/timetable/timetable.module').then(
        (m) => m.TimetablePageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'course-select',
    loadChildren: () => import('./pages/course-select/course-select.module').then( m => m.CourseSelectPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
