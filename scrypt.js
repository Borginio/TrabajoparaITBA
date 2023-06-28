function mostrarFormulario() {
    let popup = document.getElementById("popupFormulario");
    popup.style.display = "block";
}
  
function cerrarFormulario() {
    let popup = document.getElementById("popupFormulario");
    popup.style.display = "none";
}
  
function validarFormulario() {
    let nombreInput = document.getElementsByName("nombre")[0];
    let apellidoInput = document.getElementsByName("apellido")[0];
    let emailInput = document.getElementById("email");
    let fechaNacimientoInput = document.getElementById("fechaNacimiento");
    let generoInput = document.getElementById("genero");
    let paisInput = document.getElementById("pais");
    let nombre = nombreInput.value.trim();
    let apellido = apellidoInput.value.trim();
    let email = emailInput.value.trim();
    let fechaNacimiento = fechaNacimientoInput.value;
    let genero = generoInput.value;
    let pais = paisInput.value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nombre === "" || apellido === "") {
      alert("Por favor, ingresa tu nombre y apellido.");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
    }
    if (fechaNacimiento === "") {
      alert("Por favor, ingresa tu fecha de nacimiento.");
      return false;
    }
    if (genero === "") {
      alert("Por favor, selecciona tu género.");
      return false;
    }
    if (pais === "") {
      alert("Por favor, selecciona tu país.");
      return false;
    }
  
    return true;
} 
function enviarFormulario() {
    if (validarFormulario()) {
      console.log("Formulario enviado correctamente");
      cerrarFormulario();
    }
}  

// funcionmenu
let menuBtn = document.getElementById("menuBtn");
let menuItems = document.getElementById("menuItems");

menuBtn.addEventListener("click", function() {
  
  menuItems.classList.toggle("active");
});

// funcioncontador
let nextUpdateDate = new Date('2023-07-04');
function updateCountdown() {
  let countdownElement = document.getElementById('days');
  let currentDate = new Date();

  let timeRemaining = nextUpdateDate - currentDate;

  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  countdownElement.textContent = days;

  setTimeout(updateCountdown, 1000);
}
updateCountdown();

