import { Note } from '../../../../core/models/note';
import * as notesActions from '../actions/notes.action';

export interface State {
  ids: string[];
  entities: { [id: string]: Note };
}

export const INIT_STATE: State = {
  ids: [],
  entities: {},
};

export function reducer(state = INIT_STATE, action: notesActions.All): State {
  switch (action.type) {
    case notesActions.NOTES_LISTED:
      const { payload } = action;
      const ids = Object.keys(payload);
      return {
        ...state,
        ids,
        entities: payload,
      };
    default:
      return state;
  }
}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;
export const getEntitiesArray = (state: State) =>
  state.ids.map(id => state.entities[id]);
