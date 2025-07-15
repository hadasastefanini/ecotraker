/**
 * Sistema de gestión integral para seguimiento de sostenibilidad personal
 * Arquitectura modular que maneja estado, cálculos y visualización
 */
class EcoTrackerPremium {
    constructor() {
        // Inicialización del estado persistente del usuario
        this.userState = this.loadUserState();
        
        // Configuración de datos científicos base
        this.initializeSustainabilityData();
        this.initializeEducationalContent();
        
        // Renderizado inicial de la interfaz completa
        this.renderAllComponents();
        this.updateAllMetrics();
    }

    /**
     * Carga el estado del usuario desde localStorage con valores por defecto robustos
     * Garantiza continuidad de datos entre sesiones
     */
    loadUserState() {
        const savedData = JSON.parse(localStorage.getItem('ecoTrackerPremiumState') || '{}');
        return {
            completedHabits: savedData.completedHabits || [],
            streakDays: savedData.streakDays || 0,
            totalCO2Reduced: savedData.totalCO2Reduced || 0,
            evaluationScore: savedData.evaluationScore || null,
            achievements: savedData.achievements || [],
            lastActiveDate: savedData.lastActiveDate || null,
            totalEngagementPoints: savedData.totalEngagementPoints || 0,
            completedEvaluations: savedData.completedEvaluations || 0,
            ...savedData
        };
    }

    /**
     * Persiste el estado actual en localStorage de forma segura
     * Incluye timestamp para futuras funcionalidades de sincronización
     */
    saveUserState() {
        this.userState.lastSaved = new Date().toISOString();
        localStorage.setItem('ecoTrackerPremiumState', JSON.stringify(this.userState));
    }

    /**
     * Define hábitos sostenibles con métricas científicamente validadas
     * Cada hábito incluye impacto cuantificable y contexto educativo
     */
    initializeSustainabilityData() {
        this.sustainabilityPractices = [
            {
                id: 'efficient-mobility',
                title: 'Movilidad Eficiente',
                description: 'Priorizar transporte público, bicicleta o caminar para trayectos urbanos menores a 5km',
                co2Reduction: 2.8,
                impact: 'Evita 2.8 kg CO₂ diarios',
                scientificBasis: 'Cada kilómetro evitado en vehículo de combustión ahorra 0.21 kg CO₂. El transporte representa 29% de emisiones globales.'
            },
            {
                id: 'energy-optimization',
                title: 'Optimización Energética',
                description: 'Implementar iluminación LED, termostato programable y desconexión de dispositivos en standby',
                co2Reduction: 1.9,
                impact: 'Reduce 1.9 kg CO₂ diarios',
                scientificBasis: 'La eficiencia energética doméstica puede reducir 20-30% del consumo eléctrico sin sacrificar comodidad.'
            },
            {
                id: 'water-stewardship',
                title: 'Gestión Consciente del Agua',
                description: 'Duchas eficientes, reparación de fugas y reutilización de aguas grises cuando sea posible',
                co2Reduction: 1.1,
                impact: 'Ahorra 1.1 kg CO₂ diarios',
                scientificBasis: 'El tratamiento y calentamiento de agua requiere 0.004 kg CO₂ por litro. Cada litro ahorrado tiene impacto acumulativo.'
            },
            {
                id: 'circular-consumption',
                title: 'Consumo Circular',
                description: 'Separación para reciclaje, compostaje orgánico y preferencia por productos con packaging mínimo',
                co2Reduction: 1.5,
                impact: 'Evita 1.5 kg CO₂ diarios',
                scientificBasis: 'Reciclar 1 kg de plástico evita 2 kg CO₂. El compostaje reduce metano de vertederos en 70%.'
            },
            {
                id: 'mindful-purchasing',
                title: 'Compras Conscientes',
                description: 'Productos locales, envases reutilizables, planificación de compras y preferencia por durabilidad',
                co2Reduction: 1.3,
                impact: 'Reduce 1.3 kg CO₂ diarios',
                scientificBasis: 'Productos locales reducen 85% de emisiones de transporte. Productos duraderos reducen frecuencia de reemplazo.'
            },
            {
                id: 'plant-forward-nutrition',
                title: 'Nutrición Basada en Plantas',
                description: 'Incorporar 3-4 comidas semanales basadas en proteínas vegetales y minimizar desperdicio alimentario',
                co2Reduction: 3.7,
                impact: 'Evita 3.7 kg CO₂ diarios',
                scientificBasis: 'Proteínas animales requieren 10x más recursos que vegetales. Reducir carne 3 días/semana = -40% huella alimentaria.'
            }
        ];

        this.renderSustainabilityInterface();
    }

