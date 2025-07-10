import React, { useReducer } from 'react'
import { View, Text } from 'react-native'
import { SpringContext } from './SpringContext';
import { springReducer } from './SpringReducer';


type SpringProviderProps = {
  children?: React.ReactNode;
}


export const SpringProvider = ({children}:SpringProviderProps) => {

  const initialState = {
    menu:[]
  }

  const [state,dispatch]=useReducer(springReducer, initialState);


// render
  return (
    <SpringContext.Provider value={{menu:state}} >
      {children}
    </SpringContext.Provider>
  )
}
