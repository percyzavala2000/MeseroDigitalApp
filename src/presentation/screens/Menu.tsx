import React from 'react'
import { View, Text} from 'react-native'
import Card from '../../components/ui/Card';
import { CustomView } from '../../components/ui/CustomView';
import { Icons } from '../../components/ui/Icons';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';

export const Menu = () => {
// render
  return (
    <CustomView margin>
    
          <Title text="Menu" safe />
          <Text>HomeScreen</Text>
          <Card>
          <Icons name="shirt-outline" size={25} color='red'/>
          <Button onPress={()=>{}} text='enviar' />
          </Card>
        </CustomView>
  )
}
