# Boiler Template de Vite + Three.js + GSAP

Plantilla base para iniciar proyectos web en 3D con **Vite**, **Three.js** y **GSAP**, lista para:

* Servidor de desarrollo ultra‑rápido con HMR
* Renderizado WebGL avanzado con post‑procesado (Bloom)
* ScrollTrigger para animaciones ligadas al desplazamiento
* Estructura de carpetas limpia y escalable

---

## 📂 Estructura de Carpetas

```plaintext
raíz/
├── index.html              ← Punto de entrada HTML
├── package.json            ← Metadatos y scripts de NPM
├── vite.config.js          ← Configuración de Vite
├── public/                 ← Archivos estáticos sin procesar
└── src/                    ← Código fuente de la aplicación
    ├── main.js             ← Script principal (módulo ES)
    ├── assets/             ← Recursos importados (imágenes, estilos, fuentes)
    │   ├── images/
    │   ├── styles/
    │   └── fonts/
    └── components/         ← Módulos o componentes JS/TS
```

---

## 🚀 Instalación y Primeros Pasos

```bash
# 1. Clona este repositorio
git clone https://github.com/ginasoft/vite-3d-boilerplate.git mi-proyecto
cd mi-proyecto

# 2. Instala dependencias
npm install

# 3. Arranca el servidor de desarrollo
npm run dev
# Abre en tu navegador: http://localhost:5173
```

Para construir la versión optimizada en `dist/`:

```bash
npm run build
```

Y previsualizar el build:

```bash
npm run serve
```

---

## ✨ Características Principales

* **Vite**: servidor de desarrollo instantáneo y build con Rollup
* **Three.js**: renderizado 3D, geometrías, materiales, luces y cámaras
* **Post‑processing**: `EffectComposer`, `RenderPass`, `UnrealBloomPass`
* **GSAP** + **ScrollTrigger**: animaciones suaves ligadas al scroll
* **Estructura modular**: fácil de escalar con nuevos componentes y assets
* **.gitignore** optimizado: ignora `node_modules/`, `dist/`, logs y archivos de IDE

---

## 🔄 Actualizar Dependencias del Template

Para incorporar mejoras o bumps de versión de Three/GSAP/Vite en tus proyectos derivados:

1. En tu proyecto, configura el remote del template:

   ```bash
   git remote add upstream https://github.com/ginasoft/vite-3d-boilerplate.git
   ```
2. Trae las actualizaciones:

   ```bash
   git fetch upstream
   ```
3. Mézclalas con tu rama principal:

   ```bash
   git merge upstream/main
   ```
4. Reinstala las dependencias:

   ```bash
   npm install
   ```

---

## 🤝 Contribuciones

¡Las mejoras son bienvenidas! Para reportar bugs o sugerir features:

1. Haz un fork de este repositorio.
2. Crea una rama de feature: `git checkout -b feature/nombre-feature`.
3. Haz commit de tus cambios: `git commit -m "feat: descripción corta"`.
4. Push a tu fork: `git push origin feature/nombre-feature`.
5. Abre un Pull Request describiendo los cambios.

---

## 📝 Licencia

Este proyecto está bajo licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.
