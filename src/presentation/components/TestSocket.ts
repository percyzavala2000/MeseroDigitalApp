import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useEffect } from 'react';

export default function TestSocket() {
  useEffect(() => {
    const socket = new W3CWebSocket('ws://192.168.18.9:8080/ws/websocket');

    socket.onopen = () => {
      console.log('✅ WebSocket abierto correctamente');
    };

    socket.onerror = (err) => {
      console.log('❌ Error de conexión', err);
    };

    socket.onclose = () => {
      console.log('🔌 Conexión cerrada');
    };
  }, []);

  return null;
}
