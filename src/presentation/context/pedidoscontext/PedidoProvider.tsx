import React, { useReducer } from 'react';
import { PedidosContext } from './PedidosContext';
import { PedidosReducer, initialState } from './PedidoReducer';
import { Menu } from '../../../domain/entities/Menu';


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

  //CUANDO UN USUARIO CONFIRMA UN PEDIDO
  const guardarPedido = (pedido: any) => {
    dispatch({
      type: 'CONFIRMAR_ORDENAR_PLATILLO',
      payload: pedido,
    });
    console.log('Pedido guardado:', pedido);
  };

  return (
    <PedidosContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        seleccionarPlatillo,
        guardarPedido,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};