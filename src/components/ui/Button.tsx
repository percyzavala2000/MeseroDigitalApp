import React from 'react'
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { View, Text } from 'react-native'
import { colors, globalStyles } from '../../config/theme/theme';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>
  onPress: () => void;

}

export const Button = ( {text,styles,onPress}:Props ) => {
// render
  return (
    <Pressable onPress={onPress} style={({pressed})=>([ globalStyles.btnPrimary  ,{
      opacity: pressed ? 0.6 : 1,
      backgroundColor: colors.primary,
    }])}   >
      <Text style={
        [
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          }
        ]
      }  > {text} </Text>
    </Pressable>
  )
}
