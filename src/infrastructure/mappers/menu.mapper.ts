import { Menu } from '../../domain/entities/Menu';


export class MenuMapper {
  static fromMenuDBToEntity  (menuData: any): Menu {
    return {
      id: menuData.id,
      nombre: menuData.nombre,
      descripcion: menuData.descripcion,
      precio: menuData.precio,
      stock: menuData.stock,
      imagen: menuData.imagen || null,
      estado: menuData.estado,
      categoria: menuData.categoria 
    };
  }


  
}