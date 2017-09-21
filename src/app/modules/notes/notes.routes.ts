import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  {
    path: '',
    component: NoteListComponent,
  },
];

export const NotesRoutes: ModuleWithProviders = RouterModule.forChild(routes);
