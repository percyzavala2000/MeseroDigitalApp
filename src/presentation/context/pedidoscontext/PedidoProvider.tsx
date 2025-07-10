import React, { useEffect, useReducer } from 'react';
import { View, Text } from 'react-native';

import { useMenu } from '../../hooks/useMenu';
import { PedidosContext } from './PedidosContext';
import { PedidosReducer } from './PedidoReducer';

type PedidosProviderProps = {
  children?: React.ReactNode;
};

export const PedidosProvider = ({ children }: PedidosProviderProps) => {

  const initialState = {
    pedido: [],
  };

  const [state, dispatch] = useReducer(PedidosReducer, initialState);
  

  console.log('SpringProvider - Initial State:', state);

  // render
  return (
    <PedidosContext.Provider value={{ pedido: state }}>
      {children}
    </PedidosContext.Provider>
  );
};
