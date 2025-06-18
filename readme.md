# 🌱 EcoTracker - Plataforma de Huella de Carbono Personal

Una aplicación web educativa e interactiva diseñada para ayudar a usuarios a comprender, medir y reducir su impacto ambiental personal. EcoTracker combina ciencia climática rigurosa con experiencia de usuario premium para crear una herramienta de cambio comportamental efectiva.

![EcoTracker Preview](https://via.placeholder.com/800x400/2E5984/FFFFFF?text=EcoTracker+Dashboard)

## 📋 Tabla de Contenidos

- [🌍 Problemática y Contexto](#-problemática-y-contexto)
- [🎯 Relación con los Objetivos de Desarrollo Sostenible](#-relación-con-los-objetivos-de-desarrollo-sostenible)
- [💻 Solución Tecnológica](#-solución-tecnológica)
- [🚀 Características Principales](#-características-principales)
- [🔬 Metodología Científica](#-metodología-científica)
- [💻 Instalación y Configuración](#-instalación-y-configuración)
- [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [♿ Accesibilidad](#-accesibilidad)
- [📱 Compatibilidad](#-compatibilidad)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)

## 🌍 Problemática y Contexto

### Crisis Climática Global

El cambio climático representa uno de los desafíos más urgentes de nuestro tiempo. Los datos científicos revelan una realidad alarmante: la concentración atmosférica de CO₂ ha alcanzado 421 ppm en 2023, un aumento del 47% respecto a niveles pre-industriales (280 ppm en 1850). Esta aceleración sin precedentes en la historia humana está generando consecuencias irreversibles en los sistemas climáticos globales.

### Brecha de Conocimiento y Acción Individual

A pesar de la creciente conciencia sobre el cambio climático, existe una desconexión significativa entre el conocimiento teórico y la acción práctica a nivel individual. Las investigaciones indican que:

- **Falta de cuantificación personal**: El 78% de las personas no conoce su huella de carbono personal ni comprende el impacto real de sus decisiones diarias
- **Ausencia de feedback inmediato**: Las consecuencias ambientales de nuestras acciones no son visibles de forma inmediata, dificultando la modificación de comportamientos
- **Complejidad científica**: Los conceptos climáticos suelen presentarse de forma académica, creando barreras para la comprensión y apropiación por parte del público general
- **Falta de herramientas prácticas**: Escasez de plataformas que combinen educación científica rigurosa con herramientas de seguimiento personal accesibles

### Urgencia Temporal

Según el IPCC (Panel Intergubernamental sobre Cambio Climático), tenemos menos de una década para reducir las emisiones globales en un 45% respecto a niveles de 2010, con el objetivo de limitar el calentamiento global a 1.5°C. Esta ventana temporal crítica requiere una movilización masiva que incluya tanto políticas sistémicas como cambios comportamentales individuales coordinados.

### Impacto de la Acción Individual

Aunque el cambio sistémico es fundamental, la acción individual tiene un potencial significativo cuando se escala socialmente. Un individuo promedio en países desarrollados genera 10+ toneladas de CO₂ anuales, muy por encima del objetivo de 2.3 toneladas per cápita necesario para 2030. La adopción masiva de prácticas sostenibles individuales podría contribuir hasta un 25% de la reducción total requerida.

## 🎯 Relación con los Objetivos de Desarrollo Sostenible

EcoTracker está diseñado para contribuir directamente a múltiples ODS de la Agenda 2030, creando sinergias entre educación, sostenibilidad y tecnología:

### ODS 13: Acción por el Clima (Objetivo Principal)
**Meta 13.3**: Mejorar la educación, la sensibilización y la capacidad humana e institucional respecto de la mitigación del cambio climático.

**Contribución de EcoTracker**:
- Proporciona educación científica rigurosa sobre cambio climático de forma accesible
- Cuantifica impactos personales mediante metodologías validadas internacionalmente
- Facilita la comprensión de conceptos climáticos complejos través de visualizaciones interactivas
- Conecta acciones individuales con objetivos globales de reducción de emisiones

### ODS 4: Educación de Calidad
**Meta 4.7**: Asegurar que todos los alumnos adquieran los conocimientos y competencias necesarios para promover el desarrollo sostenible.

**Contribución de EcoTracker**:
- Sistema educativo basado en taxonomía de Bloom para construcción progresiva de conocimiento
- Contenido pedagógico que vincula ciencia climática con aplicaciones prácticas
- Evaluaciones que refuerzan conceptos clave sobre sostenibilidad y cambio climático
- Accesibilidad universal (WCAG 2.1 AA) garantizando inclusión educativa

### ODS 12: Producción y Consumo Responsables
**Meta 12.8**: Asegurar que las personas tengan la información y los conocimientos pertinentes para el desarrollo sostenible y los estilos de vida en armonía con la naturaleza.

**Contribución de EcoTracker**:
- Calculadora de huella que analiza patrones de consumo en transporte, energía, alimentación y residuos
- Recomendaciones personalizadas para transición hacia consumo responsable
- Métricas cuantificadas que visibilizan el impacto ambiental de decisiones de consumo
- Sistema de hábitos que promueve economía circular y consumo consciente

### ODS 17: Alianzas para Lograr los Objetivos
**Meta 17.17**: Fomentar y promover la constitución de alianzas eficaces en las esferas pública, público-privada y de la sociedad civil.

**Contribución de EcoTracker**:
- Plataforma de código abierto que facilita colaboración global en educación climática
- Metodologías estandarizadas basadas en organismos internacionales (IPCC, EPA)
- Sistema escalable que puede adaptarse a diferentes contextos regionales y culturales
- Contribución al ecosistema de herramientas digitales para sostenibilidad

### ODS 3: Salud y Bienestar (Contribución Indirecta)
La reducción de emisiones de carbono a través de prácticas sostenibles (especialmente en transporte y energía) contribuye directamente a la mejora de la calidad del aire y la reducción de enfermedades respiratorias y cardiovasculares.

### ODS 11: Ciudades y Comunidades Sostenibles (Contribución Indirecta)
Las recomendaciones de movilidad sostenible y eficiencia energética promovidas por la plataforma contribuyen al desarrollo de patrones urbanos más sostenibles.

## 💻 Solución Tecnológica

### Arquitectura de la Solución

EcoTracker implementa una **aplicación web progresiva (PWA)** desarrollada con tecnologías web estándar, diseñada bajo principios de **accesibilidad universal**, **sostenibilidad digital** y **escalabilidad global**. La elección tecnológica se fundamenta en la necesidad de crear una herramienta que sea universalmente accesible, científicamente rigurosa y educativamente efectiva.

### Componentes Tecnológicos Clave

#### 1. **Frontend Responsivo con Enfoque Educativo**
- **HTML5 Semántico**: Estructura que prioriza accesibilidad y navegación por lectores de pantalla
- **CSS3 Avanzado**: Sistema de design tokens inspirado en luxury yachting que crea experiencia premium mientras mantiene legibilidad y contraste óptimos
- **Progressive Enhancement**: La aplicación funciona en tres niveles (HTML básico → CSS → JavaScript) garantizando acceso universal independientemente de las capacidades del dispositivo

#### 2. **Motor de Cálculo Científico**
```javascript
// Ejemplo de implementación de factores de emisión validados
const emissionFactors = {
    transport: {
        gasoline: 0.21,    // kg CO₂/km (EPA 2023)
        electric: 0.05     // kg CO₂/km (grid mix global)
    },
    electricity: 0.42,     // kg CO₂/kWh (IEA 2023)
    aviation: 270          // kg CO₂/vuelo (ICAO 2023)
};
```
- **Algoritmos Validados**: Factores de emisión basados en metodologías IPCC, EPA e IEA
- **Análisis Contextual**: Comparación automática con benchmarks científicos globales
- **Recomendaciones Personalizadas**: Algoritmo que prioriza acciones por impacto potencial y viabilidad

#### 3. **Sistema Educativo Interactivo**
- **Progresión Pedagógica**: Preguntas diseñadas según taxonomía de Bloom (conocimiento → comprensión → aplicación → análisis)
- **Retroalimentación Constructiva**: Explicaciones detalladas post-respuesta con referencias científicas
- **Adaptabilidad**: Contenido que se ajusta al nivel de conocimiento demostrado por el usuario

#### 4. **Gamificación Basada en Ciencia Comportamental**
```javascript
// Sistema de logros que refuerza comportamientos sostenibles
const achievements = [
    {
        id: 'carbon-guardian',
        condition: () => totalCO2Reduced >= 100,
        psychologicalPrinciple: 'Refuerzo positivo por logro cuantificable'
    }
];
```
- **Psicología del Comportamiento**: Sistema de logros diseñado para reforzar hábitos sostenibles a largo plazo
- **Métricas Cuantificadas**: Cada acción sostenible incluye su impacto específico en kg CO₂ evitados
- **Feedback Inmediato**: Notificaciones visuales que refuerzan la conexión entre acción y resultado ambiental

#### 5. **Persistencia y Privacidad**
- **LocalStorage**: Almacenamiento local que garantiza privacidad total de datos personales
- **Sin Servidor Backend**: Arquitectura que elimina preocupaciones de privacidad y reduce huella de carbono digital
- **Exportabilidad**: Capacidad de exportar datos para uso personal o académico

### Innovaciones Tecnológicas Específicas

#### **Calculadora de Huella de Carbono Científicamente Validada**
La implementación va más allá de calculadoras tradicionales al incluir:
- **Análisis de Sensibilidad**: Identificación automática de las categorías con mayor impacto potencial de reducción
- **Validación de Entrada**: Sistema robusto que detecta y corrige valores fuera de rangos realistas
- **Contextualización Global**: Comparación automática con promedios regionales y objetivos climáticos

#### **Motor Educativo Adaptativo**
```javascript
// Ejemplo de análisis de rendimiento personalizado
generatePersonalizedFeedback(scorePercentage) {
    if (scorePercentage >= 90) {
        return {
            analysis: "Comprensión excepcional de ciencia climática",
            recommendations: "Considera roles de liderazgo en iniciativas ambientales"
        };
    }
    // Análisis progresivo basado en nivel demostrado
}
```

#### **Visualizaciones CSS Educativas**
- **Animaciones Contextuales**: Efectos visuales que refuerzan conceptos científicos (flotación para gases, pulsos para datos globales)
- **Gradientes Semánticos**: Colores que representan conceptos (océano para sostenibilidad, gradientes cálidos para emisiones)

### Escalabilidad y Sostenibilidad Digital

#### **Eficiencia Energética**
- **Arquitectura sin servidor**: Reduce significativamente el consumo energético comparado con aplicaciones tradicionales
- **Optimización de assets**: CSS y JavaScript optimizados para minimizar transferencia de datos
- **Caching estratégico**: Uso de localStorage para reducir recargas innecesarias

#### **Escalabilidad Global**
- **Internacionalización**: Arquitectura preparada para múltiples idiomas manteniendo coherencia científica
- **Adaptabilidad Regional**: Sistema que puede incorporar factores de emisión específicos por país o región
- **Código Abierto**: Licencia MIT que permite adaptaciones y mejoras comunitarias

### Metodología de Desarrollo

#### **Principios SOLID Aplicados**
- **Single Responsibility**: Cada módulo tiene una responsabilidad específica (cálculo, educación, gamificación)
- **Open/Closed**: Arquitectura extensible para nuevas funcionalidades sin modificar código existente
- **Dependency Inversion**: Interfaces claras entre componentes para facilitar testing y mantenimiento

#### **Testing y Validación**
- **Validación Científica**: Cada factor de emisión incluye referencia a fuente académica verificable
- **Testing de Accesibilidad**: Compliance WCAG 2.1 AA verificado con herramientas automatizadas
- **Cross-browser Testing**: Compatibilidad garantizada en navegadores principales desde versiones específicas

### Impacto Tecnológico Esperado

La solución tecnológica está diseñada para:

1. **Democratizar el Acceso a Educación Climática**: Eliminar barreras tecnológicas y económicas para acceder a información científica rigurosa
2. **Cuantificar Impacto Personal**: Proporcionar métricas precisas que conecten acciones individuales con objetivos globales
3. **Facilitar Cambio Comportamental**: Usar principios de psicología digital para sostener hábitos ambientalmente responsables
4. **Escalar Globalmente**: Crear una base tecnológica que pueda adaptarse a diferentes contextos culturales y regionales
5. **Fomentar Colaboración**: Servir como plataforma base para desarrollo comunitario de herramientas educativas ambientales

## 🚀 Características Principales

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
   ├── ecotraker.html       # Estructura principal HTML
   ├── styles.css           # Estilos CSS premium
   ├── script.js            # Lógica JavaScript
   ├── README.md            # Esta documentación
   ├── assets/              # (Opcional) Imágenes y recursos
   │   ├── icons/           # Iconos del proyecto
   │   └── images/          # Imágenes adicionales
   └── docs/                # (Opcional) Documentación adicional
       ├── methodology.md   # Metodología científica detallada
       └── accessibility.md # Guía de accesibilidad
   ```

3. **Inicia el proyecto**
   
   **Opción A: Apertura directa**
   - Abre `ecotraker.html` directamente en tu navegador

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
   - O abre `ecotraker.html` directamente en tu navegador

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
   // Agregar en <head> de ecotraker.html
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

#### 2. **Sistema de Navegación (ecotraker.html + styles.css)**
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
- ✅ Educación e investigación
- ✅ Modificación y distribución

**Requerimientos**:
- Mantener el aviso de copyright
- Incluir la licencia MIT en distribuciones

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