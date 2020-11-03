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
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: 'course-select',
    loadChildren: () =>
      import('./pages/course-select/course-select.module').then(
        (m) => m.CourseSelectPageModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/events/events.module').then((m) => m.EventsPageModule),
  },
  {
    path: 'event-details/:id',
    loadChildren: () =>
      import('./pages/event-details/event-details.module').then(
        (m) => m.EventDetailsPageModule
      ),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'task-edit',
    loadChildren: () => import('./pages/task-edit/task-edit.module').then( m => m.TaskEditPageModule)
  },
  {
    path: 'installation',
    loadChildren: () => import('./pages/installation/installation.module').then( m => m.InstallationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
