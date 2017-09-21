import { Action } from '@ngrx/store';

import { Note } from '../../../../core/models/note';

export const LIST_NOTES = '[Notes] List';
export const NOTES_LISTED = '[Notes] Listed';

export class ListNotes implements Action {
  readonly type = LIST_NOTES;
}

export class NotesListed implements Action {
  readonly type = NOTES_LISTED;
  constructor(public payload?: { [id: string]: Note }) {}
}

export type All = ListNotes | NotesListed;
