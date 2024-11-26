// Elementos de la interfaz relacionados con el selector de idioma
const languageButton = document.getElementById('language-button');
const languageOptions = document.querySelectorAll('.language-option');
const languageSelector = document.querySelector('.language-selector');
const languageMenu = languageSelector.querySelector('.language-options');

// Función para cambiar dinámicamente el contenido según el idioma seleccionado
// Función para cambiar dinámicamente el contenido según el idioma seleccionado
function switchLanguage(langCode) {
    const translations = {
        es: {
            description: "Soy un joven profesional, estudiante y apasionado por la programación y el desarrollo de soluciones tecnológicas. En este portafolio vas a poder conocerme mejor, ver más sobre mi trabajo, mi progreso y mi proyección a futuro en esta gran industria.",
            subtitle: "Desarrollador de Software Jr.",
            home: "Inicio",
            about: "Acerca de",
            projects: "Proyectos",
            contact: "Contacto"
        },
        en: {
            description: "I'm a young professional, a student and a passionate about programming and the development of tech solutions. In this portfolio, you'll be able to get to know me better, see more about my work, my progress and my future projection in this great industry.",
            subtitle: "Software Developer Jr.",
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
    };

    const elements = {
        description: document.querySelector('.home-description'),
        subtitle: document.querySelector('.home-subtitle'),
        home: document.getElementById('home-link'),
        about: document.getElementById('about-link'),
        projects: document.getElementById('projects-link'),
        contact: document.getElementById('contact-link')
    };

    if (translations[langCode]) {
        elements.description.textContent = translations[langCode].description;
        elements.subtitle.textContent = translations[langCode].subtitle;
        elements.home.textContent = translations[langCode].home;
        elements.about.textContent = translations[langCode].about;
        elements.projects.textContent = translations[langCode].projects;
        elements.contact.textContent = translations[langCode].contact;
    }
}

// Evento para seleccionar un idioma
languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.innerHTML;
        const langCode = option.dataset.lang;

        // Actualiza el contenido del botón con el idioma seleccionado
        languageButton.innerHTML = `${selectedLang} <span class="arrow">▼</span>`;

        // Cambia el idioma de la página
        switchLanguage(langCode);

        // Guarda el idioma en localStorage
        localStorage.setItem('selectedLanguage', langCode);

        // Oculta el menú de opciones
        languageMenu.classList.remove('visible');
    });
});


// Mostrar el menú de opciones al hacer clic en el botón
languageButton.addEventListener('click', (event) => {
    event.stopPropagation();
    languageMenu.classList.toggle('visible');
});

// Ocultar el menú si se hace clic fuera del selector de idioma
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
// Referencias a los elementos en el DOM
const themeToggleButton = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('icon-sun');
const moonIcon = document.getElementById('icon-moon');

// Función para actualizar el tema
function updateTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Guarda la preferencia en el localStorage
}

// Cargar la preferencia de tema guardada (si existe)
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    updateTheme(savedTheme); // Si hay preferencia guardada, la carga
});

// Evento para cambiar entre los temas
themeToggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateTheme(newTheme);
});
