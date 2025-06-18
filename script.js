/**
 * EcoTracker - Aplicación de Seguimiento de Huella de Carbono
 * 
 * Arquitectura basada en el patrón Module Pattern para encapsulación
 * y separación de responsabilidades. Cada módulo maneja un aspecto
 * específico de la funcionalidad educativa.
 * 
 * @author EcoTracker Team
 * @version 1.0.0
 */

/**
 * Módulo principal que gestiona el estado global de la aplicación
 * Implementa el patrón Singleton para garantizar una única instancia
 * de gestión de datos durante toda la sesión del usuario.
 */
class EcoTrackerApp {
    constructor() {
        // Inicialización del estado persistente del usuario
        this.userState = this.loadUserState();
        
        // Configuración de datos científicos base
        this.initializeSustainabilityData();
        this.initializeEducationalContent();
        
        // Renderizado inicial de la interfaz completa
        this.renderAllComponents();
        this.updateAllMetrics();
        
        // Configuración de event listeners para accesibilidad
        this.setupAccessibilityFeatures();
        
        console.log('🌱 EcoTracker inicializado correctamente');
    }

    /**
     * Carga el estado del usuario desde localStorage con validación robusta
     * Implementa valores por defecto para garantizar funcionamiento
     * incluso en primera visita o en caso de datos corruptos.
     * 
     * @returns {Object} Estado del usuario validado y normalizado
     */
    loadUserState() {
        try {
            const savedData = JSON.parse(localStorage.getItem('ecoTrackerPremiumState') || '{}');
            
            // Estructura de datos con valores por defecto robustos
            const defaultState = {
                completedHabits: [],
                streakDays: 0,
                totalCO2Reduced: 0,
                evaluationScore: null,
                achievements: [],
                lastActiveDate: null,
                totalEngagementPoints: 0,
                completedEvaluations: 0,
                userPreferences: {
                    notifications: true,
                    darkMode: false,
                    language: 'es'
                }
            };

            // Merge de datos guardados con valores por defecto
            return { ...defaultState, ...savedData };
            
        } catch (error) {
            console.warn('Error cargando estado del usuario, usando valores por defecto:', error);
            return this.getDefaultUserState();
        }
    }

    /**
     * Proporciona estado por defecto en caso de error de carga
     * Método de fallback para garantizar funcionamiento robusto
     */
    getDefaultUserState() {
        return {
            completedHabits: [],
            streakDays: 0,
            totalCO2Reduced: 0,
            evaluationScore: null,
            achievements: [],
            lastActiveDate: null,
            totalEngagementPoints: 0,
            completedEvaluations: 0
        };
    }

    /**
     * Persiste el estado actual en localStorage con manejo de errores
     * Incluye timestamp para auditoría y posible sincronización futura
     */
    saveUserState() {
        try {
            this.userState.lastSaved = new Date().toISOString();
            this.userState.version = '1.0.0';
            localStorage.setItem('ecoTrackerPremiumState', JSON.stringify(this.userState));
        } catch (error) {
            console.error('Error guardando estado del usuario:', error);
            // En caso de error, mostrar notificación al usuario
            this.showNotification('Error guardando progreso. Verifica el espacio de almacenamiento.', 'error');
        }
    }

    /**
     * Define hábitos sostenibles con base científica rigurosa
     * Cada hábito incluye métricas validadas por investigación académica
     * y contexto educativo para comprensión profunda del impacto.
     */
    initializeSustainabilityData() {
        this.sustainabilityPractices = [
            {
                id: 'efficient-mobility',
                title: 'Movilidad Eficiente',
                description: 'Priorizar transporte público, bicicleta o caminar para trayectos urbanos menores a 5km',
                co2Reduction: 2.8,
                impact: 'Evita 2.8 kg CO₂ diarios',
                scientificBasis: 'Cada kilómetro evitado en vehículo de combustión ahorra 0.21 kg CO₂. El transporte representa 29% de emisiones globales.',
                category: 'transport',
                difficulty: 'medium',
                weeklyGoal: 3
            },
            {
                id: 'energy-optimization',
                title: 'Optimización Energética',
                description: 'Implementar iluminación LED, termostato programable y desconexión de dispositivos en standby',
                co2Reduction: 1.9,
                impact: 'Reduce 1.9 kg CO₂ diarios',
                scientificBasis: 'La eficiencia energética doméstica puede reducir 20-30% del consumo eléctrico sin sacrificar comodidad.',
                category: 'energy',
                difficulty: 'easy',
                weeklyGoal: 7
            },
            {
                id: 'water-stewardship',
                title: 'Gestión Consciente del Agua',
                description: 'Duchas eficientes, reparación de fugas y reutilización de aguas grises cuando sea posible',
                co2Reduction: 1.1,
                impact: 'Ahorra 1.1 kg CO₂ diarios',
                scientificBasis: 'El tratamiento y calentamiento de agua requiere 0.004 kg CO₂ por litro. Cada litro ahorrado tiene impacto acumulativo.',
                category: 'water',
                difficulty: 'easy',
                weeklyGoal: 7
            },
            {
                id: 'circular-consumption',
                title: 'Consumo Circular',
                description: 'Separación para reciclaje, compostaje orgánico y preferencia por productos con packaging mínimo',
                co2Reduction: 1.5,
                impact: 'Evita 1.5 kg CO₂ diarios',
                scientificBasis: 'Reciclar 1 kg de plástico evita 2 kg CO₂. El compostaje reduce metano de vertederos en 70%.',
                category: 'waste',
                difficulty: 'medium',
                weeklyGoal: 5
            },
            {
                id: 'mindful-purchasing',
                title: 'Compras Conscientes',
                description: 'Productos locales, envases reutilizables, planificación de compras y preferencia por durabilidad',
                co2Reduction: 1.3,
                impact: 'Reduce 1.3 kg CO₂ diarios',
                scientificBasis: 'Productos locales reducen 85% de emisiones de transporte. Productos duraderos reducen frecuencia de reemplazo.',
                category: 'consumption',
                difficulty: 'medium',
                weeklyGoal: 4
            },
            {
                id: 'plant-forward-nutrition',
                title: 'Nutrición Basada en Plantas',
                description: 'Incorporar 3-4 comidas semanales basadas en proteínas vegetales y minimizar desperdicio alimentario',
                co2Reduction: 3.7,
                impact: 'Evita 3.7 kg CO₂ diarios',
                scientificBasis: 'Proteínas animales requieren 10x más recursos que vegetales. Reducir carne 3 días/semana = -40% huella alimentaria.',
                category: 'nutrition',
                difficulty: 'hard',
                weeklyGoal: 3
            }
        ];

        this.renderSustainabilityInterface();
    }