    /**
     * Configura contenido educativo con progresión pedagógica estructurada
     * Preguntas diseñadas para construir comprensión científica sólida
     */
    initializeEducationalContent() {
        this.educationalQuestions = [
            {
                question: "¿Cuál es la concentración atmosférica actual de CO₂ comparada con niveles pre-industriales (1850)?",
                options: [
                    "25% mayor (350 ppm actual)",
                    "47% mayor (421 ppm actual)",
                    "68% mayor (470 ppm actual)",
                    "95% mayor (550 ppm actual)"
                ],
                correct: 1,
                explanation: "La concentración ha aumentado de 280 ppm (1850) a 421 ppm (2023), representando 47% de incremento. Este aumento se acelera: en los últimos 20 años hemos agregado más CO₂ que en los 80 años anteriores, principalmente por combustibles fósiles y deforestación."
            },
            {
                question: "Según el IPCC, ¿qué porcentaje de reducción de emisiones globales necesitamos para 2030 para limitar calentamiento a 1.5°C?",
                options: [
                    "25% (respecto a niveles 2010)",
                    "35% (respecto a niveles 2010)",
                    "45% (respecto a niveles 2010)",
                    "65% (respecto a niveles 2010)"
                ],
                correct: 2,
                explanation: "El Panel Intergubernamental sobre Cambio Climático establece 45% de reducción para 2030 (base 2010) para 1.5°C. Esto requiere transformaciones sin precedentes en energía, transporte, agricultura e industria. Cada décima de grado adicional amplifica riesgos climáticos exponencialmente."
            },
            {
                question: "¿Cuántos árboles adultos se necesitan plantar para compensar la huella promedio anual de una persona (4.8 ton CO₂)?",
                options: [
                    "22-25 árboles",
                    "55-65 árboles",
                    "120-140 árboles",
                    "220-250 árboles"
                ],
                correct: 3,
                explanation: "Considerando que un árbol absorbe ~22 kg CO₂/año, compensar 4.8 toneladas requiere ~218 árboles. Sin embargo, la reducción de emisiones es más efectiva que compensación: evitar 1 tonelada CO₂ es más impactante que plantar 45 árboles, además de ser inmediato versus décadas de crecimiento arbóreo."
            },
            {
                question: "¿Qué sector económico genera mayor porcentaje de emisiones globales de gases de efecto invernadero?",
                options: [
                    "Agricultura y uso de suelo (24%)",
                    "Transporte (16%)",
                    "Generación eléctrica y calor (25%)",
                    "Industria y procesos (21%)"
                ],
                correct: 2,
                explanation: "Generación eléctrica y calor representa 25% de emisiones globales, pero varía drásticamente por país. En países con matriz renovable puede ser <10%, mientras en economías dependientes de carbón supera 40%. El transporte (16%) incluye todos los modos: terrestre, aéreo y marítimo."
            },
            {
                question: "¿Cuál es la diferencia de huella de carbono entre proteína de res versus proteína de legumbres por gramo de proteína?",
                options: [
                    "2-3 veces mayor para res",
                    "5-7 veces mayor para res",
                    "10-15 veces mayor para res",
                    "20-25 veces mayor para res"
                ],
                correct: 3,
                explanation: "La proteína de res genera ~20-25x más CO₂ que legumbres por gramo de proteína. Esto incluye metano de rumiantes, fertilizantes para forraje, deforestación y procesamiento. Las legumbres además fijan nitrógeno atmosférico, reduciendo necesidad de fertilizantes sintéticos."
            }
        ];

        this.currentQuestionIndex = 0;
        this.currentEvaluationScore = 0;
    }

    /**
     * Renderiza la interfaz de prácticas sostenibles con estado actual
     * Actualiza dinámicamente progreso y feedback visual
     */
    renderSustainabilityInterface() {
        const practicesContainer = document.getElementById('habits-grid');
        
        practicesContainer.innerHTML = this.sustainabilityPractices.map(practice => {
            const isActive = this.userState.completedHabits.includes(practice.id);
            
            return `
                <div class="habit-card ${isActive ? 'completed' : ''}" 
                     onclick="ecoTracker.togglePractice('${practice.id}')"
                     title="${practice.scientificBasis}">
                    <div class="habit-title">${practice.title}</div>
                    <div class="habit-description">${practice.description}</div>
                    <div class="habit-impact">${practice.impact}</div>
                </div>
            `;
        }).join('');

        this.updatePracticesProgress();
    }

