//FORMULARIO
document.getElementById("inscripcionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Oculta el formulario y muestra el mensaje de enviado
    document.getElementById("inscripcionForm").style.display = "none";
    document.getElementById("mensaje").classList.remove("hidden");
});





