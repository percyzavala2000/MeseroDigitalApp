import React from 'react'
import { View, Text} from 'react-native'
import Card from '../components/ui/Card';
import { CustomView } from '../components/ui/CustomView';
import { Icons } from '../components/ui/Icons';
import { Button } from '../components/ui/Button';
import { Title } from '../components/ui/Title';


export const Menu = () => {
// render
  return (
    <CustomView margin>
    
         <Title safe text="Desde titulo"/>
          <Text>HomeScreen</Text>
          <Card>
          <Icons name="shirt-outline" size={25} color='red'/>
          <Button onPress={()=>{}} text='enviar' />
          </Card>
        </CustomView>
  )
}
