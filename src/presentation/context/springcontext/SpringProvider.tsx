import React, { useEffect, useReducer } from 'react';
import { SpringContext } from './SpringContext';
import { springReducer } from './SpringReducer';
import { useMenu } from '../../hooks/useMenu';
import useWebSocket from '../../hooks/useWebSocket';

import { Menu } from '../../../domain/entities/Menu';

interface SpringProviderProps {
  children?: React.ReactNode;
}

export const SpringProvider = ({ children }: SpringProviderProps) => {
  const { isLoading, menu } = useMenu();

  const initialState = {
    menu,
  };

  const [state, dispatch] = useReducer(springReducer, initialState);

  useEffect(() => {
  if (menu && menu.length > 0) {
    dispatch({ type: 'SET_MENU', payload: menu });
  }
}, [menu]);

  // Aquí usamos el WebSocket para actualizaciones en tiempo real
  useWebSocket(
    (productoActualizado: Menu) => {
    dispatch({ type: 'UPDATE_PRODUCTO', payload: productoActualizado });
  },
    () => {} // No usamos onPedidoChange aquí, pero puedes agregarlo luego
  );

  return (
    <SpringContext.Provider value={state}>
      {children}
    </SpringContext.Provider>
  );
};
