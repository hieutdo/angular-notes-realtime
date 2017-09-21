import { Action } from '@ngrx/store';

export const SET_SOCKET_CONNECTED = '[UI] Set Socket Connected';

export class SetSocketConnected implements Action {
  readonly type = SET_SOCKET_CONNECTED;
  constructor(public payload: boolean) {}
}

export type All = SetSocketConnected;
