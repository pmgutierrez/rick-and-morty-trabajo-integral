// Funcionalidad del Menú de Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    // Añade o quita la clase 'active' al menú de navegación
    navMenu.classList.toggle('active');
    // Esto es opcional, pero puedes añadir una clase al botón para cambiar su apariencia si quieres (e.g. convertirlo en una 'X')
    hamburger.classList.toggle('active'); 
});

// Opcional: Cerrar el menú al hacer clic en un enlace (scroll a la sección)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});


// API
//Contenedor de html para renderizar contenido
const $contenedor = document.getElementById("personajes");
const URL_API = "https://rickandmortyapi.com/api/character"

// ... (El resto de tu código de fetch y renderizado se mantiene igual)
// ... (Tu código actual de fetch() sigue aquí)
// ...

fetch(URL_API)
.then((response) => {
    return response.json();
})
.then((data) => {
    const personajes = data.results;
    
    for (let i = 0; i < personajes.length; i++) {
        //desctructuring
        const { name, gender, species, status, image } = personajes[i];

        $contenedor.innerHTML += `<div class="cont-personaje">
        <img
          src="${image}"
          alt="imagen de ${name}"
        />
        <h3>${name}</h3>
        <p>Estado:${status}</p>
        <p>Género:${gender}</p>
        <p>Especie:${species}</p>
      </div>`;
    }
})
