
export interface DetallePedido {
  idProducto: number;
  nombre: string;
  imagen?: string | null;
  cantidad: number;
  precioUnitario: number;
  total: number;
}