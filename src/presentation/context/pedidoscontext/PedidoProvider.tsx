import React, { useReducer } from 'react';
import { PedidosContext } from './PedidosContext';
import { PedidosReducer, initialState } from './PedidoReducer';
import { Menu } from '../../../domain/entities/Menu';
import { DetallePedido } from '../../../infrastructure/interfaces/menu-db.response';

type PedidosProviderProps = {
  children?: React.ReactNode;
};

export const PedidosProvider = ({ children }: PedidosProviderProps) => {
  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  // Selecciona el producto que el usuario quiere ordenar
  const seleccionarPlatillo = (platillo: Menu) => {
    dispatch({
      type: 'SELECCIONAR_PLATILLO',
      payload: platillo,
    });
    console.log('Seleccionando platillo:', platillo);
  };

  // Agrega un platillo confirmado al pedido
  const guardarPedido = (detalle: DetallePedido) => {
    dispatch({
      type: 'CONFIRMAR_ORDENAR_PLATILLO',
      payload: detalle,
    });
    console.log('Pedido guardado:', detalle);
  };

  // Muestra el total en el resumen
  const mostrarResumen = (total: number) => {
    dispatch({
      type: 'MOSTRAR_RESUMEN',
      payload: total,
    });
  };

  // Elimina un producto del pedido
  const eliminarProducto = (id: string) => {
    dispatch({
      type: 'ELIMINAR_PRODUCTO',
      payload: id,
    });
  };

  // Guarda el ID del pedido recién creado
  const pedidoRealizado = (id: string) => {
    dispatch({
      type: 'PEDIDO_ORDENADO',
      payload: id,
    });
  };

  return (
    <PedidosContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        total: state.total,
        idPedido: state.id,
        seleccionarPlatillo,
        guardarPedido,
        eliminarProducto,
        mostrarResumen,
        pedidoRealizado,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};