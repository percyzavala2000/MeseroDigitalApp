import React, { useEffect, useState } from 'react';
import { Menu } from '../../domain/entities/Menu';
import { menuGetUseCase } from '../../domain/use-cases/menu/get-menu.use-case';
import { meseroDBFetcher } from '../../config/api/meseroDB.adapter';

export const useMenu = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState<Menu[]>();

  useEffect(() => {
    loadMenu();
  }, []);
  
  const loadMenu = async () => {
    setIsLoading(true);
    try {
      const menuData = await menuGetUseCase(meseroDBFetcher);
      console.log('desde efecto', menuData);
      setMenu(menuData);
    } catch (error) {
      console.error('Error cargando menú:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Devuelve estados y props útiles para el componente
  return {
    isLoading,
    menu,
  };
};
