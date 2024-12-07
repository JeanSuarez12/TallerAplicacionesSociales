    document.getElementById("login-button").addEventListener("click", function () {
        // Aquí puedes añadir validaciones, si es necesario
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) { // Si ambos campos tienen contenido
            window.location.href = "InterfazAdministracion.html";
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
