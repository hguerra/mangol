import VectorLayer from 'ol/layer/Vector';

import { CursorMode } from './../../interfaces/cursor-mode';
import * as CursorActions from './cursor.actions';

export interface State {
  mode: CursorMode;
  visible: boolean;
  layer: VectorLayer;
}

const initialState: State = {
  mode: { text: null, cursor: 'default' },
  visible: false,
  layer: null
};

export function cursorReducer(
  state = initialState,
  action: CursorActions.CursorActions
) {
  switch (action.type) {
    case CursorActions.SET_MODE:
      return { ...state, mode: action.payload };
    case CursorActions.RESET_MODE:
      return { ...state, mode: initialState.mode };
    case CursorActions.SET_VISIBLE:
      return { ...state, visible: action.payload };
    case CursorActions.SET_LAYER:
      return { ...state, layer: action.payload };
    default:
      return state;
  }
}
