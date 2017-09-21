import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { NotesService } from '../../services/notes.service';
import * as notesActions from '../actions/notes.action';

@Injectable()
export class NotesEffects {
  @Effect({ dispatch: false })
  listNotes$ = this.actions$
    .ofType(notesActions.LIST_NOTES)
    .startWith(new notesActions.NotesListed()) // reset list of notes to empty list
    .do(() => this.notesService.listNotes());

  @Effect()
  notesListed$: Observable<
    Action
  > = this.notesService.notesListed$.switchMap(notes =>
    Observable.of(new notesActions.NotesListed(notes))
  );

  constructor(private actions$: Actions, private notesService: NotesService) {}
}
