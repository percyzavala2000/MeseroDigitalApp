// src/context/pedidos/PedidosReducer.ts

import { Menu } from '../../../domain/entities/Menu';

export interface PedidosReducerState {
  pedido: Menu[];
  platillo: Menu | null;
}

export const initialState: PedidosReducerState = {
  pedido: [],
  platillo: null,
};

type ActionProps = {
  type: 'SELECCIONAR_PLATILLO';
  payload?: Menu;
}| {
  type: 'CONFIRMAR_ORDENAR_PLATILLO';
  payload?: Menu;
};

export const PedidosReducer = (
  state: PedidosReducerState = initialState,
  { type, payload }: ActionProps,
): PedidosReducerState => {
  switch (type) {
    case 'SELECCIONAR_PLATILLO':
      return {
        ...state,
        platillo: payload || null,
      };
    case 'CONFIRMAR_ORDENAR_PLATILLO':
      if (payload) {
        return {
          ...state,
          pedido: [...state.pedido, payload],
        };
      }
    default:
      return state;
  }
};
