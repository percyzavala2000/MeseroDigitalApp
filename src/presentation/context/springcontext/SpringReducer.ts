import { Menu } from '../../../domain/entities/Menu';

export interface SpringReducerState {
  menu: Menu[];
}

export const initialState: SpringReducerState = {
  menu: [],
};

type ActionProps =
  | { type: 'SET_MENU'; payload: Menu[] }
  | { type: 'UPDATE_PRODUCTO'; payload: Menu };

export const springReducer = (
  state: SpringReducerState = initialState,
  { type, payload }: ActionProps,
): SpringReducerState => {
  switch (type) {
    case 'SET_MENU':
      return {
        ...state,
        menu: payload,
      };
    case 'UPDATE_PRODUCTO': {
  const actualizado = payload;
  const existe = state.menu.find(p => p.id === actualizado.id);
  console.log('Producto actualizado:', actualizado);
  console.log('Producto existente:', existe);

  if (!existe && actualizado.estado === 'DISPONIBLE') {
    // Nuevo producto disponible, lo agregamos
    return {
      ...state,
      menu: [...state.menu, actualizado],
    };
  }

  if (actualizado.estado === 'NO_DISPONIBLE') {
    // Si no disponible, lo eliminamos
    return {
      ...state,
      menu: state.menu.filter(p => p.id !== actualizado.id),
    };
  }

  // Si existe y está disponible, lo actualizamos
  return {
    ...state,
    menu: state.menu.map(p =>
      p.id === actualizado.id ? actualizado : p
    ),
  };
}
    default:
      return state.menu.length > 0 ? state : initialState;
  }
};
