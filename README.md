# Ecuador FC 🇪🇨⚽ - App de la Selección Ecuatoriana de Fútbol

¡Bienvenido a **Ecuador FC**, una aplicación móvil interactiva desarrollada con **React Native** y **Expo Go** dedicada a la Selección Ecuatoriana de Fútbol (La Tri). La aplicación cuenta con un diseño premium y moderno, combinando animaciones fluidas y los colores oficiales de la selección nacional (Azul Marino, Dorado y la Tricolor).

---

## 📱 Características y Funcionamiento

1. **Pantalla de Bienvenida (Splash Screen) Animada**:
   - Muestra el escudo oficial de la FEF con una animación de escala y desvanecimiento (*fade-in*).
   - Incluye una animación interactiva de un balón de fútbol (`⚽`) rebotando y rotando continuamente.
   - Posee una barra de carga con los colores de la bandera nacional (Amarillo, Azul, Rojo) que avanza hasta completarse en 3.8 segundos.
   - Después de cargar, realiza una transición fluida al inicio de la aplicación.

2. **Pantalla de Inicio (Inicio)**:
   - Cabecera temática con la bandera y el logo oficial.
   - Tarjetas de diseño premium con bordes dorados y soporte completo de contraste para modo claro y modo oscuro.
   - **Información del Equipo**: Detalle de datos de la FEF, estadio local (Estadio Rodrigo Paz Delgado), director técnico, etc.
   - **Participaciones en Mundiales**: Listado y logros de la Tri en las copas mundiales de la FIFA.
   - **Logros Destacados**: Recuadros visuales con hitos históricos y fortalezas.
   - **Sección "¿Sabías que?"**: Datos curiosos e históricos del equipo.

3. **Pantalla de Datos (Información)**:
   - Secciones interactivas animadas con entrada secuencial.
   - **Historia**: Resumen del surgimiento y la evolución del equipo.
   - **Palmarés Internacional**: Línea de tiempo interactiva.
   - **Leyendas**: Perfiles de grandes figuras históricas y contemporáneas, incluyendo a *Alberto Spencer, Álex Aguinaga, Antonio Valencia, Enner Valencia, Moisés Caicedo* y la nueva incorporación de la saga europea: **William Pacho**.
   - **Datos Curiosos**: Información sobre el factor de la altitud en Quito, el origen de "La Tri", etc.

---

## 🛠️ Tecnologías Utilizadas

- **React Native** (framework para desarrollo móvil multiplataforma).
- **Expo** y **Expo Go** (plataforma de desarrollo y sandbox para ejecución rápida).
- **React Native Reanimated** (animaciones fluidas de 60fps para transiciones e interactividad).
- **Expo Router** (enrutamiento nativo basado en archivos).
- **Expo Image** (carga optimizada de recursos e imágenes).

---

## 🚀 Cómo Ejecutar el Proyecto en tu Ordenador

### Requisitos Previos

Asegúrate de tener instalado en tu ordenador:
1. **Node.js** (versión 18 LTS o superior recomendada).
2. Un gestor de paquetes de Node: **pnpm** (recomendado, ya que el proyecto incluye un archivo de bloqueo `pnpm-lock.yaml`), o **npm**.

### Paso 1: Clonar y Acceder al Directorio

Si estás descargando el proyecto o clonando la carpeta desde tu terminal:
```bash
cd path/to/Moviles/MiniTri
```

### Paso 2: Instalar Dependencias

Instala todas las librerías necesarias ejecutando el siguiente comando en la raíz del proyecto:

Si usas **pnpm** (Recomendado):
```bash
pnpm install
```

Si usas **npm**:
```bash
npm install
```

### Paso 3: Iniciar el Servidor de Desarrollo (Metro)

Ejecuta el comando para encender el compilador de Expo:

```bash
npx expo start
```
*(o usa `pnpm expo start` / `npm run start`)*.

---

## 📲 Cómo Ejecutar la App en tu Dispositivo Móvil

Para ver y probar la aplicación en tiempo real en tu teléfono físico o tablet, sigue estos pasos:

### Opción A: En tu Dispositivo Físico (Recomendado)

1. Descarga la aplicación gratuita **Expo Go** en tu dispositivo:
   - **Android**: Disponible en la [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
   - **iOS (iPhone/iPad)**: Disponible en la [App Store](https://apps.apple.com/app/expo-go/id984023095).

2. Abre el servidor en tu ordenador (`npx expo start`). Verás un **Código QR** en la terminal.

3. **Escanear el Código**:
   - En **Android**: Abre la app *Expo Go* y presiona "Scan QR Code". Escanea el código de la pantalla.
   - En **iOS**: Abre la aplicación de *Cámara nativa* de tu iPhone y apunta al código QR. Te sugerirá abrir el enlace en Expo Go.

> [!TIP]
> **¿Problemas de Conexión? Usa el modo Túnel (Tunnel)**
> Si tu teléfono y ordenador no están en la misma red Wi-Fi o hay un firewall bloqueando la señal, inicia la app con el comando:
> ```bash
> npx expo start --tunnel
> ```
> Esto generará un enlace seguro de internet (vía ngrok) permitiéndote escanear el QR y cargar la app en cualquier red.

---

### Opción B: En Emuladores de Escritorio

Si tienes configurado el entorno de desarrollo móvil en tu ordenador:

- **Emulador de Android**: Inicia tu dispositivo virtual en Android Studio y presiona `a` en la terminal de Expo para desplegar.
- **Simulador de iOS (Solo macOS)**: Asegúrate de tener Xcode abierto y presiona `i` en la terminal de Expo.
- **Navegador Web**: Presiona `w` en la terminal para abrir la versión responsiva web directamente en tu navegador.
