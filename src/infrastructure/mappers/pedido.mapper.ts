import { PedidoCreadoResponse } from '../interfaces/menu-db.response';

export class PedidoMapper {
  static fromJsonToPedido(data: any): PedidoCreadoResponse {
    return {
      id: data.id,
      fecha: data.fecha,
      estado: data.estado,
      idCliente: data.idCliente,
      tiempoEntrega: data.tiempoEntrega ?? 0,
      completado: data.completado ?? false, // ✅ asegúrate de incluirlo
      detalles: data.detalles?.map((d: any) => ({
        id: d.id,
        idProducto: d.idProducto,
        cantidad: d.cantidad,
        precioUnitario: d.precioUnitario,
      })) ?? [],
    };
  }
}