    /**
     * Configura contenido educativo con progresión pedagógica estructurada
     * Preguntas diseñadas según taxonomía de Bloom para construir
     * comprensión desde conocimiento básico hasta análisis crítico.
     */
    initializeEducationalContent() {
        this.educationalQuestions = [
            {
                id: 'co2-concentration',
                question: "¿Cuál es la concentración atmosférica actual de CO₂ comparada con niveles pre-industriales (1850)?",
                options: [
                    "25% mayor (350 ppm actual)",
                    "47% mayor (421 ppm actual)",
                    "68% mayor (470 ppm actual)",
                    "95% mayor (550 ppm actual)"
                ],
                correct: 1,
                explanation: "La concentración ha aumentado de 280 ppm (1850) a 421 ppm (2023), representando 47% de incremento. Este aumento se acelera: en los últimos 20 años hemos agregado más CO₂ que en los 80 años anteriores, principalmente por combustibles fósiles y deforestación.",
                difficulty: 'basic',
                category: 'science',
                learningObjective: 'Comprender la magnitud del cambio atmosférico antropogénico'
            },
            {
                id: 'emission-reduction-target',
                question: "Según el IPCC, ¿qué porcentaje de reducción de emisiones globales necesitamos para 2030 para limitar calentamiento a 1.5°C?",
                options: [
                    "25% (respecto a niveles 2010)",
                    "35% (respecto a niveles 2010)",
                    "45% (respecto a niveles 2010)",
                    "65% (respecto a niveles 2010)"
                ],
                correct: 2,
                explanation: "El Panel Intergubernamental sobre Cambio Climático establece 45% de reducción para 2030 (base 2010) para 1.5°C. Esto requiere transformaciones sin precedentes en energía, transporte, agricultura e industria. Cada décima de grado adicional amplifica riesgos climáticos exponencialmente.",
                difficulty: 'intermediate',
                category: 'policy',
                learningObjective: 'Entender objetivos científicos de mitigación climática'
            },
            {
                id: 'carbon-offset-trees',
                question: "¿Cuántos árboles adultos se necesitan plantar para compensar la huella promedio anual de una persona (4.8 ton CO₂)?",
                options: [
                    "22-25 árboles",
                    "55-65 árboles",
                    "120-140 árboles",
                    "220-250 árboles"
                ],
                correct: 3,
                explanation: "Considerando que un árbol absorbe ~22 kg CO₂/año, compensar 4.8 toneladas requiere ~218 árboles. Sin embargo, la reducción de emisiones es más efectiva que compensación: evitar 1 tonelada CO₂ es más impactante que plantar 45 árboles, además de ser inmediato versus décadas de crecimiento arbóreo.",
                difficulty: 'advanced',
                category: 'solutions',
                learningObjective: 'Evaluar críticamente estrategias de compensación vs reducción'
            },
            {
                id: 'sector-emissions',
                question: "¿Qué sector económico genera mayor porcentaje de emisiones globales de gases de efecto invernadero?",
                options: [
                    "Agricultura y uso de suelo (24%)",
                    "Transporte (16%)",
                    "Generación eléctrica y calor (25%)",
                    "Industria y procesos (21%)"
                ],
                correct: 2,
                explanation: "Generación eléctrica y calor representa 25% de emisiones globales, pero varía drásticamente por país. En países con matriz renovable puede ser <10%, mientras en economías dependientes de carbón supera 40%. El transporte (16%) incluye todos los modos: terrestre, aéreo y marítimo.",
                difficulty: 'intermediate',
                category: 'data',
                learningObjective: 'Analizar distribución sectorial de emisiones globales'
            },
            {
                id: 'protein-footprint',
                question: "¿Cuál es la diferencia de huella de carbono entre proteína de res versus proteína de legumbres por gramo de proteína?",
                options: [
                    "2-3 veces mayor para res",
                    "5-7 veces mayor para res",
                    "10-15 veces mayor para res",
                    "20-25 veces mayor para res"
                ],
                correct: 3,
                explanation: "La proteína de res genera ~20-25x más CO₂ que legumbres por gramo de proteína. Esto incluye metano de rumiantes, fertilizantes para forraje, deforestación y procesamiento. Las legumbres además fijan nitrógeno atmosférico, reduciendo necesidad de fertilizantes sintéticos.",
                difficulty: 'advanced',
                category: 'lifestyle',
                learningObjective: 'Comparar impactos ambientales de fuentes proteicas'
            }
        ];

        this.currentQuestionIndex = 0;
        this.currentEvaluationScore = 0;
    }

