// Elementos de la interfaz relacionados con el selector de idioma
const languageButton = document.getElementById('language-button');
const languageOptions = document.querySelectorAll('.language-option');
const languageSelector = document.querySelector('.language-selector');
const languageMenu = languageSelector.querySelector('.language-options');

// Evento para seleccionar un idioma
languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Extrae el idioma seleccionado
        const selectedLang = option.innerHTML;

        // Actualiza el contenido del botón con el idioma seleccionado
        languageButton.innerHTML = `${selectedLang} <span class="arrow">▼</span>`;

        // Cambia dinámicamente el contenido si fuera necesario
        const langCode = option.dataset.lang;
        switchLanguage(langCode);

        // Guarda el idioma seleccionado en localStorage
        localStorage.setItem('selectedLanguage', langCode);

        // Oculta las opciones del menú al seleccionar un idioma
        languageMenu.classList.remove('visible');
    });
});

// Función para cambiar dinámicamente el contenido según el idioma seleccionado
function switchLanguage(langCode) {
    // Cambia el contenido de la página según el idioma seleccionado
    const elements = {
        description: document.querySelector('.home-description'),
        subtitle: document.querySelector('.home-subtitle'),
    };

    const translations = {
        es: {
            description: "Una breve descripción sobre ti o el tema de la página.",
            subtitle: "Ingeniero de Software Jr.",
        },
        en: {
            description: "A brief description about yourself or the page's theme.",
            subtitle: "Software Engineer Jr.",
        },
    };

    if (translations[langCode]) {
        elements.description.textContent = translations[langCode].description;
        elements.subtitle.textContent = translations[langCode].subtitle;
    }
}

// Mostrar las opciones al hacer clic en el botón
languageButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que se cierre el menú al hacer clic en el botón
    languageMenu.classList.toggle('visible');
});

// Ocultar el menú cuando se hace clic fuera del selector
document.addEventListener('click', (event) => {
    if (!languageSelector.contains(event.target)) {
        languageMenu.classList.remove('visible');
    }
});

// Configurar el idioma guardado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    const selectedOption = document.querySelector(`.language-option[data-lang="${savedLang}"]`);
    if (selectedOption) {
        selectedOption.click(); // Simula un clic en el idioma guardado
    }
});
const darkModeSwitch = document.getElementById('dark-mode-switch');
const circle = document.querySelector('.switch-label .circle');

// Comprobar si el tema oscuro está activado al cargar la página
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeSwitch.checked = true;
    circle.style.left = 'calc(100% - 20px)'; // Mueve el círculo a la derecha
}

// Cambiar el tema al cambiar el estado del switch
const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;

// Asegurarse de que el modo oscuro esté guardado en localStorage y se aplique al cargar la página
if (localStorage.getItem('darkMode') === 'enabled') {
    toggleSwitch.classList.remove('day');
    toggleSwitch.classList.add('night');
    body.style.backgroundColor = '#2C3E50';
}

toggleSwitch.addEventListener('click', function() {
    if (toggleSwitch.classList.contains('day')) {
        toggleSwitch.classList.remove('day');
        toggleSwitch.classList.add('night');
        body.style.backgroundColor = '#2C3E50';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggleSwitch.classList.remove('night');
        toggleSwitch.classList.add('day');
        body.style.backgroundColor = '#f0f8ff';
        localStorage.setItem('darkMode', 'disabled');
    }
});
