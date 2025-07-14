
import { createContext } from 'react';
import { Menu } from '../../../domain/entities/Menu';
import { DetallePedido } from '../../../infrastructure/interfaces/menu-db.response';



interface PedidosContextProps {
  pedido: DetallePedido[];
  platillo: Menu | null;
  idPedido: string;
  seleccionarPlatillo: (platillo: any) => void;
  guardarPedido: (pedido: any) => void;
  // Agrega las funciones que necesitas en el contexto
  eliminarProducto: (id: string) => void;
  mostrarResumen: (total: number) => void;
  pedidoRealizado: (id: string) => void;
  total: number;
}

export const PedidosContext = createContext<PedidosContextProps>({
  pedido: [],
  platillo: null,
  seleccionarPlatillo: () => {},
  guardarPedido: () => {},
  eliminarProducto: () => {},
  mostrarResumen: () => {},
  pedidoRealizado: () => {},
  total: 0,
  idPedido: '',

});