    /**
     * Alterna el estado de una práctica sostenible específica
     * Actualiza métricas ambientales y sistema de reconocimiento
     */
    togglePractice(practiceId) {
        const practiceIndex = this.userState.completedHabits.indexOf(practiceId);
        const practice = this.sustainabilityPractices.find(p => p.id === practiceId);
        
        if (practiceIndex === -1) {
            // Activar práctica sostenible
            this.userState.completedHabits.push(practiceId);
            this.userState.totalCO2Reduced += practice.co2Reduction;
            this.userState.totalEngagementPoints += 20;
            
            // Feedback visual positivo
            this.showPositiveFeedback(practice.title);
        } else {
            // Desactivar práctica
            this.userState.completedHabits.splice(practiceIndex, 1);
            this.userState.totalCO2Reduced -= practice.co2Reduction;
            this.userState.totalEngagementPoints -= 20;
        }

        // Verificar logros y actualizar estado
        this.evaluateAchievementProgress();
        this.saveUserState();
        this.renderSustainabilityInterface();
        this.updateAllMetrics();
    }

    /**
     * Proporciona feedback visual inmediato para reforzar comportamientos positivos
     * Implementa principios de psicología del comportamiento
     */
    showPositiveFeedback(practiceTitle) {
        // Implementar feedback visual discreto pero efectivo
        const feedback = document.createElement('div');
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
        `;
        feedback.textContent = `✓ ${practiceTitle} activado`;
        
        document.body.appendChild(feedback);
        
        // Animación de entrada y salida
        setTimeout(() => feedback.style.transform = 'translateX(0)', 100);
        setTimeout(() => feedback.style.transform = 'translateX(100%)', 3000);
        setTimeout(() => document.body.removeChild(feedback), 3500);
    }

    /**
     * Actualiza visualización del progreso de prácticas sostenibles
     * Calcula métricas de adopción y genera mensajes contextuales
     */
    updatePracticesProgress() {
        const activeCount = this.userState.completedHabits.length;
        const totalCount = this.sustainabilityPractices.length;
        const adoptionPercentage = (activeCount / totalCount) * 100;

        // Actualizar barra de progreso con animación fluida
        document.getElementById('habits-progress').style.width = `${adoptionPercentage}%`;
        
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
        
        document.getElementById('habits-stats').textContent = progressMessage;
    }

    /**
     * Inicia la secuencia de evaluación educativa
     * Resetea métricas y configura primera pregunta
     */
    startEvaluation() {
        this.currentQuestionIndex = 0;
        this.currentEvaluationScore = 0;
        this.displayCurrentQuestion();
        document.getElementById('quiz-btn').style.display = 'none';
    }

    /**
     * Renderiza la pregunta actual con opciones interactivas
     * Incluye contador de progreso y contexto educativo
     */
    displayCurrentQuestion() {
        const question = this.educationalQuestions[this.currentQuestionIndex];
        const evaluationContainer = document.getElementById('quiz-content');
        
        evaluationContainer.innerHTML = `
            <div class="quiz-question">
                <h3>Pregunta ${this.currentQuestionIndex + 1} de ${this.educationalQuestions.length}</h3>
                <h3>${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <div class="quiz-option" onclick="ecoTracker.selectAnswer(${index})" data-index="${index}">
                            ${option}
                        </div>
                    `).join('')}
                </div>
                <div id="question-explanation" class="quiz-explanation" style="display: none;"></div>
            </div>
        `;
    }

    /**
     * Procesa la respuesta seleccionada con feedback educativo inmediato
     * Implementa pedagogía de retroalimentación constructiva
     */
    selectAnswer(selectedIndex) {
        const question = this.educationalQuestions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.quiz-option');
        
        // Deshabilitar interacción y mostrar respuestas correctas/incorrectas
        options.forEach((option, index) => {
            option.onclick = null;
            option.style.pointerEvents = 'none';
            
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex) {
                option.classList.add('incorrect');
            }
        });

        // Mostrar explicación educativa detallada
        const explanationElement = document.getElementById('question-explanation');
        explanationElement.textContent = question.explanation;
        explanationElement.style.display = 'block';

        // Actualizar puntuación y métricas de engagement
        if (selectedIndex === question.correct) {
            this.currentEvaluationScore++;
            this.userState.totalEngagementPoints += 30;
        }

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

        resultsContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem 2rem;">
                <h3 style="margin-bottom: 2rem; color: var(--deep-ocean);">Evaluación Completada</h3>
                <div class="result-value" style="color: var(--deep-ocean);">${scorePercentage}%</div>
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
        document.getElementById('quiz-btn').textContent = 'Nueva Evaluación';
        document.getElementById('quiz-btn').style.display = 'block';

        this.evaluateAchievementProgress();
        this.saveUserState();
        this.updateAllMetrics();
    }

