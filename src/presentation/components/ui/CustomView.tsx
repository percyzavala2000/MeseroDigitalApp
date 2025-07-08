import React from 'react'
import { ViewStyle } from 'react-native';
import { View,  StyleProp } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';


interface Props {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  margin?: boolean;
}

export const CustomView = ({style,children,margin=false}:Props) => {
// render
  return (
    <View style={[
      globalStyles.mainContainer,
      margin ? globalStyles.globalMargin:null,
      style
    ]} >
      {children}
    </View>
  )
}
