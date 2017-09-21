import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUI from './reducers/ui.reducer';

export interface State {
  ui: fromUI.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUI.reducer,
};

export const selectUiState = createFeatureSelector<fromUI.State>('ui');
export const selectSocketStatus = createSelector(
  selectUiState,
  fromUI.getSocketStatus
);
