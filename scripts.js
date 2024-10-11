function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    
    errorMessage.textContent = ""; // Limpiar cualquier mensaje de error previo

    // Validar el nombre
    if (name.trim() === "") {
        errorMessage.textContent = "Por favor, ingresa tu nombre.";
        return false;
    }

    // Validar el correo
    if (email.trim() === "") {
        errorMessage.textContent = "Por favor, ingresa tu correo electrónico.";
        return false;
    }

    // Validar la contraseña
    if (password.length < 8) {
        errorMessage.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return false;
    }

    alert("Formulario enviado correctamente");
    return true; // Permitir el envío del formulario
}
