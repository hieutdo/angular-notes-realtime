import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SocketService } from '../../core/services/socket.service';
import { NoteListComponent } from './note-list/note-list.component';
import { NotesRoutes } from './notes.routes';
import { NotesService } from './services/notes.service';
import * as fromNotesStore from './store';
import { NotesEffects } from './store/effects/notes.effects';
import { NoteItemComponent } from './note-item/note-item.component';

@NgModule({
  declarations: [NoteListComponent, NoteItemComponent],
  imports: [
    CommonModule,
    NotesRoutes,
    StoreModule.forFeature('notes', fromNotesStore.reducers),
    EffectsModule.forFeature([NotesEffects]),
  ],
  providers: [SocketService, NotesService],
})
export class NotesModule {}
