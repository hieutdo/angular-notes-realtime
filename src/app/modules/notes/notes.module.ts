import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NoteListComponent } from './note-list/note-list.component';
import { NotesRoutingModule } from './notes.routes';

@NgModule({
  imports: [CommonModule, NotesRoutingModule],
  declarations: [NoteListComponent],
})
export class NotesModule {}