    /**
     * Evalúa progreso hacia logros basado en métricas múltiples
     * Sistema de reconocimiento que refuerza engagement sostenido
     */
    evaluateAchievementProgress() {
        const newAchievements = [];

        // Logro por adopción completa de prácticas
        if (this.userState.completedHabits.length === this.sustainabilityPractices.length) {
            if (!this.userState.achievements.includes('sustainability-champion')) {
                newAchievements.push('sustainability-champion');
            }
        }

        // Logro por excelencia en evaluación
        if (this.userState.evaluationScore >= 90) {
            if (!this.userState.achievements.includes('climate-scholar')) {
                newAchievements.push('climate-scholar');
            }
        }

        // Logro por impacto cuantificable significativo
        if (this.userState.totalCO2Reduced >= 100) {
            if (!this.userState.achievements.includes('carbon-guardian')) {
                newAchievements.push('carbon-guardian');
            }
        }

        // Logro por engagement sostenido
        if (this.userState.totalEngagementPoints >= 500) {
            if (!this.userState.achievements.includes('eco-advocate')) {
                newAchievements.push('eco-advocate');
            }
        }

        // Agregar nuevos logros y proporcionar feedback
        this.userState.achievements.push(...newAchievements);
        
        // Mostrar notificación de nuevos logros
        newAchievements.forEach(achievement => {
            setTimeout(() => this.showAchievementNotification(achievement), 1000);
        });

        return newAchievements;
    }