    /**
     * Configura características de accesibilidad para usuarios con necesidades especiales
     * Implementa WCAG 2.1 guidelines para navegación inclusiva
     */
    setupAccessibilityFeatures() {
        // Navegación por teclado para tarjetas de hábitos
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                const target = event.target;
                if (target.classList.contains('habit-card')) {
                    event.preventDefault();
                    const habitId = target.getAttribute('data-habit-id');
                    if (habitId) {
                        this.togglePractice(habitId);
                    }
                }
            }
        });

        // Anuncios para lectores de pantalla
        this.setupScreenReaderAnnouncements();
    }

    /**
     * Configura anuncios dinámicos para lectores de pantalla
     * Mejora la experiencia para usuarios con discapacidades visuales
     */
    setupScreenReaderAnnouncements() {
        // Crear región ARIA live para anuncios dinámicos
        const announcements = document.createElement('div');
        announcements.setAttribute('aria-live', 'polite');
        announcements.setAttribute('aria-atomic', 'true');
        announcements.className = 'sr-only';
        announcements.id = 'announcements';
        document.body.appendChild(announcements);
    }

    /**
     * Anuncia cambios importantes a lectores de pantalla
     * @param {string} message - Mensaje para anunciar
     */
    announceToScreenReader(message) {
        const announcements = document.getElementById('announcements');
        if (announcements) {
            announcements.textContent = message;
            // Limpiar después de un tiempo para evitar repeticiones
            setTimeout(() => {
                announcements.textContent = '';
            }, 1000);
        }
    }

    /**
     * Renderiza la interfaz de prácticas sostenibles con accesibilidad completa
     * Incluye atributos ARIA apropiados y navegación por teclado
     */
    renderSustainabilityInterface() {
        const practicesContainer = document.getElementById('habits-grid');
        
        if (!practicesContainer) {
            console.error('Contenedor de hábitos no encontrado');
            return;
        }

        practicesContainer.innerHTML = this.sustainabilityPractices.map(practice => {
            const isActive = this.userState.completedHabits.includes(practice.id);
            
            return `
                <div class="habit-card ${isActive ? 'completed' : ''}" 
                     onclick="ecoTracker.togglePractice('${practice.id}')"
                     onkeydown="ecoTracker.handleHabitKeydown(event, '${practice.id}')"
                     data-habit-id="${practice.id}"
                     tabindex="0"
                     role="button"
                     aria-pressed="${isActive}"
                     aria-describedby="habit-${practice.id}-desc"
                     title="${practice.scientificBasis}">
                    <div class="habit-title">${practice.title}</div>
                    <div class="habit-description" id="habit-${practice.id}-desc">${practice.description}</div>
                    <div class="habit-impact">${practice.impact}</div>
                    <div class="habit-status sr-only">
                        ${isActive ? 'Activado' : 'No activado'}
                    </div>
                </div>
            `;
        }).join('');

        this.updatePracticesProgress();
    }

    /**
     * Maneja navegación por teclado en tarjetas de hábitos
     * @param {KeyboardEvent} event - Evento de teclado
     * @param {string} practiceId - ID del hábito
     */
    handleHabitKeydown(event, practiceId) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.togglePractice(practiceId);
        }
    }

    /**
     * Alterna el estado de una práctica sostenible específica
     * Actualiza métricas ambientales y sistema de reconocimiento
     * Incluye feedback para accesibilidad y UX
     * 
     * @param {string} practiceId - Identificador único de la práctica
     */
    togglePractice(practiceId) {
        const practiceIndex = this.userState.completedHabits.indexOf(practiceId);
        const practice = this.sustainabilityPractices.find(p => p.id === practiceId);
        
        if (!practice) {
            console.error(`Práctica no encontrada: ${practiceId}`);
            return;
        }

        let actionMessage = '';

        if (practiceIndex === -1) {
            // Activar práctica sostenible
            this.userState.completedHabits.push(practiceId);
            this.userState.totalCO2Reduced += practice.co2Reduction;
            this.userState.totalEngagementPoints += 20;
            
            actionMessage = `${practice.title} activado. Evitas ${practice.co2Reduction} kg de CO₂ diarios.`;
            
            // Feedback visual positivo
            this.showPositiveFeedback(practice.title, practice.co2Reduction);
        } else {
            // Desactivar práctica
            this.userState.completedHabits.splice(practiceIndex, 1);
            this.userState.totalCO2Reduced -= practice.co2Reduction;
            this.userState.totalEngagementPoints -= 20;
            
            actionMessage = `${practice.title} desactivado.`;
        }

        // Anunciar cambio para lectores de pantalla
        this.announceToScreenReader(actionMessage);

        // Verificar logros y actualizar estado
        this.evaluateAchievementProgress();
        this.saveUserState();
        this.renderSustainabilityInterface();
        this.updateAllMetrics();
    }

    /**
     * Proporciona feedback visual inmediato con accesibilidad
     * Implementa principios de diseño inclusivo y psicología del comportamiento
     * 
     * @param {string} practiceTitle - Título de la práctica activada
     * @param {number} co2Reduction - Cantidad de CO₂ reducido
     */
    showPositiveFeedback(practiceTitle, co2Reduction) {
        // Crear elemento de feedback accesible
        const feedback = document.createElement('div');
        feedback.setAttribute('role', 'status');
        feedback.setAttribute('aria-live', 'polite');
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, var(--success-green), var(--light-blue));
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            font-weight: 500;
            box-shadow: var(--shadow-deep);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            max-width: 300px;
            font-size: 0.9rem;
        `;
        
        feedback.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.2rem;">✓</span>
                <div>
                    <div style="font-weight: 600;">${practiceTitle}</div>
                    <div style="font-size: 0.8rem; opacity: 0.9;">-${co2Reduction} kg CO₂/día</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(feedback);
        
        // Animación de entrada y salida
        setTimeout(() => feedback.style.transform = 'translateX(0)', 100);
        setTimeout(() => feedback.style.transform = 'translateX(100%)', 3500);
        setTimeout(() => {
            if (document.body.contains(feedback)) {
                document.body.removeChild(feedback);
            }
        }, 4000);
    }

    /**
     * Actualiza visualización del progreso de prácticas sostenibles
     * Calcula métricas de adopción y genera mensajes contextuales
     * Incluye elementos de accesibilidad para diferentes capacidades
     */
    updatePracticesProgress() {
        const activeCount = this.userState.completedHabits.length;
        const totalCount = this.sustainabilityPractices.length;
        const adoptionPercentage = (activeCount / totalCount) * 100;

        // Actualizar barra de progreso con atributos de accesibilidad
        const progressBar = document.getElementById('habits-progress');
        if (progressBar) {
            progressBar.style.width = `${adoptionPercentage}%`;
            progressBar.parentElement.setAttribute('aria-valuenow', adoptionPercentage);
            progressBar.parentElement.setAttribute('aria-valuemin', '0');
            progressBar.parentElement.setAttribute('aria-valuemax', '100');
            progressBar.parentElement.setAttribute('aria-label', 
                `Progreso de hábitos: ${Math.round(adoptionPercentage)}% completado`);
        }
        
        // Generar mensaje contextual basado en nivel de adopción
        let progressMessage;
        if (adoptionPercentage === 100) {
            progressMessage = `Implementación completa: ${activeCount}/${totalCount} prácticas sostenibles`;
        } else if (adoptionPercentage >= 75) {
            progressMessage = `Adopción avanzada: ${activeCount}/${totalCount} prácticas sostenibles`;
        } else if (adoptionPercentage >= 50) {
            progressMessage = `Progreso sólido: ${activeCount}/${totalCount} prácticas sostenibles`;
        } else if (adoptionPercentage >= 25) {
            progressMessage = `Desarrollo inicial: ${activeCount}/${totalCount} prácticas sostenibles`;
        } else {
            progressMessage = `Comenzando el journey: ${activeCount}/${totalCount} prácticas sostenibles`;
        }
        
        const statsElement = document.getElementById('habits-stats');
        if (statsElement) {
            statsElement.textContent = progressMessage;
        }
    }

    /**
     * Inicia la secuencia de evaluación educativa
     * Resetea métricas y configura primera pregunta con accesibilidad
     */
    startEvaluation() {
        this.currentQuestionIndex = 0;
        this.currentEvaluationScore = 0;
        this.displayCurrentQuestion();
        
        const quizButton = document.getElementById('quiz-btn');
        if (quizButton) {
            quizButton.style.display = 'none';
        }

        // Anunciar inicio de evaluación
        this.announceToScreenReader('Evaluación iniciada. Respondiendo pregunta 1 de ' + this.educationalQuestions.length);
    }

    /**
     * Renderiza la pregunta actual con opciones interactivas accesibles
     * Incluye contador de progreso y navegación por teclado
     */
    displayCurrentQuestion() {
        const question = this.educationalQuestions[this.currentQuestionIndex];
        const evaluationContainer = document.getElementById('quiz-content');
        
        if (!evaluationContainer) {
            console.error('Contenedor de quiz no encontrado');
            return;
        }
        
        evaluationContainer.innerHTML = `
            <div class="quiz-question">
                <h3 id="question-title">Pregunta ${this.currentQuestionIndex + 1} de ${this.educationalQuestions.length}</h3>
                <h3 id="question-text">${question.question}</h3>
                <div class="quiz-options" role="radiogroup" aria-labelledby="question-text">
                    ${question.options.map((option, index) => `
                        <div class="quiz-option" 
                             onclick="ecoTracker.selectAnswer(${index})" 
                             onkeydown="ecoTracker.handleOptionKeydown(event, ${index})"
                             data-index="${index}"
                             tabindex="0"
                             role="radio"
                             aria-checked="false"
                             aria-describedby="question-text">
                            ${option}
                        </div>
                    `).join('')}
                </div>
                <div id="question-explanation" 
                     class="quiz-explanation" 
                     style="display: none;"
                     aria-live="polite"></div>
            </div>
        `;

        // Enfocar la primera opción para navegación por teclado
        setTimeout(() => {
            const firstOption = evaluationContainer.querySelector('.quiz-option');
            if (firstOption) {
                firstOption.focus();
            }
        }, 100);
    }

    /**
     * Maneja navegación por teclado en opciones del quiz
     * @param {KeyboardEvent} event - Evento de teclado
     * @param {number} optionIndex - Índice de la opción
     */
    handleOptionKeydown(event, optionIndex) {
        const options = document.querySelectorAll('.quiz-option');
        const currentIndex = optionIndex;

        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.selectAnswer(optionIndex);
                break;
            case 'ArrowDown':
                event.preventDefault();
                const nextIndex = (currentIndex + 1) % options.length;
                options[nextIndex].focus();
                break;
            case 'ArrowUp':
                event.preventDefault();
                const prevIndex = (currentIndex - 1 + options.length) % options.length;
                options[prevIndex].focus();
                break;
        }
    }

    /**
     * Procesa la respuesta seleccionada con feedback educativo inmediato
     * Implementa pedagogía de retroalimentación constructiva
     * 
     * @param {number} selectedIndex - Índice de la opción seleccionada
     */
    selectAnswer(selectedIndex) {
        const question = this.educationalQuestions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.quiz-option');
        
        // Deshabilitar interacción y mostrar respuestas correctas/incorrectas
        options.forEach((option, index) => {
            option.onclick = null;
            option.onkeydown = null;
            option.style.pointerEvents = 'none';
            option.tabIndex = -1;
            option.setAttribute('aria-checked', 'false');
            
            if (index === question.correct) {
                option.classList.add('correct');
                option.setAttribute('aria-label', 'Respuesta correcta: ' + option.textContent);
            } else if (index === selectedIndex) {
                option.classList.add('incorrect');
                option.setAttribute('aria-label', 'Respuesta incorrecta: ' + option.textContent);
            }
        });

        // Mostrar explicación educativa detallada
        const explanationElement = document.getElementById('question-explanation');
        if (explanationElement) {
            explanationElement.textContent = question.explanation;
            explanationElement.style.display = 'block';
        }

        // Actualizar puntuación y métricas de engagement
        const isCorrect = selectedIndex === question.correct;
        if (isCorrect) {
            this.currentEvaluationScore++;
            this.userState.totalEngagementPoints += 30;
        }

        // Anunciar resultado para lectores de pantalla
        const resultMessage = isCorrect ? 
            'Respuesta correcta.' : 
            `Respuesta incorrecta. La respuesta correcta es: ${question.options[question.correct]}`;
        this.announceToScreenReader(resultMessage);

        // Proceder a siguiente pregunta con delay para absorción
        setTimeout(() => {
            this.advanceToNextQuestion();
        }, 4000);
    }

    /**
     * Controla la navegación entre preguntas de la evaluación
     * Gestiona flujo completo hasta resultados finales
     */
    advanceToNextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.educationalQuestions.length) {
            this.displayCurrentQuestion();
            this.announceToScreenReader(
                `Pregunta ${this.currentQuestionIndex + 1} de ${this.educationalQuestions.length}`
            );
        } else {
            this.displayEvaluationResults();
        }
    }

    /**
     * Muestra resultados finales de evaluación con análisis contextual
     * Proporciona retroalimentación personalizada y recomendaciones
     */
    displayEvaluationResults() {
        const scorePercentage = Math.round((this.currentEvaluationScore / this.educationalQuestions.length) * 100);
        this.userState.evaluationScore = scorePercentage;
        this.userState.completedEvaluations++;
        
        const resultsContainer = document.getElementById('quiz-content');
        
        // Generar análisis personalizado basado en rendimiento
        const { performanceAnalysis, developmentRecommendations } = this.generatePersonalizedFeedback(scorePercentage);

        resultsContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem 2rem;" role="region" aria-label="Resultados de la evaluación">
                <h3 style="margin-bottom: 2rem; color: var(--deep-ocean);">Evaluación Completada</h3>
                <div class="result-value" style="color: var(--deep-ocean);" aria-label="Puntuación: ${scorePercentage} por ciento">
                    ${scorePercentage}%
                </div>
                <p style="margin: 1.5rem 0; color: var(--text-secondary); font-size: 1.125rem;">
                    Respuestas correctas: ${this.currentEvaluationScore} de ${this.educationalQuestions.length}
                </p>
                <div style="background: var(--ocean-foam); padding: 2rem; border-radius: 16px; margin: 2rem 0; text-align: left;">
                    <h4 style="color: var(--deep-ocean); margin-bottom: 1rem;">Análisis de Rendimiento</h4>
                    <p style="margin-bottom: 1.5rem; color: var(--text-secondary); line-height: 1.6;">
                        ${performanceAnalysis}
                    </p>
                    <h4 style="color: var(--deep-ocean); margin-bottom: 1rem;">Recomendaciones de Desarrollo</h4>
                    <p style="color: var(--text-secondary); line-height: 1.6;">
                        ${developmentRecommendations}
                    </p>
                </div>
            </div>
        `;

        // Restaurar botón para nueva evaluación
        const quizButton = document.getElementById('quiz-btn');
        if (quizButton) {
            quizButton.textContent = 'Nueva Evaluación';
            quizButton.style.display = 'block';
        }

        // Anunciar finalización
        this.announceToScreenReader(`Evaluación completada. Puntuación: ${scorePercentage} por ciento`);

        this.evaluateAchievementProgress();
        this.saveUserState();
        this.updateAllMetrics();
    }

    /**
     * Genera feedback personalizado basado en puntuación
     * @param {number} scorePercentage - Porcentaje de respuestas correctas
     * @returns {Object} Análisis y recomendaciones personalizadas
     */
    generatePersonalizedFeedback(scorePercentage) {
        let performanceAnalysis, developmentRecommendations;
        
        if (scorePercentage >= 90) {
            performanceAnalysis = "Comprensión excepcional de ciencia climática y sostenibilidad.";
            developmentRecommendations = "Considera roles de liderazgo en iniciativas ambientales y educación en tu comunidad. Tu conocimiento puede multiplicar impacto positivo.";
        } else if (scorePercentage >= 75) {
            performanceAnalysis = "Sólido entendimiento con algunas áreas de profundización.";
            developmentRecommendations = "Explora literatura científica especializada en conceptos donde tuviste dificultades. IPCC reports son excelente recurso.";
        } else if (scorePercentage >= 60) {
            performanceAnalysis = "Fundamentos adecuados que requieren fortalecimiento estructurado.";
            developmentRecommendations = "Dedica tiempo semanal a recursos educativos sobre cambio climático. MIT Climate Portal ofrece contenido accesible.";
        } else {
            performanceAnalysis = "Oportunidad significativa para desarrollo de conocimiento base.";
            developmentRecommendations = "Comienza con recursos introductorios: NASA Climate Change, luego progresa a contenido más técnico gradualmente.";
        }

        return { performanceAnalysis, developmentRecommendations };
    }

    /**
     * Evalúa progreso hacia logros basado en métricas múltiples
     * Sistema de reconocimiento que refuerza engagement sostenido
     */
    evaluateAchievementProgress() {
        const newAchievements = [];

        const achievementChecks = [
            {
                id: 'sustainability-champion',
                condition: () => this.userState.completedHabits.length === this.sustainabilityPractices.length,
                title: 'Campeón de Sostenibilidad',
                description: 'Implementar todas las prácticas sostenibles consistentemente'
            },
            {
                id: 'climate-scholar',
                condition: () => this.userState.evaluationScore >= 90,
                title: 'Académico Climático',
                description: 'Demostrar comprensión excepcional en evaluación de conocimientos'
            },
            {
                id: 'carbon-guardian',
                condition: () => this.userState.totalCO2Reduced >= 100,
                title: 'Guardián del Carbono',
                description: 'Evitar más de 100 kg CO₂ através de prácticas sostenibles'
            },
            {
                id: 'eco-advocate',
                condition: () => this.userState.totalEngagementPoints >= 500,
                title: 'Defensor Ecológico',
                description: 'Mantener engagement alto y consistente con la plataforma'
            }
        ];

        achievementChecks.forEach(achievement => {
            if (achievement.condition() && !this.userState.achievements.includes(achievement.id)) {
                newAchievements.push(achievement);
                this.userState.achievements.push(achievement.id);
            }
        });

        // Mostrar notificación de nuevos logros
        newAchievements.forEach((achievement, index) => {
            setTimeout(() => {
                this.showAchievementNotification(achievement);
            }, (index + 1) * 1000);
        });

        return newAchievements;
    }

    /**
     * Muestra notificación elegante para nuevos logros con accesibilidad
     * Refuerza progreso positivo con feedback visual premium
     * 
     * @param {Object} achievement - Datos del logro desbloqueado
     */
    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            background: linear-gradient(135deg, var(--accent-gold), var(--light-blue));
            color: white;
            padding: 2rem 3rem;
            border-radius: 20px;
            text-align: center;
            font-size: 1.25rem;
            font-weight: 500;
            box-shadow: var(--shadow-deep);
            z-index: 1000;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            max-width: 400px;
        `;
        
        notification.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem;" aria-hidden="true">🎉</div>
            <div>¡Logro Desbloqueado!</div>
            <div style="font-size: 1rem; margin-top: 0.5rem; opacity: 0.9;">
                ${achievement.title}
            </div>
            <div style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.8;">
                ${achievement.description}
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Anunciar logro para lectores de pantalla
        this.announceToScreenReader(`¡Logro desbloqueado! ${achievement.title}: ${achievement.description}`);
        
        // Animación de aparición y desaparición
        setTimeout(() => notification.style.transform = 'translate(-50%, -50%) scale(1)', 100);
        setTimeout(() => notification.style.transform = 'translate(-50%, -50%) scale(0)', 4000);
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 4500);
    }

    /**
     * Muestra notificaciones generales al usuario
     * @param {string} message - Mensaje a mostrar
     * @param {string} type - Tipo de notificación ('success', 'error', 'info')
     */
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');
        
        const colors = {
            success: 'var(--success-green)',
            error: '#EF4444',
            info: 'var(--light-blue)'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${colors[type]};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: 500;
            box-shadow: var(--shadow-deep);
            z-index: 1000;
            max-width: 400px;
            text-align: center;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 4000);
    }

    /**
     * Actualiza todas las métricas de progreso en tiempo real
     * Sincroniza estado interno con visualización de interfaz
     */
    updateAllMetrics() {
        // Actualizar estadísticas numéricas con validación
        const elements = {
            'streak-days': this.userState.streakDays,
            'co2-saved': Math.round(this.userState.totalCO2Reduced * 10) / 10,
            'quiz-score': this.userState.evaluationScore ? `${this.userState.evaluationScore}%` : 'Pendiente'
        };

        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
                element.setAttribute('aria-label', `${id.replace('-', ' ')}: ${value}`);
            }
        });

        // Renderizar sistema de logros
        this.renderAchievementSystem();
    }

    /**
     * Renderiza sistema completo de logros con estado visual apropiado
     * Muestra progreso hacia objetivos no alcanzados
     */
    renderAchievementSystem() {
        const achievementsContainer = document.getElementById('achievements-grid');
        
        if (!achievementsContainer) {
            console.error('Contenedor de logros no encontrado');
            return;
        }
        
        const achievementDefinitions = [
            { 
                id: 'sustainability-champion', 
                title: 'Campeón de Sostenibilidad', 
                description: 'Implementar todas las prácticas sostenibles consistentemente',
                icon: '🏆',
                requirement: `${this.userState.completedHabits.length}/${this.sustainabilityPractices.length} prácticas activas`
            },
            { 
                id: 'climate-scholar', 
                title: 'Académico Climático', 
                description: 'Demostrar comprensión excepcional en evaluación de conocimientos',
                icon: '🧠',
                requirement: this.userState.evaluationScore ? `${this.userState.evaluationScore}% obtenido` : 'Evaluación pendiente'
            },
            { 
                id: 'carbon-guardian', 
                title: 'Guardián del Carbono', 
                description: 'Evitar más de 100 kg CO₂ através de prácticas sostenibles',
                icon: '🌱',
                requirement: `${Math.round(this.userState.totalCO2Reduced * 10) / 10} kg CO₂ evitados`
            },
            { 
                id: 'eco-advocate', 
                title: 'Defensor Ecológico', 
                description: 'Mantener engagement alto y consistente con la plataforma',
                icon: '⭐',
                requirement: `${this.userState.totalEngagementPoints} puntos de engagement`
            }
        ];

        achievementsContainer.innerHTML = achievementDefinitions.map(achievement => {
            const isUnlocked = this.userState.achievements.includes(achievement.id);
            
            return `
                <div class="achievement-card ${isUnlocked ? 'unlocked' : ''}"
                     role="article"
                     aria-label="${isUnlocked ? 'Logro desbloqueado' : 'Logro bloqueado'}: ${achievement.title}">
                    <div class="achievement-icon" aria-hidden="true">${isUnlocked ? achievement.icon : '🔒'}</div>
                    <div class="achievement-title">
                        ${isUnlocked ? achievement.title : 'Logro Bloqueado'}
                    </div>
                    <div class="achievement-description">
                        ${achievement.description}
                    </div>
                    <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--text-light);">
                        ${isUnlocked ? 'Completado' : achievement.requirement}
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * Renderiza todos los componentes de la interfaz
     * Método de conveniencia para inicialización completa
     */
    renderAllComponents() {
        this.renderSustainabilityInterface();
        this.renderAchievementSystem();
    }
}

