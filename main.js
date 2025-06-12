const questions = [
    {
        question: "¿Cuál es tu color favorito?",
        options: [
            { answer: "Rojo", color: "#ff0000", points: { "Hello Kitty": 2, "My Melody": 1, "Cinnamoroll": 0 } },
            { answer: "Rosado", color: "#ffb6c1", points: { "Hello Kitty": 2, "My Melody": 3, "Cinnamoroll": 1 } },
            { answer: "Azul", color: "#2196f3", points: { "Cinnamoroll": 2, "Pompompurin": 1, "Keroppi": 0 } },
            { answer: "Verde", color: "#4caf50", points: { "Keroppi": 2, "Pompompurin": 1, "Badtz-Maru": 0 } },
            { answer: "Negro", color: "#222", points: { "Badtz-Maru": 3, "Keroppi": 1, "Hello Kitty": 0 } },
            { answer: "Blanco", color: "#fff", points: { "Cinnamoroll": 2, "Hello Kitty": 2, "My Melody": 1 } },
            { answer: "Amarillo", color: "#ffe066", points: { "Pompompurin": 3, "Keroppi": 1, "Cinnamoroll": 0 } },
            { answer: "Morado", color: "#a259f7", points: { "Badtz-Maru": 2, "My Melody": 1, "Hello Kitty": 0 } }
        ]
    },
    {
        question: "¿Qué tipo de comida prefieres?",
        options: [
            { answer: "Dulces", img: "dulces.png", points: { "My Melody": 2, "Hello Kitty": 1, "Cinnamoroll": 0 } },
            { answer: "Salado", img: "salado.png", points: { "Pompompurin": 2, "Badtz-Maru": 1, "Keroppi": 0 } },
            { answer: "Frutas", img: "frutas.png", points: { "Cinnamoroll": 2, "My Melody": 1, "Hello Kitty": 0 } },
            { answer: "Comida rápida", img: "comida_rapida.png", points: { "Badtz-Maru": 2, "Pompompurin": 1, "Keroppi": 0 } },
            { answer: "Helado", img: "helado.png", points: { "Cinnamoroll": 2, "My Melody": 1, "Hello Kitty": 1 } },
            { answer: "Sushi", img: "sushi.png", points: { "Keroppi": 2, "Badtz-Maru": 1, "Pompompurin": 0 } },
            { answer: "Pastel", img: "pastel.png", points: { "Hello Kitty": 2, "My Melody": 2, "Cinnamoroll": 1 } },
            { answer: "Pan", img: "pan.png", points: { "Pompompurin": 2, "Cinnamoroll": 1, "Hello Kitty": 0 } },
            { answer: "Pizza", img: "pizza.png", points: { "Badtz-Maru": 2, "Keroppi": 1, "Pompompurin": 1 } }
        ]
    },
    {
        question: "¿Cuál es tu deporte favorito?",
        options: [
            { answer: "Fútbol", img: "futbol.png", points: { "Keroppi": 2, "Badtz-Maru": 1 } },
            { answer: "Básquet", img: "basket.png", points: { "Badtz-Maru": 2, "Pompompurin": 1 } },
            { answer: "Natación", img: "natacion.png", points: { "Cinnamoroll": 2, "Keroppi": 1 } },
            { answer: "Béisbol", img: "beisbol.png", points: { "Hello Kitty": 2, "Pompompurin": 1 } },
            { answer: "Correr", img: "correr.png", points: { "My Melody": 2, "Cinnamoroll": 1 } },
            { answer: "Bailar", img: "bailar.png", points: { "My Melody": 2, "Hello Kitty": 1 } },
            { answer: "Yoga", img: "yoga.png", points: { "Cinnamoroll": 2, "My Melody": 1 } },
            { answer: "Ninguno", img: "ninguno.png", points: { "Badtz-Maru": 2 } }
        ]
    },
    {
        question: "¿Cuál es tu pasatiempo favorito?",
        options: [
            { answer: "Leer", img: "leer.png", points: { "Hello Kitty": 2, "Cinnamoroll": 1 } },
            { answer: "Escuchar música", img: "musica.png", points: { "My Melody": 2, "Cinnamoroll": 1 } },
            { answer: "Cocinar", img: "cocinar.png", points: { "Pompompurin": 2, "Hello Kitty": 1 } },
            { answer: "Dibujar", img: "dibujar.png", points: { "My Melody": 2, "Hello Kitty": 1 } },
            { answer: "Jugar videojuegos", img: "videojuegos.png", points: { "Badtz-Maru": 2, "Keroppi": 1 } },
            { answer: "Salir con amigos", img: "amigos.png", points: { "Keroppi": 2, "Pompompurin": 1 } },
            { answer: "Ver películas", img: "peliculas.png", points: { "Cinnamoroll": 2, "My Melody": 1 } },
            { answer: "Dormir", img: "dormir.png", points: { "Pompompurin": 2, "Badtz-Maru": 1 } }
        ]
    }
];

let scores = {
    "Hello Kitty": 0,
    "My Melody": 0,
    "Cinnamoroll": 0,
    "Pompompurin": 0,
    "Keroppi": 0,
    "Badtz-Maru": 0
};
let currentQuestion = 0;
let answers = []; // Guarda la opción seleccionada por pregunta

function displayQuestion(index) {
    const question = questions[index];
    document.getElementById('question').textContent = question.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(i);

        // Para colores
        if (option.color) {
            optionDiv.style.backgroundColor = option.color;
            optionDiv.title = option.answer;
        }
        // Para comidas y demás
        if (option.img) {
            const img = document.createElement('img');
            img.src = `assets/${option.img}`;
            img.alt = option.answer;
            optionDiv.appendChild(img);
        }
        const label = document.createElement('span');
        label.textContent = option.answer;
        optionDiv.appendChild(label);

        // Marca la opción seleccionada
        if (answers[index] === i) {
            optionDiv.style.outline = '3px solid #6a11cb';
            optionDiv.style.boxShadow = '0 0 0 4px #e0c3fc';
        }

        optionsContainer.appendChild(optionDiv);
    });

    // Botones
    document.getElementById('prev-button').style.display = index === 0 ? 'none' : 'inline-block';
    document.getElementById('next-button').textContent = (index === questions.length - 1) ? 'Ver resultado' : 'Siguiente';
}

function selectOption(optionIndex) {
    answers[currentQuestion] = optionIndex;
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    } else {
        calculateScores();
        showResult();
    }
}

function calculateScores() {
    // Reinicia los scores
    for (let key in scores) scores[key] = 0;
    answers.forEach((optionIndex, qIndex) => {
        if (optionIndex !== undefined) {
            const points = questions[qIndex].options[optionIndex].points;
            for (const character in points) {
                scores[character] += points[character];
            }
        }
    });
}

document.getElementById('next-button').onclick = function() {
    if (answers[currentQuestion] === undefined) {
        alert('Por favor selecciona una opción antes de continuar.');
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

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');

    const maxScore = Math.max(...Object.values(scores));
    const resultCharacter = Object.keys(scores).find(character => scores[character] === maxScore);

    document.getElementById('result-name').textContent = resultCharacter;
    document.getElementById('result-description').textContent = "Descripción del personaje aquí.";
    document.getElementById('result-percentage').textContent = "Porcentaje aquí.";
    // document.getElementById('result-image').src = "ruta/a/imagen.png";
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(0);
    document.getElementById('result-container').classList.add('hidden');
});