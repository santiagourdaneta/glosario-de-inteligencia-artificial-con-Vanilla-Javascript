document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-term');
    const glossaryList = document.getElementById('glossary-list');
    const noResults = document.getElementById('no-results');

    // Datos del glosario (50 términos)
    const glossaryTerms = [
        { term: "Inteligencia Artificial (IA)", definition: "Campo de la informática dedicado a crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana." },
        { term: "Aprendizaje Automático (Machine Learning)", definition: "Subcampo de la IA que permite a las máquinas aprender de los datos sin ser programadas explícitamente." },
        { term: "Red Neuronal", definition: "Modelo computacional inspirado en la estructura del cerebro humano, utilizado en el aprendizaje profundo." },
        { term: "Algoritmo", definition: "Conjunto de reglas o instrucciones bien definidas para resolver un problema o realizar una tarea." },
        { term: "Deep Learning (Aprendizaje Profundo)", definition: "Subcampo del aprendizaje automático con redes neuronales de múltiples capas para aprender representaciones complejas de datos." },
        { term: "Procesamiento del Lenguaje Natural (PLN)", definition: "Rama de la IA que se enfoca en la interacción entre las computadoras y el lenguaje humano." },
        { term: "Visión por Computadora", definition: "Campo de la IA que permite a las computadoras 'ver' e interpretar el mundo visual." },
        { term: "Agente Inteligente", definition: "Entidad que percibe su entorno y realiza acciones para maximizar sus posibilidades de éxito." },
        { term: "Aprendizaje Supervisado", definition: "Tipo de aprendizaje automático donde el modelo aprende de datos etiquetados." },
        { term: "Aprendizaje No Supervisado", definition: "Tipo de aprendizaje automático donde el modelo aprende patrones de datos sin etiquetas." },
        { term: "Aprendizaje por Refuerzo", definition: "Tipo de aprendizaje automático donde un agente aprende a tomar decisiones mediante prueba y error, recibiendo recompensas o castigos." },
        { term: "Función de Activación", definition: "En redes neuronales, una función que determina la salida de un nodo dada una entrada." },
        { term: "Retropropagación (Backpropagation)", definition: "Algoritmo clave para entrenar redes neuronales, ajustando los pesos de las conexiones." },
        { term: "Conjunto de Datos (Dataset)", definition: "Colección de datos utilizada para entrenar o evaluar un modelo de aprendizaje automático." },
        { term: "Entrenamiento (Training)", definition: "Proceso de enseñar a un modelo de aprendizaje automático a partir de datos." },
        { term: "Validación", definition: "Proceso de evaluar el rendimiento de un modelo con datos no vistos durante el entrenamiento." },
        { term: "Prueba (Testing)", definition: "Evaluación final del rendimiento de un modelo con un conjunto de datos completamente nuevo." },
        { term: "Sobreajuste (Overfitting)", definition: "Situación donde un modelo aprende demasiado bien los datos de entrenamiento y tiene un mal rendimiento con datos nuevos." },
        { term: "Subajuste (Underfitting)", definition: "Situación donde un modelo no puede capturar la complejidad de los datos de entrenamiento y tiene un mal rendimiento." },
        { term: "Característica (Feature)", definition: "Atributo individual de un dato que se utiliza como entrada para un modelo." },
        { term: "Ingeniería de Características (Feature Engineering)", definition: "Proceso de seleccionar, transformar y crear características relevantes para mejorar el rendimiento del modelo." },
        { term: "Clasificación", definition: "Tarea de aprendizaje automático de asignar una instancia a una de varias categorías predefinidas." },
        { term: "Regresión", definition: "Tarea de aprendizaje automático de predecir un valor numérico continuo." },
        { term: "Clustering (Agrupamiento)", definition: "Tarea de aprendizaje no supervisado de agrupar instancias similares." },
        { term: "Redes Convolucionales (CNN)", definition: "Tipo de red neuronal especialmente efectiva para tareas de visión por computadora." },
        { term: "Redes Recurrentes (RNN)", definition: "Tipo de red neuronal diseñada para procesar secuencias de datos, como texto o series de tiempo." },
        { term: "Transformadores (Transformers)", definition: "Arquitectura de red neuronal que ha revolucionado el PLN y también se utiliza en visión por computadora." },
        { term: "Atención (Attention)", definition: "Mecanismo en redes neuronales que permite al modelo centrarse en las partes más relevantes de la entrada." },
        { term: "Inferencia", definition: "Proceso de utilizar un modelo entrenado para hacer predicciones sobre nuevos datos." },
        { term: "Métricas de Evaluación", definition: "Medidas cuantitativas utilizadas para evaluar el rendimiento de un modelo (ej: precisión, recall, F1-score)." },
        { term: "Sesgo (Bias)", definition: "Tendencia sistemática de un modelo a favorecer ciertas salidas sobre otras, a menudo reflejando sesgos en los datos de entrenamiento." },
        { term: "Explicabilidad de la IA (XAI)", definition: "Campo de la IA que busca hacer que las decisiones de los modelos sean comprensibles para los humanos." },
        { term: "Ética de la IA", definition: "Rama de la ética que considera las implicaciones morales de los sistemas de IA." },
        { term: "Ontología", definition: "Representación formal y explícita de un conocimiento compartido." },
        { term: "Semántica", definition: "Estudio del significado en el lenguaje." },
        { term: "Sintaxis", definition: "Estudio de la estructura gramatical del lenguaje." },
        { term: "Corpus", definition: "Gran colección de textos utilizados para el análisis lingüístico." },
        { term: "Tokenización", definition: "Proceso de dividir texto en unidades más pequeñas (tokens)." },
        { term: "Incrustaciones de Palabras (Word Embeddings)", definition: "Representaciones vectoriales de palabras que capturan su significado semántico." },
        { term: "Generación de Lenguaje Natural (GLN)", definition: "Rama del PLN que se enfoca en generar texto legible por humanos a partir de datos." },
        { term: "Reconocimiento de Voz", definition: "Tecnología que permite a las computadoras entender el lenguaje hablado." },
        { term: "Procesamiento de Imágenes", definition: "Conjunto de técnicas para analizar y manipular imágenes digitales." },
        { term: "Detección de Objetos", definition: "Tarea de visión por computadora de identificar y localizar objetos dentro de una imagen." },
        { term: "Segmentación Semántica", definition: "Tarea de visión por computadora de asignar una etiqueta de clase a cada píxel de una imagen." },
        { term: "Transfer Learning (Aprendizaje por Transferencia)", definition: "Técnica de reutilizar el conocimiento aprendido de una tarea para otra relacionada." },
        { term: "Aumento de Datos (Data Augmentation)", definition: "Técnicas para aumentar el tamaño de un conjunto de datos creando versiones modificadas de las muestras existentes." },
        { term: "Hiperparámetros", definition: "Parámetros de un modelo de aprendizaje automático que se establecen antes del entrenamiento." },
        { term: "Optimización", definition: "Proceso de encontrar los mejores valores para los parámetros de un modelo durante el entrenamiento." },
        { term: "Función de Pérdida (Loss Function)", definition: "Función que cuantifica el error del modelo durante el entrenamiento." },
        { term: "Gradiente Descendente (Gradient Descent)", definition: "Algoritmo de optimización iterativo utilizado para minimizar la función de pérdida." }
    ];
    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        if (terms.length > 0) {
            terms.forEach(item => {
                const termElement = document.createElement('article');
                termElement.innerHTML = `<h3>${item.term}</h3><p>${item.definition}</p>`;
                glossaryList.appendChild(termElement);
            });
            noResults.style.display = 'none';
            glossaryList.style.display = 'block';
        } else {
            glossaryList.style.display = 'none';
            noResults.style.display = 'block';
        }
    }

    function searchGlossary(searchTerm) {
        if (searchTerm.length < 2) { // Validación mínima de búsqueda
            displayGlossary(glossaryTerms); // Mostrar glosario completo si la búsqueda es muy corta
            return;
        }

        const lowerSearchTerm = searchTerm.toLowerCase();
        const results = glossaryTerms.filter(item =>
            item.term.toLowerCase().includes(lowerSearchTerm) ||
            item.definition.toLowerCase().includes(lowerSearchTerm)
        );
        displayGlossary(results);
    }

    // Mostrar el glosario completo al cargar la página
    displayGlossary(glossaryTerms);

    // Escuchar los cambios en el campo de búsqueda
    searchInput.addEventListener('input', function() {
        searchGlossary(this.value.trim());
    });
});