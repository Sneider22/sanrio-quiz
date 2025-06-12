const questions = [
    {
        question: "¿Cuál es tu color favorito?",
        options: [
            { answer: "Rojo", img: "rojo.png", points: { "Hello Kitty": 3, "My Melody": 1.5, "Cinnamoroll": 0, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 1, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Rosado", img: "rosado.png", points: { "Hello Kitty": 2, "My Melody": 3, "Cinnamoroll": 1.5, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 0, "Kuromi": 0.5, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Azul", img: "azul.png", points: { "Hello Kitty": 1, "My Melody": 0, "Cinnamoroll": 2, "Chococat": 1, "Tuxedo Sam": 3, "Pochacco": 1, "Kuromi": 0, "Pompompurin": 0.5, "Keroppi": 1, "Badtz-Maru": 3 } },
            { answer: "Verde", img: "verde.png", points: { "Hello Kitty": 0, "My Melody": 0, "Cinnamoroll": 0, "Chococat": 0, "Tuxedo Sam": 1, "Pochacco": 1, "Kuromi": 0, "Pompompurin": 1, "Keroppi": 3, "Badtz-Maru": 0 } },
            { answer: "Negro", img: "negro.png", points: { "Hello Kitty": 0, "My Melody": 0, "Cinnamoroll": 0, "Chococat": 2, "Tuxedo Sam": 0, "Pochacco": 0, "Kuromi": 3, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 3 } },
            { answer: "Blanco", img: "blanco.png", points: { "Hello Kitty": 2, "My Melody": 2, "Cinnamoroll": 3, "Chococat": 0, "Tuxedo Sam": 1, "Pochacco": 2, "Kuromi": 1.5, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 1.5 } },
            { answer: "Amarillo", img: "amarillo.png", points: { "Hello Kitty": 0.5, "My Melody": 0, "Cinnamoroll": 0, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 3, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Morado", img: "morado.png", points: { "Hello Kitty": 1, "My Melody": 1, "Cinnamoroll": 0.5, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 0, "Kuromi": 3, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 1 } }
        ]
    },
    {
        question: "¿Qué tipo de comida prefieres?",
        options: [
            { answer: "Galletas", img: "galletas.png", points: { "Hello Kitty": 3, "My Melody": 3, "Cinnamoroll": 3, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Comida saludable", img: "saludable.png", points: { "Hello Kitty": 2, "My Melody": 2, "Cinnamoroll": 2, "Chococat": 3, "Tuxedo Sam": 1, "Pochacco": 0, "Kuromi": 2.5, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Rollos de canela", img: "rollos_canela.png", points: { "Hello Kitty": 1.5, "My Melody": 1.5, "Cinnamoroll": 3, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Comida japonesa", img: "japonesa.png", points: { "Hello Kitty": 0, "My Melody": 0, "Cinnamoroll": 0, "Chococat": 1, "Tuxedo Sam": 3, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 2, "Badtz-Maru": 1.5 } },
            { answer: "Pies", img: "pies.png", points: { "Hello Kitty": 2, "My Melody": 2, "Cinnamoroll": 2.5, "Chococat": 0, "Tuxedo Sam": 3, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 2.5, "Keroppi": 2, "Badtz-Maru": 0 } },
            { answer: "Pasteles", img: "pasteles.png", points: { "Hello Kitty": 2.5, "My Melody": 2.5, "Cinnamoroll": 3, "Chococat": 1, "Tuxedo Sam": 1, "Pochacco": 2, "Kuromi": 3, "Pompompurin": 3, "Keroppi": 2.5, "Badtz-Maru": 1 } },
            { answer: "Pudín", img: "pudin.png", points: { "Hello Kitty": 1.5, "My Melody": 1.5, "Cinnamoroll": 2, "Chococat": 1, "Tuxedo Sam": 0, "Pochacco": 1, "Kuromi": 1, "Pompompurin": 3, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Comida rápida", img: "comida_rapida.png", points: { "Hello Kitty": 0.5, "My Melody": 1, "Cinnamoroll": 0.5, "Chococat": 1.5, "Tuxedo Sam": 0.5, "Pochacco": 2.5, "Kuromi": 1.5, "Pompompurin": 1.5, "Keroppi": 1.5, "Badtz-Maru": 3 } }
        ]
    },
    {
        question: "¿Cómo describes tu personalidad?",
        options: [
            { answer: "Amigable", img: "amigable.png", points: { "Hello Kitty": 3, "My Melody": 3, "Cinnamoroll": 2.5, "Chococat": 2.5, "Tuxedo Sam": 2, "Pochacco": 2, "Kuromi": 1.5, "Pompompurin": 2.5, "Keroppi": 2.5, "Badtz-Maru": 1 } },
            { answer: "Creativo/a", img: "creativo.png", points: { "Hello Kitty": 3, "My Melody": 3, "Cinnamoroll": 3, "Chococat": 2.5, "Tuxedo Sam": 2.5, "Pochacco": 1, "Kuromi": 2, "Pompompurin": 2, "Keroppi": 2, "Badtz-Maru": 1.5 } },
            { answer: "Inteligente y analítico/a", img: "inteligente.png", points: { "Hello Kitty": 2, "My Melody": 1.8, "Cinnamoroll": 2, "Chococat": 3, "Tuxedo Sam": 2.5, "Pochacco": 1.5, "Kuromi": 2.5, "Pompompurin": 1, "Keroppi": 1.5, "Badtz-Maru": 2.5 } },
            { answer: "Travieso/a", img: "travieso.png", points: { "Hello Kitty": 1, "My Melody": 1.5, "Cinnamoroll": 1, "Chococat": 1, "Tuxedo Sam": 1, "Pochacco": 3, "Kuromi": 1, "Pompompurin": 1, "Keroppi": 2, "Badtz-Maru": 1 } },
            { answer: "Enérgico/a", img: "energico.png", points: { "Hello Kitty": 2, "My Melody": 2.5, "Cinnamoroll": 1, "Chococat": 1.5, "Tuxedo Sam": 1, "Pochacco": 3, "Kuromi": 1.5, "Pompompurin": 3, "Keroppi": 3, "Badtz-Maru": 1 } },
            { answer: "Rebelde", img: "rebelde.png", points: { "Hello Kitty": 0.5, "My Melody": 0.5, "Cinnamoroll": 0, "Chococat": 1.5, "Tuxedo Sam": 0, "Pochacco": 2, "Kuromi": 3, "Pompompurin": 1, "Keroppi": 1.5, "Badtz-Maru": 3 } },
            { answer: "Divertido/a", img: "divertido.png", points: { "Hello Kitty": 2, "My Melody": 2, "Cinnamoroll": 1.5, "Chococat": 1.5, "Tuxedo Sam": 1, "Pochacco": 2, "Kuromi": 2, "Pompompurin": 3, "Keroppi": 2, "Badtz-Maru": 1.5 } },
            { answer: "Sarcastico/a", img: "sarcastico.png", points: { "Hello Kitty": 1, "My Melody": 0.5, "Cinnamoroll": 0.5, "Chococat": 3, "Tuxedo Sam": 2.5, "Pochacco": 1, "Kuromi": 3, "Pompompurin": 0.5, "Keroppi": 1, "Badtz-Maru": 3 } }
        ]
    },
    {
        question: "¿Cuál es tu deporte favorito?",
        options: [
            { answer: "Patinaje", img: "patinaje.png", points: { "Hello Kitty": 3, "My Melody": 2, "Cinnamoroll": 2.5, "Chococat": 0, "Tuxedo Sam": 1, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Baile", img: "baile.png", points: { "Hello Kitty": 2.5, "My Melody": 3, "Cinnamoroll": 2, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 1.5, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Natación", img: "natacion.png", points: { "Hello Kitty": 2.5, "My Melody": 2.5, "Cinnamoroll": 3, "Chococat": 1, "Tuxedo Sam": 2.5, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 3, "Badtz-Maru": 0 } },
            { answer: "Golf", img: "golf.png", points: { "Hello Kitty": 1.5, "My Melody": 1.5, "Cinnamoroll": 0, "Chococat": 2, "Tuxedo Sam": 2.5, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Béisbol", img: "beisbol.png", points: { "Hello Kitty": 0, "My Melody": 0, "Cinnamoroll": 0, "Chococat": 0, "Tuxedo Sam": 1, "Pochacco": 3, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0.5 } },
            { answer: "Fútbol", img: "futbol.png", points: { "Hello Kitty": 1, "My Melody": 0, "Cinnamoroll": 0, "Chococat": 1, "Tuxedo Sam": 1, "Pochacco": 3, "Kuromi": 1, "Pompompurin": 1, "Keroppi": 2, "Badtz-Maru": 1.8 } },
            { answer: "Deportes extremos", img: "extremos.png", points: { "Hello Kitty": 0, "My Melody": 0, "Cinnamoroll": 0, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 2, "Kuromi": 2.8, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 3 } },
            { answer: "Voleibol", img: "voleibol.png", points: { "Hello Kitty": 1.5, "My Melody": 1.5, "Cinnamoroll": 1.5, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 1, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } }
        ]
    },
    {
        question: "¿Cuál es tu pasatiempo favorito?",
        options: [
            { answer: "Cocinar", img: "cocinar.png", points: { "Hello Kitty": 2, "My Melody": 2, "Cinnamoroll": 3, "Chococat": 0, "Tuxedo Sam": 1.5, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Manualidades", img: "manualidades.png", points: { "Hello Kitty": 3, "My Melody": 3, "Cinnamoroll": 2.5, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 0, "Kuromi": 1.5, "Pompompurin": 1, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Escuchar música", img: "musica.png", points: { "Hello Kitty": 1.5, "My Melody": 1.5, "Cinnamoroll": 0, "Chococat": 1, "Tuxedo Sam": 1.5, "Pochacco": 0, "Kuromi": 3, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 2.8 } },
            { answer: "Leer", img: "leer.png", points: { "Hello Kitty": 1.5, "My Melody": 0, "Cinnamoroll": 1.5, "Chococat": 2.5, "Tuxedo Sam": 3, "Pochacco": 0, "Kuromi": 2.5, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 2 } },
            { answer: "Decorar pasteles", img: "pasteles.png", points: { "Hello Kitty": 2.5, "My Melody": 2.5, "Cinnamoroll": 3, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Dibujar", img: "dibujar.png", points: { "Hello Kitty": 1.5, "My Melody": 1.5, "Cinnamoroll": 1.5, "Chococat": 0.5, "Tuxedo Sam": 1, "Pochacco": 0, "Kuromi": 1, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Experimentar con ciencia", img: "ciencia.png", points: { "Hello Kitty": 1.5, "My Melody": 0, "Cinnamoroll": 0, "Chococat": 3, "Tuxedo Sam": 1.5, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0.5 } },
            { answer: "Jugar videojuegos", img: "videojuegos.png", points: { "Hello Kitty": 0, "My Melody": 0, "Cinnamoroll": 0, "Chococat": 2, "Tuxedo Sam": 1, "Pochacco": 2.5, "Kuromi": 2, "Pompompurin": 1, "Keroppi": 1, "Badtz-Maru": 1.5 } },
            { answer: "Jugar al aire libre", img: "aire_libre.png", points: { "Hello Kitty": 2.5, "My Melody": 2.5, "Cinnamoroll": 1, "Chococat": 0.5, "Tuxedo Sam": 0.5, "Pochacco": 3, "Kuromi": 0, "Pompompurin": 2, "Keroppi": 2, "Badtz-Maru": 0 } },
            { answer: "Escribir", img: "escribir.png", points: { "Hello Kitty": 1, "My Melody": 1, "Cinnamoroll": 2, "Chococat": 2.5, "Tuxedo Sam": 1, "Pochacco": 0, "Kuromi": 2, "Pompompurin": 0, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Ver películas", img: "peliculas.png", points: { "Hello Kitty": 2, "My Melody": 2, "Cinnamoroll": 2, "Chococat": 2.5, "Tuxedo Sam": 2, "Pochacco": 1.5, "Kuromi": 2.5, "Pompompurin": 1.5, "Keroppi": 1.5, "Badtz-Maru": 2 } },
            { answer: "Programar", img: "programar.png", points: { "Hello Kitty": 0, "My Melody": 0, "Cinnamoroll": 0, "Chococat": 3, "Tuxedo Sam": 1, "Pochacco": 0, "Kuromi": 1.5, "Pompompurin": 0, "Keroppi": 2, "Badtz-Maru": 1.5 } },
        ]
    },
    {
        question: "¿Cuál de estos lugares te gusta más?",
        options: [
            { answer: "Jardín", img: "jardin.png", points: { "Hello Kitty": 3, "My Melody": 2, "Cinnamoroll": 2, "Chococat": 0, "Tuxedo Sam": 0, "Pochacco": 0, "Kuromi": 0, "Pompompurin": 1.5, "Keroppi": 1.5, "Badtz-Maru": 0 } },
            { answer: "Bosque", img: "bosque.png", points: { "Hello Kitty": 1, "My Melody": 1.5, "Cinnamoroll": 0.5, "Chococat": 0, "Tuxedo Sam": 0.5, "Pochacco": 1, "Kuromi": 0, "Pompompurin": 1, "Keroppi": 1, "Badtz-Maru": 0 } },
            { answer: "Playa", img: "playa.png", points: { "Hello Kitty": 2, "My Melody": 1.5, "Cinnamoroll": 2, "Chococat": 1, "Tuxedo Sam": 3, "Pochacco": 1, "Kuromi": 0.5, "Pompompurin": 2, "Keroppi": 3, "Badtz-Maru": 0.5 } },
            { answer: "Montañas", img: "montanas.png", points: { "Hello Kitty": 0.5, "My Melody": 0.5, "Cinnamoroll": 0.5, "Chococat": 1, "Tuxedo Sam": 0.5, "Pochacco": 3, "Kuromi": 0, "Pompompurin": 2, "Keroppi": 1.5, "Badtz-Maru": 0 } },
            { answer: "Parque", img: "parque.png", points: { "Hello Kitty": 3, "My Melody": 2.5, "Cinnamoroll": 3, "Chococat": 1.5, "Tuxedo Sam": 0, "Pochacco": 3, "Kuromi": 0, "Pompompurin": 2, "Keroppi": 0, "Badtz-Maru": 0 } },
            { answer: "Noche estrellada", img: "noche_estrellada.png", points: { "Hello Kitty": 1.5, "My Melody": 1.5, "Cinnamoroll": 1.5, "Chococat": 3, "Tuxedo Sam": 2, "Pochacco": 2, "Kuromi": 2.5, "Pompompurin": 2, "Keroppi": 1, "Badtz-Maru": 2.8 } },
            { answer: "Lago", img: "lago.png", points: { "Hello Kitty": 2, "My Melody": 2, "Cinnamoroll": 2, "Chococat": 1, "Tuxedo Sam": 2.5, "Pochacco": 1, "Kuromi": 0.5, "Pompompurin": 1.5, "Keroppi": 3, "Badtz-Maru": 0 } },
            { answer: "Noche oscura", img: "noche_oscura.png", points: { "Hello Kitty": 0.5, "My Melody": 0.5, "Cinnamoroll": 0, "Chococat": 2, "Tuxedo Sam": 1.5, "Pochacco": 1.5, "Kuromi": 3, "Pompompurin": 1, "Keroppi": 0.5, "Badtz-Maru": 3 } }
        ]
    }
];

let scores = {
    "Hello Kitty": 0,
    "My Melody": 0,
    "Cinnamoroll": 0,
    "Pompompurin": 0,
    "Keroppi": 0,
    "Badtz-Maru": 0,
    "Chococat": 0,
    "Tuxedo Sam": 0,
    "Pochacco": 0,
    "Kuromi": 0
};
let currentQuestion = 0;
let answers = []; // Ahora cada elemento será un array de índices seleccionados

function displayQuestion(index) {
    const question = questions[index];
    document.getElementById('question').textContent = question.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // Inicializa el array si no existe
    if (!Array.isArray(answers[index])) answers[index] = [];

    question.options.forEach((option, i) => {
        // Crea el recuadro de la opción
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => toggleOption(index, i);

        // El recuadro solo tendrá la imagen
        if (option.img) {
            const img = document.createElement('img');
            img.src = `assets/${option.img}`;
            img.alt = option.answer;
            img.className = 'option-img'; // Para estilos
            optionDiv.appendChild(img);
        }

        // Marca las opciones seleccionadas
        if (answers[index].includes(i)) {
            optionDiv.style.outline = '3px solid #6a11cb';
            optionDiv.style.boxShadow = '0 0 0 4px #e0c3fc';
        }

        // Contenedor para recuadro + nombre
        const wrapper = document.createElement('div');
        wrapper.className = 'option-wrapper';
        wrapper.appendChild(optionDiv);

        // Nombre debajo del recuadro
        const label = document.createElement('div');
        label.className = 'option-label';
        label.textContent = option.answer;
        wrapper.appendChild(label);

        optionsContainer.appendChild(wrapper);
    });

    // Botones
    document.getElementById('prev-button').style.display = index === 0 ? 'none' : 'inline-block';
    document.getElementById('next-button').textContent = (index === questions.length - 1) ? 'Ver resultado' : 'Siguiente';
}

function toggleOption(qIndex, optionIndex) {
    if (!Array.isArray(answers[qIndex])) answers[qIndex] = [];
    const idx = answers[qIndex].indexOf(optionIndex);
    if (idx > -1) {
        answers[qIndex].splice(idx, 1); // Quitar si ya está
    } else {
        answers[qIndex].push(optionIndex); // Agregar si no está
    }
    displayQuestion(qIndex);
}

function calculateScores() {
    // Reinicia los scores
    for (let key in scores) scores[key] = 0;
    answers.forEach((selectedIndices, qIndex) => {
        if (Array.isArray(selectedIndices)) {
            selectedIndices.forEach(optionIndex => {
                const points = questions[qIndex].options[optionIndex].points;
                for (const character in points) {
                    scores[character] += points[character];
                }
            });
        }
    });
}

document.getElementById('next-button').onclick = function() {
    if (!answers[currentQuestion] || answers[currentQuestion].length === 0) {
        alert('Por favor selecciona al menos una opción antes de continuar.');
        return;
    }
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    } else {
        calculateScores();
        showResult();
    }
};

document.getElementById('prev-button').onclick = function() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion(currentQuestion);
    }
};

document.getElementById('restart-button').onclick = function() {
    // Reinicia variables
    currentQuestion = 0;
    answers = [];
    for (let key in scores) scores[key] = 0;

    // Oculta el resultado y muestra el quiz
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('question-container').style.display = '';
    document.querySelector('.navigation-buttons').style.display = '';
    displayQuestion(0);
};

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');

    // Ordenar personajes por puntaje
    const sorted = Object.entries(scores)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value);

    const totalPoints = sorted.reduce((a, b) => a + b.value, 0) || 1;
    const top3 = sorted.slice(0, 3);

    // Principal
    const resultCharacter = top3[0].name;
    const percentage = Math.round((top3[0].value / totalPoints) * 100);

    document.getElementById('result-name').textContent = resultCharacter;
    document.getElementById('result-description').textContent = characterDescriptions[resultCharacter] || "";
    document.getElementById('result-percentage').textContent = `Afinidad: ${percentage}%`;

    // Imagen principal
    const mainImgName = resultCharacter.toLowerCase().replace(/ /g, '_').replace(/-/g, '_') + '.png';
    document.getElementById('result-main-img').src = `assets/${mainImgName}`;
    document.getElementById('result-main-img').alt = resultCharacter;

    // Gráfico de torta con los 3 principales
    const ctx = document.getElementById('result-chart').getContext('2d');
    if (window.resultChart) window.resultChart.destroy(); // Borra gráfico anterior si existe
    window.resultChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: top3.map(t => t.name),
            datasets: [{
                data: top3.map(t => Math.round((t.value / totalPoints) * 100)),
                backgroundColor: [
                    '#a259f7', '#6a11cb', '#ffe066'
                ],
                borderWidth: 2
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                title: {
                    display: false // <--- Desactiva el título interno
                }
            },
            cutout: '65%',
            responsive: false
        }
    });

    // Muestra los nombres y porcentajes de los otros dos personajes
    let labelsHtml = '';
    for (let i = 1; i < top3.length; i++) {
        labelsHtml += `<div style="font-size:15px;color:#6a11cb;font-weight:600;margin-bottom:6px;">
            ${i+1}. ${top3[i].name}: ${Math.round((top3[i].value / totalPoints) * 100)}%
        </div>`;
    }
    document.getElementById('top3-labels').innerHTML = labelsHtml;

    let imagesHtml = '';
    for (let i = 1; i < top3.length; i++) {
        // Convierte el nombre a minúsculas y reemplaza espacios por guiones bajos
        const imgName = top3[i].name.toLowerCase().replace(/ /g, '_').replace(/-/g, '_') + '.png';
        imagesHtml += `
            <div style="display:inline-block;margin:0 10px;text-align:center;">
                <img src="assets/${imgName}" alt="${top3[i].name}" style="width:54px;height:54px;object-fit:contain;border-radius:12px;border:2px solid #a259f7;background:#fff;box-shadow:0 2px 8px #a259f7a0;">
                <div style="font-size:13px;color:#6a11cb;font-weight:600;margin-top:4px;">${top3[i].name}</div>
            </div>
        `;
    }
    document.getElementById('top3-labels').innerHTML += `<div style="margin-top:10px;">${imagesHtml}</div>`;
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(0);
    document.getElementById('result-container').classList.add('hidden'); // Esto lo oculta al cargar
});

const characterDescriptions = {
    "Hello Kitty": "Hello Kitty es una figura emblemática de amabilidad y optimismo. Siempre está dispuesta a ayudar a los demás, lo que la convierte en una amiga leal y confiable. Su personalidad amigable la hace popular entre todos, y su capacidad para escuchar y ofrecer apoyo la convierte en una confidente ideal.",
    "My Melody": "My Melody es una conejita dulce y amable, aunque un poco tímida. Siempre busca hacer felices a los demás y es conocida por su gran corazón. Es una amiga cariñosa y comprensiva, que a menudo organiza actividades para alegrar a sus amigos.",
    "Cinnamoroll": "Cinnamoroll es un perrito juguetón y amigable que siempre busca hacer nuevos amigos. Su naturaleza alegre y su deseo de ayudar lo convierten en un compañero encantador. Es muy sociable y disfruta de la compañía de otros, organizando juegos y actividades divertidas.",
    "Chococat": "Chococat es un gato curioso e inteligente, siempre ansioso por aprender y compartir su conocimiento. Su personalidad inquisitiva lo lleva a hacer preguntas y a investigar diversos temas, lo que lo convierte en un buen amigo y compañero de estudio.",
    "Tuxedo Sam": "Tuxedo Sam es un pingüino amigable y un poco torpe que disfruta de la buena comida y la diversión. Su carácter jovial lo hace popular entre sus amigos, aunque a veces su torpeza puede causar situaciones cómicas.",
    "Pochacco": "Pochacco es un perro activo y divertido, amante de los deportes. Su energía contagiosa y su entusiasmo por la actividad física lo convierten en un amigo ideal para aquellos que disfrutan de un estilo de vida activo.",
    "Kuromi": "Kuromi es traviesa y rebelde, pero también tiene un gran corazón. Su personalidad fuerte y su estilo único la hacen destacar entre sus amigos. Aunque a menudo actúa como una antagonista, es leal y siempre está dispuesta a ayudar a sus amigos cuando más lo necesitan.",
    "Pompompurin": "Pompompurin es un golden retriever relajado y amigable que disfruta de la compañía de sus amigos. Su naturaleza tranquila y su amor por la diversión lo convierten en un compañero ideal para pasar el tiempo.",
    "Keroppi": "Keroppi es una rana alegre y enérgica que siempre busca aventuras. Su espíritu aventurero y su entusiasmo lo hacen popular entre sus amigos, y siempre está dispuesto a explorar nuevos lugares.",
    "Badtz-Maru": "Badtz-Maru es un pingüino rebelde y sarcástico, pero tiene un lado dulce que solo sus amigos más cercanos conocen. Su actitud desafiante y su sentido del humor lo convierten en un amigo divertido, aunque a veces puede ser un poco problemático."
};