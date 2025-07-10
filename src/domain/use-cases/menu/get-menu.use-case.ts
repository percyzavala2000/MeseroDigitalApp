import { HttpAdapter } from '../../../config/api/http/http.adapter';
import { MeseroDBMenuResponse } from '../../../infrastructure/interfaces/menu-db.response';
import { MenuMapper } from '../../../infrastructure/mappers/menu.mapper';
import { Menu } from '../../entities/Menu';

export const menuGetUseCase = async (
  fetcher: HttpAdapter,
  menuId?: number,
): Promise<Menu[]> => {
  try {
    const response = await fetcher.get<MeseroDBMenuResponse[]>(`pedidos`);
    const menus = response.map(menu =>
      MenuMapper.fromMenuDBToEntity(menu)
    );
    console.log('response desde get-menu.use-case', menus);
    if (menuId !== undefined) {
      const encontrado = menus.find(menu => menu.id === menuId);
      if (encontrado) {
        return [encontrado, ...menus.filter(menu => menu.id !== menuId)];
      }
    }

    return menus;
  } catch (error) {
    console.log('response desde get-menu.use-case', error);
    throw new Error(`Error fetching menu with ID ${menuId}: ${error}`);
  }
};
