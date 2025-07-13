import { Menu } from '../../../domain/entities/Menu';


export interface SpringReducerState {
  menu: Menu[];
}

export const initialState: SpringReducerState = {
  menu: [],
};

interface ActionProps {
  type: 'SET_MENU';
  payload: Menu[];
}
export const springReducer = (
  state: SpringReducerState = initialState,
  { type, payload }: ActionProps
): SpringReducerState => {
  switch (type) {
    case 'SET_MENU':
      return {
        ...state,
        menu: payload,
      };

    default:
      return state.menu.length > 0 ? state : initialState;
  }
};