    /**
     * Muestra notificación elegante para nuevos logros
     * Refuerza progreso positivo con feedback visual premium
     */
    showAchievementNotification(achievementId) {
        const achievementData = {
            'sustainability-champion': '🏆 Campeón de Sostenibilidad',
            'climate-scholar': '🧠 Académico Climático',
            'carbon-guardian': '🌱 Guardián del Carbono',
            'eco-advocate': '⭐ Defensor Ecológico'
        };

        const notification = document.createElement('div');
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
        `;
        notification.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem;">🎉</div>
            <div>¡Logro Desbloqueado!</div>
            <div style="font-size: 1rem; margin-top: 0.5rem; opacity: 0.9;">
                ${achievementData[achievementId]}
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animación de aparición y desaparición
        setTimeout(() => notification.style.transform = 'translate(-50%, -50%) scale(1)', 100);
        setTimeout(() => notification.style.transform = 'translate(-50%, -50%) scale(0)', 3000);
        setTimeout(() => document.body.removeChild(notification), 3500);
    }

    /**
     * Actualiza todas las métricas de progreso en tiempo real
     * Sincroniza estado interno con visualización de interfaz
     */
    updateAllMetrics() {
        // Actualizar estadísticas numéricas
        document.getElementById('streak-days').textContent = this.userState.streakDays;
        document.getElementById('co2-saved').textContent = Math.round(this.userState.totalCO2Reduced * 10) / 10;
        document.getElementById('quiz-score').textContent = 
            this.userState.evaluationScore ? `${this.userState.evaluationScore}%` : 'Pendiente';

        // Renderizar sistema de logros
        this.renderAchievementSystem();
    }

    /**
     * Renderiza sistema completo de logros con estado visual apropiado
     * Muestra progreso hacia objetivos no alcanzados
     */
    renderAchievementSystem() {
        const achievementsContainer = document.getElementById('achievements-grid');
        
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
                <div class="achievement-card ${isUnlocked ? 'unlocked' : ''}">
                    <div class="achievement-icon">${isUnlocked ? achievement.icon : '🔒'}</div>
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

// Instancia global de la aplicación premium
const ecoTracker = new EcoTrackerPremium();

/**
 * Controla navegación entre secciones con transiciones elegantes
 * Actualiza estado visual de navegación
 */
function showTab(tabName) {
    // Ocultar todas las secciones activas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remover estado activo de navegación
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activar sección y navegación seleccionadas
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

/**
 * Función de conveniencia para iniciar evaluación
 * Mantiene compatibilidad con interfaz anterior
 */
function startQuiz() {
    ecoTracker.startEvaluation();
}

/**
 * Calculadora de huella de carbono con algoritmos científicamente validados
 * Utiliza factores de emisión reconocidos internacionalmente
 */
function calculateFootprint() {
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

    // Factores de emisión basados en metodologías IPCC y EPA
    const emissionFactors = {
        transport: {
            gasoline: 0.21,      // kg CO₂ por km
            diesel: 0.27,        // kg CO₂ por km  
            hybrid: 0.12,        // kg CO₂ por km
            electric: 0.05       // kg CO₂ por km (incluye generación eléctrica)
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

    // Generar análisis y visualización de resultados
    displayCalculationResults(totalAnnualEmissions, inputData, {
        transport: transportEmissions,
        aviation: aviationEmissions,
        electricity: electricityEmissions,
        gas: gasEmissions,
        water: waterEmissions,
        nutrition: meatEmissions - localFoodBenefit,
        waste: emissionFactors.recycling[inputData.recycling]
    });
}

/**
 * Muestra resultados de cálculo con análisis contextual y recomendaciones personalizadas
 * Incluye comparaciones con benchmarks científicos
 */
function displayCalculationResults(totalEmissions, inputs, breakdown) {
    const resultContainer = document.getElementById('carbon-result');
    const roundedTotal = Math.round(totalEmissions);

    // Determinar contexto científico del resultado
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

    // Generar recomendaciones específicas basadas en análisis de datos
    const personalizedRecommendations = generateStrategicRecommendations(breakdown, inputs, totalEmissions);

    resultContainer.innerHTML = `
        <div class="result-card">
            <div class="result-value">${roundedTotal} kg CO₂/año</div>
            <div class="result-message" style="color: ${contextColor};">${contextualAnalysis}</div>
            <div style="font-size: 0.9rem; opacity: 0.8; margin: 1rem 0;">
                Nivel de acción recomendado: <strong>${urgencyLevel}</strong>
            </div>
            <div class="recommendations">
                <h4>Estrategias de Reducción Personalizadas</h4>
                ${personalizedRecommendations}
            </div>
            <div style="font-size: 0.85rem; opacity: 0.7; margin-top: 2rem; text-align: center;">
                <strong>Referencias:</strong> Objetivo 2030: 2,300 kg CO₂ | Promedio mundial: 4,800 kg CO₂ | Países desarrollados: 10,000+ kg CO₂
            </div>
        </div>
    `;

    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Genera recomendaciones estratégicas basadas en análisis de datos del usuario
 * Prioriza acciones por impacto potencial y viabilidad de implementación
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
            potential: `Reducción potencial: ${Math.round(breakdown.transport * 0.6)} kg CO₂/año`
        });
    }
    
    if (breakdown.aviation > impactThresholds.medium) {
        recommendations.push({
            category: "Aviación (Impacto Significativo)",
            action: "Consolidar viajes anuales, preferir transporte terrestre <800km, compensación certificada para vuelos necesarios",
            potential: `Reducción potencial: ${Math.round(breakdown.aviation * 0.4)} kg CO₂/año`
        });
    }
    
    if (breakdown.electricity > impactThresholds.medium) {
        recommendations.push({
            category: "Energía Doméstica (Optimizable)",
            action: "Transición a proveedor renovable, bomba de calor, aislamiento térmico, electrodomésticos eficientes",
            potential: `Reducción potencial: ${Math.round(breakdown.electricity * 0.5)} kg CO₂/año`
        });
    }
    
    if (breakdown.nutrition > impactThresholds.high) {
        recommendations.push({
            category: "Alimentación (Alto Potencial)",
            action: "Reducir carne roja 50%, aumentar proteínas vegetales, minimizar desperdicio, productos locales/estacionales",
            potential: `Reducción potencial: ${Math.round(breakdown.nutrition * 0.4)} kg CO₂/año`
        });
    }
    
    if (inputs.recycling === 'never' || inputs.recycling === 'rarely') {
        recommendations.push({
            category: "Gestión de Residuos (Oportunidad)",
            action: "Sistema de separación completo, compostaje doméstico, reducción de packaging, economía circular",
            potential: `Reducción potencial: ${Math.round(breakdown.waste * 0.8)} kg CO₂/año`
        });
    }

    // Si el perfil ya es eficiente, enfocar en liderazgo e influencia
    if (recommendations.length === 0) {
        recommendations.push({
            category: "Liderazgo Ambiental",
            action: "Mentorear a otros en prácticas sostenibles, influir en políticas organizacionales, inversión en tecnologías limpias",
            potential: "Impacto multiplicador en tu comunidad"
        });
    }

    return recommendations.map(rec => `
        <div class="recommendation-item">
            <strong>${rec.category}:</strong> ${rec.action}
            <div style="font-size: 0.8rem; margin-top: 0.3rem; opacity: 0.8; color: var(--accent-gold);">
                ${rec.potential}
            </div>
        </div>
    `).join('');
}