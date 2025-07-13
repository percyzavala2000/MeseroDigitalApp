
import { createContext } from 'react';
import { Menu } from '../../../domain/entities/Menu';


interface PedidosContextProps {
  pedido: Menu[];
  platillo: Menu | null;
  seleccionarPlatillo: (platillo: Menu) => void;
  guardarPedido: (pedido: any) => void;
}

export const PedidosContext = createContext<PedidosContextProps>({
  pedido: [],
  platillo: null,
  seleccionarPlatillo: () => {},
  guardarPedido: () => {},
});