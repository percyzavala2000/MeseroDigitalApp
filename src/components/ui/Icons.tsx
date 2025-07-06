import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
interface props {
  name: string;
  size?: number;
  color?: string;
}

export const Icons = ({name,size,color}:props) => {
// render
  return (
    <Icon name={name} size={size} color={color}  />
  )
}
