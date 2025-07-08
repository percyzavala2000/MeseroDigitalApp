import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TitleProps {
  text:string;
  safe?: boolean;
  white?: boolean;
}

export const Title = ({text,safe,white}:TitleProps) => {
  const{top}=useSafeAreaInsets();
// render
  return (
   
      <Text style={{marginTop:safe?top:0,marginBottom:10,color:white?'white':"black"}} >{text} </Text>
    
  )
}
