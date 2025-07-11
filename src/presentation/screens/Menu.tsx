import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Card from '../components/ui/Card';
import { CustomView } from '../components/ui/CustomView';
import { Icons } from '../components/ui/Icons';
import { Button } from '../components/ui/Button';
import { Title } from '../components/ui/Title';
import { SpringContext } from '../context/springcontext/SpringContext';

export const Menu = () => {
  const { menu } = useContext(SpringContext);
  console.log('Menu - Context:', menu);
  // render
  return (
    <CustomView margin>
      <Title safe text="Desde titulo" />
      <Text>HomeScreen</Text>
      <Card>
        <Icons name="shirt-outline" size={25} color="red" />
        <Button onPress={() => {}} text="enviar" />
      </Card>
    </CustomView>
  );
};
