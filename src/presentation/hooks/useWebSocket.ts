import { useEffect, useReducer, useRef } from 'react';
import { Client, IMessage } from '@stomp/stompjs';
import { Menu } from '../../domain/entities/Menu';
import { springReducer } from '../context/springcontext/SpringReducer';
import { useMenu } from './useMenu';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

// @ts-ignore: Parche necesario para que STOMP funcione en React Native
global.WebSocket = W3CWebSocket;


export default function useWebSocket(
  onProductoChange: (producto: Menu) => void,
  onPedidoChange?: (pedido: any) => void,
) {
  const { isLoading, menu } = useMenu();
  const initialState = { menu };
  const [state, dispatch] = useReducer(springReducer, initialState);

  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const client = new Client({
      webSocketFactory:()=> new W3CWebSocket('http://localhost:8080/ws/websocket'),
      reconnectDelay: 5000,
      debug: str => console.log('[WebSocket Debug]', str),
      onConnect: () => {
        console.log('✅ Conectado al WebSocket');

        // Suscribirse a cambios de productos
        client.subscribe('/topic/productos', (message: IMessage) => {
          try {
            const productosActualizados: Menu[] = JSON.parse(message.body);
            console.log('🆕 Productos recibidos:', productosActualizados);
            dispatch({ type: 'SET_MENU', payload: productosActualizados });

            // Notificar si quieres hacer algo extra por cada cambio
            productosActualizados.forEach(onProductoChange);
          } catch (err) {
            console.error('❌ Error al parsear productos', err);
          }
        });

        // Suscribirse a cambios de pedidos si se pasó callback
        if (onPedidoChange) {
          client.subscribe('/topic/pedidos', (message: IMessage) => {
            try {
              const pedidoActualizado = JSON.parse(message.body);
              onPedidoChange(pedidoActualizado);
            } catch (err) {
              console.error('❌ Error al parsear pedido', err);
            }
          });
        }
      },
      onStompError: frame => {
        console.error('❌ STOMP error', frame.headers['message']);
        console.error('Detalles:', frame.body);
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      if (clientRef.current && clientRef.current.active) {
        clientRef.current.deactivate();
        console.log('🔌 WebSocket desconectado');
      }
    };
  }, []); // No agregues `menu` como dependencia aquí
}