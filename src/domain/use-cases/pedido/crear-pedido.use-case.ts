import { HttpAdapter } from '../../../config/api/http/http.adapter';
import { PedidoCreadoResponse, PedidoRequest } from '../../../infrastructure/interfaces/menu-db.response';


export const crearPedidoUseCase = async (
  fetcher: HttpAdapter,
  pedido: PedidoRequest
): Promise<PedidoCreadoResponse> => {
  try {
    const response = await fetcher.post<PedidoCreadoResponse>('/pedidos', pedido);
    return response;
  } catch (error) {
    throw new Error(`Error al crear el pedido: ${error}`);
  }
};