// Instancia global de la aplicación - patrón Singleton
let ecoTracker;

/**
 * Inicialización cuando el DOM está completamente cargado
 * Garantiza que todos los elementos estén disponibles antes de la inicialización
 */
document.addEventListener('DOMContentLoaded', function() {
    try {
        ecoTracker = new EcoTrackerApp();
        console.log('✅ EcoTracker inicializado exitosamente');
    } catch (error) {
        console.error('❌ Error inicializando EcoTracker:', error);
        
        // Mostrar mensaje de error al usuario
        const errorMessage = document.createElement('div');
        errorMessage.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #EF4444;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            z-index: 1000;
        `;
        errorMessage.textContent = 'Error inicializando la aplicación. Por favor, recarga la página.';
        document.body.appendChild(errorMessage);
    }
});

/**
 * Controla navegación entre secciones con transiciones elegantes
 * Actualiza estado visual de navegación y maneja accesibilidad
 * 
 * @param {string} tabName - Nombre de la pestaña a mostrar
 */
function showTab(tabName) {
    // Validar que la pestaña existe
    const targetTab = document.getElementById(tabName);
    if (!targetTab) {
        console.error(`Pestaña no encontrada: ${tabName}`);
        return;
    }

    // Ocultar todas las secciones activas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-hidden', 'true');
    });
    
    // Remover estado activo de navegación
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    
    // Activar sección y navegación seleccionadas
    targetTab.classList.add('active');
    targetTab.setAttribute('aria-hidden', 'false');
    
    // Encontrar y activar botón correspondiente
    const activeButton = event?.target || document.querySelector(`[onclick="showTab('${tabName}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
        activeButton.setAttribute('aria-selected', 'true');
    }

    // Anunciar cambio de sección para lectores de pantalla
    const sectionNames = {
        'learn': 'Fundamentos',
        'calculator': 'Calculadora',
        'habits': 'Hábitos',
        'quiz': 'Evaluación',
        'progress': 'Progreso'
    };
    
    if (ecoTracker) {
        ecoTracker.announceToScreenReader(`Navegando a sección: ${sectionNames[tabName] || tabName}`);
    }
}

/**
 * Función de conveniencia para iniciar evaluación
 * Mantiene compatibilidad con interfaz anterior
 */
function startQuiz() {
    if (ecoTracker) {
        ecoTracker.startEvaluation();
    } else {
        console.error('EcoTracker no está inicializado');
    }
}

/**
 * Calculadora de huella de carbono con algoritmos científicamente validados
 * Utiliza factores de emisión reconocidos internacionalmente (IPCC, EPA)
 * Incluye validación robusta de entrada y manejo de errores
 */
function calculateFootprint() {
    try {
        // Extraer y validar datos de entrada del usuario
        const inputData = {
            carKm: parseFloat(document.getElementById('car-km').value) || 0,
            transportType: document.getElementById('transport-type').value,
            flights: parseFloat(document.getElementById('flights').value) || 0,
            electricity: parseFloat(document.getElementById('electricity').value) || 0,
            gas: parseFloat(document.getElementById('gas').value) || 0,
            water: parseFloat(document.getElementById('water').value) || 0,
            meatMeals: parseFloat(document.getElementById('meat-meals').value) || 0,
            localFood: parseFloat(document.getElementById('local-food').value) || 0,
            recycling: document.getElementById('recycling').value
        };

        // Validar rangos de entrada
        const validationErrors = validateCalculatorInputs(inputData);
        if (validationErrors.length > 0) {
            console.warn('Errores de validación:', validationErrors);
            // Continuar con valores corregidos
        }

        // Factores de emisión basados en metodologías IPCC y EPA (2023)
        const emissionFactors = {
            transport: {
                gasoline: 0.21,      // kg CO₂ por km
                diesel: 0.27,        // kg CO₂ por km  
                hybrid: 0.12,        // kg CO₂ por km
                electric: 0.05       // kg CO₂ por km (incluye generación eléctrica promedio)
            },
            flights: 270,            // kg CO₂ por vuelo promedio (ida y vuelta doméstico)
            electricity: 0.42,       // kg CO₂ por kWh (promedio grid mix global)
            gas: 2.0,               // kg CO₂ por m³ de gas natural
            water: 0.001,           // kg CO₂ por litro (tratamiento y calentamiento)
            meat: 6.8,              // kg CO₂ por comida con carne
            recycling: {
                always: 0,
                sometimes: 120,      // kg CO₂ anuales adicionales
                rarely: 240,
                never: 360
            }
        };

        // Cálculos de emisiones anuales por categoría
        let totalAnnualEmissions = 0;
        
        // Transporte personal (convertir de semanal a anual)
        const transportEmissions = inputData.carKm * 52 * emissionFactors.transport[inputData.transportType];
        totalAnnualEmissions += transportEmissions;
        
        // Aviación comercial
        const aviationEmissions = inputData.flights * emissionFactors.flights;
        totalAnnualEmissions += aviationEmissions;
        
        // Consumo energético doméstico (convertir de mensual a anual)
        const electricityEmissions = inputData.electricity * 12 * emissionFactors.electricity;
        const gasEmissions = inputData.gas * 12 * emissionFactors.gas;
        const waterEmissions = inputData.water * 365 * emissionFactors.water;
        totalAnnualEmissions += electricityEmissions + gasEmissions + waterEmissions;
        
        // Patrones alimentarios (convertir de semanal a anual)
        const meatEmissions = inputData.meatMeals * 52 * emissionFactors.meat;
        const localFoodBenefit = (inputData.localFood / 100) * meatEmissions * 0.30;
        totalAnnualEmissions += meatEmissions - localFoodBenefit;
        
        // Gestión de residuos (emisiones anuales)
        totalAnnualEmissions += emissionFactors.recycling[inputData.recycling];

        // Desglose detallado para análisis
        const breakdown = {
            transport: transportEmissions,
            aviation: aviationEmissions,
            electricity: electricityEmissions,
            gas: gasEmissions,
            water: waterEmissions,
            nutrition: meatEmissions - localFoodBenefit,
            waste: emissionFactors.recycling[inputData.recycling]
        };

        // Generar análisis y visualización de resultados
        displayCalculationResults(totalAnnualEmissions, inputData, breakdown);

    } catch (error) {
        console.error('Error en cálculo de huella de carbono:', error);
        
        if (ecoTracker) {
            ecoTracker.showNotification('Error calculando huella de carbono. Verifica los datos ingresados.', 'error');
        }
    }
}

/**
 * Valida los inputs de la calculadora y corrige valores fuera de rango
 * @param {Object} inputData - Datos de entrada del usuario
 * @returns {Array} Array de errores de validación
 */
function validateCalculatorInputs(inputData) {
    const errors = [];

    // Validar rangos lógicos
    if (inputData.carKm < 0 || inputData.carKm > 2000) {
        errors.push('Kilómetros semanales fuera de rango esperado (0-2000)');
        inputData.carKm = Math.max(0, Math.min(2000, inputData.carKm));
    }

    if (inputData.flights < 0 || inputData.flights > 50) {
        errors.push('Número de vuelos fuera de rango esperado (0-50)');
        inputData.flights = Math.max(0, Math.min(50, inputData.flights));
    }

    if (inputData.electricity < 0 || inputData.electricity > 2000) {
        errors.push('Consumo eléctrico fuera de rango esperado (0-2000 kWh)');
        inputData.electricity = Math.max(0, Math.min(2000, inputData.electricity));
    }

    if (inputData.meatMeals < 0 || inputData.meatMeals > 21) {
        errors.push('Comidas con carne fuera de rango esperado (0-21)');
        inputData.meatMeals = Math.max(0, Math.min(21, inputData.meatMeals));
    }

    return errors;
}

/**
 * Muestra resultados de cálculo con análisis contextual y recomendaciones personalizadas
 * Incluye comparaciones con benchmarks científicos y accesibilidad completa
 * 
 * @param {number} totalEmissions - Emisiones totales anuales en kg CO₂
 * @param {Object} inputs - Datos de entrada del usuario
 * @param {Object} breakdown - Desglose por categorías
 */
function displayCalculationResults(totalEmissions, inputs, breakdown) {
    const resultContainer = document.getElementById('carbon-result');
    
    if (!resultContainer) {
        console.error('Contenedor de resultados no encontrado');
        return;
    }

    const roundedTotal = Math.round(totalEmissions);

    // Determinar contexto científico del resultado con benchmarks actualizados
    const { contextualAnalysis, contextColor, urgencyLevel } = analyzeFootprintContext(totalEmissions);

    // Generar recomendaciones específicas basadas en análisis de datos
    const personalizedRecommendations = generateStrategicRecommendations(breakdown, inputs, totalEmissions);

    resultContainer.innerHTML = `
        <div class="result-card" role="region" aria-label="Resultados de huella de carbono">
            <div class="result-value" aria-label="Tu huella de carbono es ${roundedTotal} kilogramos de CO2 por año">
                ${roundedTotal} kg CO₂/año
            </div>
            <div class="result-message" style="color: ${contextColor};">
                ${contextualAnalysis}
            </div>
            <div style="font-size: 0.9rem; opacity: 0.8; margin: 1rem 0;">
                Nivel de acción recomendado: <strong>${urgencyLevel}</strong>
            </div>
            <div class="recommendations">
                <h4>Estrategias de Reducción Personalizadas</h4>
                ${personalizedRecommendations}
            </div>
            <div style="font-size: 0.85rem; opacity: 0.7; margin-top: 2rem; text-align: center;">
                <strong>Referencias científicas:</strong><br>
                Objetivo 2030: 2,300 kg CO₂ | Promedio mundial: 4,800 kg CO₂ | Países desarrollados: 10,000+ kg CO₂
            </div>
        </div>
    `;

    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Anunciar resultado para lectores de pantalla
    if (ecoTracker) {
        ecoTracker.announceToScreenReader(
            `Cálculo completado. Tu huella de carbono es ${roundedTotal} kilogramos de CO2 por año. ${contextualAnalysis}`
        );
    }
}

/**
 * Analiza el contexto de la huella de carbono según benchmarks científicos
 * @param {number} totalEmissions - Emisiones totales anuales
 * @returns {Object} Análisis contextual con color y nivel de urgencia
 */
function analyzeFootprintContext(totalEmissions) {
    let contextualAnalysis, contextColor, urgencyLevel;
    
    if (totalEmissions < 2300) {
        contextualAnalysis = "Excelente: Alineado con objetivos climáticos globales para 2030";
        contextColor = "var(--success-green)";
        urgencyLevel = "Mantenimiento";
    } else if (totalEmissions < 4800) {
        contextualAnalysis = "Bueno: Por debajo del promedio mundial, con oportunidades de optimización";
        contextColor = "var(--light-blue)";
        urgencyLevel = "Optimización";
    } else if (totalEmissions < 8000) {
        contextualAnalysis = "Promedio: Cerca de niveles de países desarrollados, requiere reducción";
        contextColor = "var(--accent-gold)";
        urgencyLevel = "Reducción activa";
    } else {
        contextualAnalysis = "Alto: Significativamente sobre objetivos climáticos, requiere transformación";
        contextColor = "#DC2626";
        urgencyLevel = "Transformación urgente";
    }

    return { contextualAnalysis, contextColor, urgencyLevel };
}

/**
 * Genera recomendaciones estratégicas basadas en análisis de datos del usuario
 * Prioriza acciones por impacto potencial y viabilidad de implementación
 * 
 * @param {Object} breakdown - Desglose de emisiones por categoría
 * @param {Object} inputs - Datos de entrada del usuario
 * @param {number} totalEmissions - Emisiones totales
 * @returns {string} HTML con recomendaciones personalizadas
 */
function generateStrategicRecommendations(breakdown, inputs, totalEmissions) {
    const recommendations = [];
    const impactThresholds = {
        high: totalEmissions * 0.15,    // 15% del total
        medium: totalEmissions * 0.08,  // 8% del total
        low: totalEmissions * 0.05      // 5% del total
    };
    
    // Análisis y recomendaciones por categoría de mayor impacto
    if (breakdown.transport > impactThresholds.high) {
        recommendations.push({
            category: "Transporte (Alto Impacto)",
            action: "Transición a movilidad eléctrica o híbrida, optimización de rutas, trabajo remoto 2-3 días/semana",
            potential: `Reducción potencial: ${Math.round(breakdown.transport * 0.6)} kg CO₂/año`,
            priority: 1
        });
    }
    
    if (breakdown.aviation > impactThresholds.medium) {
        recommendations.push({
            category: "Aviación (Impacto Significativo)",
            action: "Consolidar viajes anuales, preferir transporte terrestre <800km, compensación certificada para vuelos necesarios",
            potential: `Reducción potencial: ${Math.round(breakdown.aviation * 0.4)} kg CO₂/año`,
            priority: 2
        });
    }
    
    if (breakdown.electricity > impactThresholds.medium) {
        recommendations.push({
            category: "Energía Doméstica (Optimizable)",
            action: "Transición a proveedor renovable, bomba de calor, aislamiento térmico, electrodomésticos eficientes",
            potential: `Reducción potencial: ${Math.round(breakdown.electricity * 0.5)} kg CO₂/año`,
            priority: 3
        });
    }
    
    if (breakdown.nutrition > impactThresholds.high) {
        recommendations.push({
            category: "Alimentación (Alto Potencial)",
            action: "Reducir carne roja 50%, aumentar proteínas vegetales, minimizar desperdicio, productos locales/estacionales",
            potential: `Reducción potencial: ${Math.round(breakdown.nutrition * 0.4)} kg CO₂/año`,
            priority: 1
        });
    }
    
    if (inputs.recycling === 'never' || inputs.recycling === 'rarely') {
        recommendations.push({
            category: "Gestión de Residuos (Oportunidad)",
            action: "Sistema de separación completo, compostaje doméstico, reducción de packaging, economía circular",
            potential: `Reducción potencial: ${Math.round(breakdown.waste * 0.8)} kg CO₂/año`,
            priority: 3
        });
    }

    // Si el perfil ya es eficiente, enfocar en liderazgo e influencia
    if (recommendations.length === 0) {
        recommendations.push({
            category: "Liderazgo Ambiental",
            action: "Mentorear a otros en prácticas sostenibles, influir en políticas organizacionales, inversión en tecnologías limpias",
            potential: "Impacto multiplicador en tu comunidad",
            priority: 1
        });
    }

    // Ordenar por prioridad e impacto
    recommendations.sort((a, b) => a.priority - b.priority);

    return recommendations.map(rec => `
        <div class="recommendation-item">
            <strong>${rec.category}:</strong> ${rec.action}
            <div style="font-size: 0.8rem; margin-top: 0.3rem; opacity: 0.8; color: var(--accent-gold);">
                ${rec.potential}
            </div>
        </div>
    `).join('');
}

/**
 * Maneja errores globales de JavaScript para debugging
 */
window.addEventListener('error', function(event) {
    console.error('Error global capturado:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
    });
    
    // En entorno de desarrollo, mostrar errores al usuario
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        if (ecoTracker) {
            ecoTracker.showNotification(`Error de desarrollo: ${event.message}`, 'error');
        }
    }
});

/**
 * Prevenir errores de promesas no capturadas
 */
window.addEventListener('unhandledrejection', function(event) {
    console.error('Promise rechazada no manejada:', event.reason);
    event.preventDefault(); // Prevenir logging automático del navegador
});

// Exportar funciones principales para testing (si se requiere)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        EcoTrackerApp,
        calculateFootprint,
        showTab,
        startQuiz
    };
}