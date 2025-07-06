import React from 'react'
import { View, Text } from 'react-native'

import { Title } from '../../components/ui/Title';
import { Icons } from '../../components/ui/Icons';
import { Button } from '../../components/ui/Button';
import { CustomView } from '../../components/ui/CustomView';
import Card from '../../components/ui/Card';

export const HomeScreen = () => {
// render
  return (
    <CustomView margin>

      <Title text="Home" safe white/>
      <Text>HomeScreen</Text>
      <Card>
      <Icons name="shirt-outline" size={25} color='red'/>
      <Button onPress={()=>{}} text='enviar' />
      </Card>
    </CustomView>
  )
}
