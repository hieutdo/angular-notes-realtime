import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'notes',
    loadChildren: 'app/modules/notes/notes.module#NotesModule',
  },
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full',
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
