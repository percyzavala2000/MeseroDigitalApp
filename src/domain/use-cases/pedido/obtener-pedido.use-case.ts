import { HttpAdapter } from '../../../config/api/http/http.adapter';
import { PedidoCreadoResponse } from '../../../infrastructure/interfaces/menu-db.response';
import { PedidoMapper } from '../../../infrastructure/mappers/pedido.mapper';

export const obtenerPedidoUseCase = async (
  fetcher: HttpAdapter,
  idPedido: string
): Promise<PedidoCreadoResponse> => {
  try {
    const response = await fetcher.get<any>(`/pedidos/${idPedido}`);
    return PedidoMapper.fromJsonToPedido(response);
  } catch (error) {
    throw new Error(`Error al obtener el pedido ${idPedido}: ${error}`);
  }
};
