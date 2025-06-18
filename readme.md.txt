# 🌱 EcoTracker - Plataforma de Huella de Carbono Personal

Una aplicación web educativa e interactiva diseñada para ayudar a usuarios a comprender, medir y reducir su impacto ambiental personal. EcoTracker combina ciencia climática rigurosa con experiencia de usuario premium para crear una herramienta de cambio comportamental efectiva.

![EcoTracker Preview](https://via.placeholder.com/800x400/2E5984/FFFFFF?text=EcoTracker+Dashboard)

## 📋 Tabla de Contenidos

- [🎯 Características Principales](#-características-principales)
- [🚀 Demo en Vivo](#-demo-en-vivo)
- [💻 Instalación y Configuración](#-instalación-y-configuración)
- [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [🔬 Metodología Científica](#-metodología-científica)
- [♿ Accesibilidad](#-accesibilidad)
- [📱 Compatibilidad](#-compatibilidad)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📂 Estructura de Archivos](#-estructura-de-archivos)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)
- [👥 Equipo](#-equipo)

## 🎯 Características Principales

### 📊 Calculadora Científica de Huella de Carbono
- **Algoritmos validados**: Basada en factores de emisión del IPCC y EPA
- **Análisis integral**: Evalúa transporte, energía, alimentación y residuos
- **Recomendaciones personalizadas**: Estrategias específicas basadas en tu perfil
- **Comparaciones contextuales**: Benchmarks con promedios globales y objetivos climáticos

### 🎯 Sistema de Hábitos Sostenibles
- **6 categorías de impacto**: Movilidad, energía, agua, residuos, consumo y nutrición
- **Métricas cuantificadas**: Cada hábito muestra reducción específica de CO₂
- **Progreso visual**: Barras de progreso animadas y feedback inmediato
- **Validación científica**: Cada práctica incluye base científica y contexto educativo

### 🧠 Evaluación Educativa Interactiva
- **Progresión pedagógica**: Preguntas diseñadas según taxonomía de Bloom
- **Retroalimentación constructiva**: Explicaciones detalladas post-respuesta
- **Análisis de rendimiento**: Feedback personalizado y recomendaciones de desarrollo
- **5 niveles de dificultad**: Desde conocimiento básico hasta análisis crítico

### 🏆 Sistema de Logros y Progreso
- **4 categorías de logros**: Sostenibilidad, conocimiento, impacto y engagement
- **Métricas cuantificables**: Días consecutivos, CO₂ ahorrado, puntuación evaluaciones
- **Notificaciones premium**: Feedback visual elegante para reforzar comportamientos
- **Persistencia de datos**: Progreso guardado en localStorage con recuperación robusta

### 🎨 Experiencia de Usuario Premium
- **Diseño inspirado en luxury yachting**: Paleta de azules oceánicos y espaciado elegante
- **Tipografía dual**: Playfair Display para títulos, Inter para contenido
- **Animaciones contextuales**: Efectos visuales que refuerzan conceptos científicos
- **Responsive design**: Optimizado para desktop, tablet y móvil

## 🚀 Demo en Vivo

🌐 **[Ver Demo](https://tu-dominio.com/ecotracker)** 

📱 **[Versión Móvil](https://tu-dominio.com/ecotracker)** 

## 💻 Instalación y Configuración

### Requisitos Previos
- Navegador web moderno (Chrome 88+, Firefox 85+, Safari 14+, Edge 88+)
- Servidor web local (opcional para desarrollo)

### Instalación Rápida

1. **Clona o descarga el proyecto**
   ```bash
   git clone https://github.com/tu-usuario/ecotracker.git
   cd ecotracker
   ```

2. **Estructura de archivos requerida**
   ```
   ecotracker/
   ├── index.html          # Estructura principal HTML
   ├── styles.css          # Estilos CSS premium
   ├── script.js           # Lógica JavaScript
   ├── README.md           # Esta documentación
   ├── assets/             # (Opcional) Imágenes y recursos
   │   ├── icons/          # Iconos del proyecto
   │   └── images/         # Imágenes adicionales
   └── docs/               # (Opcional) Documentación adicional
       ├── methodology.md  # Metodología científica detallada
       └── accessibility.md # Guía de accesibilidad
   ```

3. **Inicia el proyecto**
   
   **Opción A: Apertura directa**
   - Abre `index.html` directamente en tu navegador

   **Opción B: Servidor local (recomendado para desarrollo)**
   ```bash
   # Con Python 3
   python -m http.server 3000
   
   # Con Node.js (si tienes http-server instalado)
   npx http-server . -p 3000
   
   # Con PHP
   php -S localhost:3000
   ```

4. **Accede a la aplicación**
   - Navega a `http://localhost:3000` (si usas servidor local)
   - O abre `index.html` directamente en tu navegador

### Configuración para Producción

Para desplegar en producción, considera:

1. **Optimización de assets**
   - Minificación de CSS y JavaScript
   - Compresión de imágenes
   - Configuración de caché headers

2. **HTTPS obligatorio**
   - localStorage requiere contexto seguro para funcionalidad completa

3. **Analytics y monitoring** (opcional)
   ```javascript
   // Agregar en <head> de index.html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   ```

## 🏗️ Arquitectura del Proyecto

### Principios de Diseño

**Separación de Responsabilidades**: El proyecto sigue estrictamente la separación HTML (estructura), CSS (presentación), y JavaScript (comportamiento). Esta arquitectura facilita mantenimiento, debugging y colaboración.

**Patrón Module**: JavaScript implementa el patrón Module con una clase principal `EcoTrackerApp` que encapsula toda la lógica de estado y comportamiento.

**Progressive Enhancement**: La aplicación funciona como documento HTML básico y se mejora progresivamente con CSS y JavaScript.

### Componentes Principales

#### 1. **EcoTrackerApp (script.js)**
Clase principal que gestiona:
- Estado global de la aplicación
- Persistencia de datos en localStorage
- Renderizado dinámico de componentes
- Sistema de logros y métricas
- Accesibilidad y navegación por teclado

#### 2. **Sistema de Navegación (index.html + styles.css)**
- Navegación sticky responsiva
- Estados activos con indicadores visuales
- Soporte completo para navegación por teclado
- Anuncios ARIA para lectores de pantalla

#### 3. **Calculadora de Huella (calculateFootprint)**
- Validación robusta de inputs
- Factores de emisión científicamente validados
- Análisis contextual con benchmarks
- Recomendaciones personalizadas por algoritmo

#### 4. **Sistema de Hábitos (togglePractice)**
- 6 categorías de prácticas sostenibles
- Métricas de impacto cuantificadas
- Feedback visual inmediato
- Persistencia de progreso

#### 5. **Evaluación Educativa (startEvaluation)**
- 5 preguntas con progresión pedagógica
- Retroalimentación constructiva
- Análisis de rendimiento personalizado
- Sistema de puntuación y recomendaciones

### Flujo de Datos

```
Usuario → Interfaz → EcoTrackerApp → localStorage
   ↑                                      ↓
   ← Feedback Visual ← Renderizado ← Estado Actualizado
```

## 🔬 Metodología Científica

### Factores de Emisión Validados

Todos los cálculos se basan en factores de emisión reconocidos internacionalmente:

**Transporte**
- Gasolina: 0.21 kg CO₂/km (EPA 2023)
- Diésel: 0.27 kg CO₂/km (EPA 2023)
- Híbrido: 0.12 kg CO₂/km (promedio Toyota Prius)
- Eléctrico: 0.05 kg CO₂/km (grid mix global promedio)

**Energía**
- Electricidad: 0.42 kg CO₂/kWh (IEA World Energy Outlook 2023)
- Gas natural: 2.0 kg CO₂/m³ (IPCC AR6 WG3)

**Alimentación**
- Comida con carne: 6.8 kg CO₂/comida (Poore & Nemecek, Science 2018)
- Beneficio alimentos locales: 30% reducción (Weber & Matthews, ES&T 2008)

**Aviación**
- Vuelo doméstico promedio: 270 kg CO₂ (ICAO Carbon Calculator 2023)

### Benchmarks Científicos

- **Objetivo 2030**: 2,300 kg CO₂ per cápita (IPCC SR15)
- **Promedio mundial**: 4,800 kg CO₂ per cápita (Global Carbon Atlas 2023)
- **Países desarrollados**: 10,000+ kg CO₂ per cápita (OECD promedio)

### Referencias Académicas

1. IPCC, 2022: Climate Change 2022: Mitigation of Climate Change
2. Poore, J. & Nemecek, T. (2018). Reducing food's environmental impacts through producers and consumers. Science, 360(6392), 987-992
3. Weber, C. L., & Matthews, H. S. (2008). Food-miles and the relative climate impacts of food choices in the United States. Environmental Science & Technology, 42(10), 3508-3513

## ♿ Accesibilidad

EcoTracker implementa **WCAG 2.1 Level AA** compliance:

### Características de Accesibilidad

**Navegación por Teclado**
- Todos los elementos interactivos son navegables con Tab
- Atajos de teclado para funciones principales
- Indicadores visuales claros de foco

**Lectores de Pantalla**
- Etiquetas ARIA apropiadas en todos los componentes
- Anuncios dinámicos para cambios de estado
- Estructura semántica con headings jerárquicos

**Contraste Visual**
- Ratios de contraste >4.5:1 para texto normal
- Ratios de contraste >3:1 para texto grande
- Indicadores de estado no dependientes solo de color

**Responsive Design**
- Zoom hasta 200% sin pérdida de funcionalidad
- Breakpoints optimizados para diferentes dispositivos
- Textos redimensionables sin overflow horizontal

### Testing de Accesibilidad

Herramientas recomendadas:
```bash
# Lighthouse audit
npx lighthouse http://localhost:3000 --only-categories=accessibility

# axe-core testing
npm install -g @axe-core/cli
axe http://localhost:3000
```

## 📱 Compatibilidad

### Navegadores Soportados

| Navegador | Versión Mínima | Funcionalidad |
|-----------|---------------|---------------|
| Chrome    | 88+           | Completa      |
| Firefox   | 85+           | Completa      |
| Safari    | 14+           | Completa      |
| Edge      | 88+           | Completa      |
| Opera     | 74+           | Completa      |

### Dispositivos

- **Desktop**: 1024px+ (experiencia completa)
- **Tablet**: 768px-1023px (optimizada)
- **Mobile**: 320px-767px (adaptada)

### Progressive Enhancement

La aplicación funciona en 3 niveles:
1. **HTML básico**: Contenido educativo accesible
2. **+ CSS**: Experiencia visual premium
3. **+ JavaScript**: Funcionalidad interactiva completa

## 🛠️ Tecnologías Utilizadas

### Frontend Core
- **HTML5**: Estructura semántica con elementos ARIA
- **CSS3**: Grid, Flexbox, Custom Properties, Animaciones
- **JavaScript ES6+**: Clases, Modules, Arrow Functions, Async/Await

### Librerías y Frameworks
- **Google Fonts**: Playfair Display + Inter
- **CSS Custom Properties**: Sistema de design tokens
- **localStorage API**: Persistencia de datos local

### Herramientas de Desarrollo
- **Git**: Control de versiones
- **ESLint**: Linting de JavaScript (configuración opcional)
- **Prettier**: Formateo de código (configuración opcional)

### APIs Utilizadas
- **localStorage**: Persistencia de progreso del usuario
- **Intersection Observer**: Animaciones on-scroll (futuro)
- **Vibration API**: Feedback háptico en dispositivos móviles

## 📂 Estructura de Archivos

### Archivo Principal (index.html)
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Metadatos, SEO, enlaces a CSS -->
</head>
<body>
  <!-- Navegación -->
  <!-- Contenido por pestañas -->
  <!-- Scripts -->
</body>
</html>
```

### Estilos (styles.css)
```css
/* Variables CSS (Design Tokens) */
:root { --primary-color: #2E5984; }

/* Reset y base */
/* Tipografía y jerarquía */
/* Layout y componentes */
/* Estados interactivos */
/* Responsive design */
/* Animaciones */
```

### Lógica (script.js)
```javascript
// Clase principal EcoTrackerApp
// Métodos de inicialización
// Gestión de estado
// Renderizado de componentes
// Event handlers
// Utilidades y helpers
```

## 🤝 Contribuciones

### Cómo Contribuir

1. **Fork del proyecto**
   ```bash
   git clone https://github.com/tu-usuario/ecotracker.git
   cd ecotracker
   git checkout -b feature/nueva-funcionalidad
   ```

2. **Standards de código**
   - Usa nombres descriptivos para variables y funciones
   - Comenta código complejo con explicaciones claras
   - Sigue la estructura de archivos existente
   - Prueba en múltiples navegadores

3. **Commit messages**
   ```bash
   git commit -m "feat: agregar calculadora de transporte público
   
   - Incluye factores de emisión para autobuses y metro
   - Actualiza interfaz con opciones de transporte urbano
   - Agrega validación para rutas de transporte"
   ```

4. **Pull Request**
   - Describe claramente los cambios realizados
   - Incluye screenshots si hay cambios visuales
   - Verifica que no rompas funcionalidad existente

### Áreas de Contribución

**Funcionalidades Prioritarias**
- Integración con APIs de transporte público
- Calculadora de compensación de carbono
- Exportación de reportes en PDF
- Modo oscuro/claro

**Mejoras de UX/UI**
- Animaciones adicionales
- Micro-interacciones
- Optimización móvil
- Temas personalizables

**Educación y Contenido**
- Más preguntas para el quiz
- Hábitos adicionales
- Recursos educativos externos
- Traducciones a otros idiomas

**Accesibilidad**
- Testing con usuarios reales
- Mejoras de navegación por teclado
- Soporte para tecnologías asistivas

## 📄 Licencia

Este proyecto está licenciado bajo la **MIT License** - ver el archivo [LICENSE](LICENSE) para detalles.

### Uso Comercial

Puedes usar EcoTracker para:
- ✅ Proyectos personales
- ✅ Proyectos comerciales
- ✅ Educación y investigación
- ✅ Modificación y distribución

**Requerimientos**:
- Mantener el aviso de copyright
- Incluir la licencia MIT en distribuciones

## 👥 Equipo

### Desarrolladores Principales

**[Tu Nombre]** - *Desarrollo Full-Stack*
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)
- Email: tu.email@dominio.com

### Agradecimientos

- **IPCC** - Por proporcionar factores de emisión científicamente validados
- **EPA** - Por metodologías de cálculo de huella de carbono
- **Community** - Por feedback y testing de la aplicación

---

## 📞 Soporte y Contacto

### Reportar Bugs
Usa GitHub Issues para reportar problemas:
1. Describe el problema claramente
2. Incluye pasos para reproducir
3. Especifica navegador y versión
4. Adjunta screenshots si es relevante

### Solicitar Funcionalidades
Para nuevas funcionalidades:
1. Revisa issues existentes
2. Describe el caso de uso
3. Explica el beneficio esperado
4. Propón implementación si es posible

### Preguntas Generales
- **Email**: soporte@ecotracker.com
- **Twitter**: [@EcoTrackerApp](https://twitter.com/EcoTrackerApp)
- **Discord**: [Servidor de la comunidad](https://discord.gg/ecotracker)

---

## 🔄 Changelog

### Versión 1.0.0 (2024-01-15)
- ✨ Lanzamiento inicial
- 📊 Calculadora de huella de carbono completa
- 🎯 Sistema de hábitos sostenibles
- 🧠 Quiz educativo interactivo
- 🏆 Sistema de logros y progreso
- ♿ Compliance WCAG 2.1 Level AA
- 📱 Diseño completamente responsivo

### Roadmap Futuro

**Versión 1.1.0** (Q2 2024)
- 🌐 API de datos climáticos en tiempo real
- 📊 Dashboard con gráficos históricos
- 🎨 Modo oscuro/claro
- 🌍 Soporte multi-idioma

**Versión 1.2.0** (Q3 2024)
- 🤝 Funcionalidades sociales (compartir progreso)
- 📱 Progressive Web App (PWA)
- 🔔 Sistema de notificaciones
- 📈 Analytics avanzados de progreso

---

💚 **¡Gracias por usar EcoTracker! Juntos podemos crear un futuro más sostenible.** 🌍