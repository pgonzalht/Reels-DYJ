# Reels David & Jorge

Creador de reels verticales (1080×1920, MP4 sin sonido) con el estilo de la web
del salón. Funciona en el navegador del PC y del móvil, sin instalar nada: las
fotos y los vídeos no salen del dispositivo.

- **Usar:** abrir `index.html`, o la página publicada. En el móvil: Compartir /
  menú ⋮ → «Añadir a pantalla de inicio».
- **Cambiar algo:** se edita `fuente/app.html` y se regenera `index.html` con
  `node fuente/construir.mjs` (mete dentro las letras y el grabador de MP4).
- **Probar en local:** `node fuente/servir.mjs` → http://localhost:5178
- **Iconos:** `powershell -File fuente/iconos.ps1`

Tipos de reel: libre, antes y después, paso a paso, consejos, mito o realidad y
opiniones. Estilos: suave, dinámico y revista.
