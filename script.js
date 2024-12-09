// script.js
document.getElementById("open-button").addEventListener("click", function() {
  const content = document.getElementById("content");
  const button = document.getElementById("open-button");

  // Mostrar el contenido
  content.classList.remove("hidden");
  setTimeout(() => {
      content.style.opacity = "1";
  }, 100);

  // Ocultar el botón
  button.style.display = "none";
});
