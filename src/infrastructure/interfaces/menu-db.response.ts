

export type MeseroDBMenuResponse = MeseroDBMenuItem[];
export interface MeseroDBMenuItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: null | string;
  estado: string;
  categoria: string;
}

export interface PedidoCreadoResponse {
  id: string;
  fecha: string;
  estado: string;
  idCliente: number;
  detalles: DetallePedidoResponse[];
}

export interface DetallePedidoResponse {
  id: number;
  idProducto: number;
  cantidad: number;
  precioUnitario: number;
}
// src/infrastructure/interfaces/detalle-pedido.interface.ts
export interface DetallePedido {
  id: number;
  nombre: string;
  imagen: string | null;
  cantidad: number;
  precioUnitario: number;
  total: number;
}