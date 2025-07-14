// src/context/pedidos/PedidosReducer.ts

import { Menu } from '../../../domain/entities/Menu';
import { DetallePedido} from '../../../infrastructure/interfaces/menu-db.response';

export interface PedidosReducerState {
  pedido: DetallePedido[];
  platillo: Menu | null;
    total: number;
    id: string;
}

export const initialState: PedidosReducerState = {
   pedido: [] as DetallePedido[],
  platillo: null,
  total: 0,
  id: ''
};

type ActionProps = {
  type: 'SELECCIONAR_PLATILLO';
  payload?: Menu;
}| {
  type: 'CONFIRMAR_ORDENAR_PLATILLO';
  payload?: DetallePedido;
}|{
  type: 'MOSTRAR_RESUMEN';
  payload?: number; 
}
|{
  type: 'ELIMINAR_PRODUCTO';
  payload?: string; 
} | {
  type: 'PEDIDO_ORDENADO';
  payload?: string; 
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
      return state;

    case 'MOSTRAR_RESUMEN':
      return {
        ...state,
        total: Number(payload) || 0,
      };

    case 'ELIMINAR_PRODUCTO':
      return {
        ...state,
        pedido: state.pedido.filter(p => p.id.toString() !== payload),
      };

    case 'PEDIDO_ORDENADO':
      return {
        ...state,
        id: payload?.toString() || '',
      };

    default:
      return state;
  }
};
