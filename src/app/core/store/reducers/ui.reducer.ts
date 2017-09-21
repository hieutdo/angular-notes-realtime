import * as uiActions from '../actions/ui.actions';

export interface State {
  socketConnected: boolean;
}

export const INIT_STATE: State = {
  socketConnected: false,
};

export function reducer(state = INIT_STATE, { type, payload }: uiActions.All) {
  switch (type) {
    case uiActions.SET_SOCKET_CONNECTED:
      return {
        ...state,
        socketConnect: payload,
      };
    default:
      return state;
  }
}

export const getSocketStatus = (state: State): boolean => state.socketConnected;