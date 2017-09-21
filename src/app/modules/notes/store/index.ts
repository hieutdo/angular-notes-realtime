import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store/src/selector';

import * as fromRoot from '../../../core/store';
import * as fromNotes from './reducers/notes.reducer';

export interface NotesState {
  notes: fromNotes.State;
}

export interface State extends fromRoot.State {
  notes: NotesState;
}

export const reducers: ActionReducerMap<NotesState> = {
  notes: fromNotes.reducer,
};

export const selectNotesRootState = createFeatureSelector<NotesState>('notes');
export const selectNotesState = createSelector(
  selectNotesRootState,
  (notesState: NotesState) => notesState.notes
);
export const selectEntities = createSelector(
  selectNotesState,
  fromNotes.getEntities
);
