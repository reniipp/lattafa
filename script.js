//FORMULARIO
document.getElementById("inscripcionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Oculta el formulario y muestra el mensaje de enviado
    document.getElementById("inscripcionForm").style.display = "none";
    document.getElementById("mensaje").classList.remove("hidden");
});




//ANIMACIÓN DESCUBRÍ
document.addEventListener("DOMContentLoaded", function () {
const descubriText = document.querySelector("#descubri");

function scaleOnScroll() {
if (!descubriText) return;

const rect = descubriText.getBoundingClientRect();
const windowHeight = window.innerHeight;

if (rect.top < windowHeight * 0.85) { // Se activa antes
    descubriText.classList.add("grow");
} else {
    descubriText.classList.remove("grow");
}
}
// Llamamos la función al cargar y en cada scroll
window.addEventListener("scroll", scaleOnScroll);
scaleOnScroll();
});

