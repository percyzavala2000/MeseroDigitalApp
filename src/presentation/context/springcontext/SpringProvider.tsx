import React, { useEffect, useReducer } from 'react';
import { View, Text } from 'react-native';
import { SpringContext } from './SpringContext';
import { springReducer } from './SpringReducer';
import { useMenu } from '../../hooks/useMenu';

type SpringProviderProps = {
  children?: React.ReactNode;
};

export const SpringProvider = ({ children }: SpringProviderProps) => {

  const {isLoading,menu}  = useMenu(); // Custom hook to fetch menu data
  const initialState = {
    menu
  };

  const [state, dispatch] = useReducer(springReducer, initialState);
  useEffect(() => {
    if (menu) {
      dispatch({ type: 'SET_MENU', payload: menu });
    }
  }, [menu]);

  console.log('SpringProvider - Initial State:', state);

  // render
  return (
    <SpringContext.Provider value={ state }>
      {children}
    </SpringContext.Provider>
  );
};
