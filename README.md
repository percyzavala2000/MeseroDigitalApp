# MeseroDigitalApp 🍽️📱

**MeseroDigitalApp** es una aplicación móvil desarrollada en **React Native** que permite a los clientes de un restaurante visualizar el menú, realizar pedidos y hacer seguimiento del estado de sus órdenes en tiempo real. Esta app se integra con un backend desarrollado en Spring Boot mediante una API REST y WebSockets para actualización en tiempo real.

---

## 📱 Tecnologías utilizadas

- [React Native](https://reactnative.dev/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- WebSockets con [STOMP](https://stomp-js.github.io/) y [SockJS](https://github.com/sockjs/sockjs-client)

---

## 🧩 Estructura del Proyecto

```
meserodigitalApp/
├── src/
│ ├── application/
│ ├── domain/
│ ├── infrastructure/
│ ├── presentation/
│ ├── config/
│ └── App.tsx
├── assets/
├── package.json
└── README.md
```

- `application/`: Casos de uso (useCases)
- `domain/`: Entidades principales como `Pedido`, `DetallePedido`, `Menu`
- `infrastructure/`: Interfaces con el backend (API adapters, mappers, responses)
- `presentation/`: Componentes visuales y pantallas (UI)
- `config/`: Archivos de configuración como `WebSocketProvider`, `HttpAdapter`, etc.

---

## ⚙️ Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/percyzavala2000/meserodigitalApp.git
cd meserodigitalApp
```
2. Instala las dependencias:

```bash
npm install
```
3. Inicia el servidor de desarrollo:

```bash
npx react-native run-android
# o para iOS
npx react-native run-ios
```
## 📦 Conexion con e Backend
Asegúrate de que el backend de Spring Boot esté corriendo en el puerto configurado (por defecto `8080`). La aplicación móvil se conectará a la API REST para obtener el menú y enviar pedidos, y utilizará WebSockets para recibir actualizaciones en tiempo real sobre el estado de los pedidos.
## 🛠️ Configuraciones Url base de backend
Puedes configurar la URL base del backend en el archivo `src/config/HttpAdapter.ts`:

```swift
// src/config/HttpAdapter.ts
src/config/api/http/http.adapter.ts
export const BASE_URL = 'http://localhost:8080/api'; // Cambia localhost por la IP del servidor si es necesario
```
## Funcionalidades principales
- **Visualización del menú**: Los clientes pueden ver los platos disponibles, sus descripciones y precios.
- **Realización de pedidos**: Los clientes pueden seleccionar platos y realizar pedidos directamente desde la app.
- **Seguimiento de pedidos**: Los clientes pueden ver el estado de sus pedidos en tiempo real gracias a la integración con WebSockets.
- **Interfaz amigable**: Utiliza componentes de React Native Paper para una experiencia de usuario fluida y moderna.
- **Pedidos no disponibles**: Productos no disponibles se actualizan en tiempo real vía WebSocket

## Autores
Desarrollado por Percy Zavala Muñoz


 