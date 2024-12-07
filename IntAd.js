// Menú desplegable
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const submenu = this.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});

// Redirección al hacer clic en "Cerrar Sesión"
document.querySelector('.logout-btn').addEventListener('click', function () {
    alert("Has cerrado sesión."); // Mensaje de confirmación
    window.location.href = 'LoginAdm.html';
});

// Mostrar y ocultar formularios del submenú
const submenuLinks = document.querySelectorAll('.submenu a');
const forms = document.querySelectorAll('.form-container');
submenuLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Ocultar todos los formularios
        forms.forEach(form => form.classList.remove('active'));
        // Mostrar el formulario correspondiente
        const targetForm = document.getElementById(this.dataset.target);
        if (targetForm) {
            targetForm.classList.add('active');
        }
    });
});

// Mostrar y ocultar el formulario de "Agregar Producto"
const agregarProductoLink = document.querySelector('a[data-target="form-agregar-producto"]');
if (agregarProductoLink) {
    agregarProductoLink.addEventListener('click', function (e) {
        e.preventDefault();
        // Ocultar todos los formularios
        forms.forEach(form => form.classList.remove('active'));
        // Mostrar el formulario de "Agregar Producto"
        const agregarProductoForm = document.getElementById('form-agregar-producto');
        if (agregarProductoForm) {
            agregarProductoForm.classList.add('active');
        }
    });
}

// Mostrar y ocultar el formulario de "Editar Producto"
const editarProductoLink = document.querySelector('a[data-target="form-editar-producto"]');
if (editarProductoLink) {
    editarProductoLink.addEventListener('click', function (e) {
        e.preventDefault();
        // Ocultar todos los formularios
        forms.forEach(form => form.classList.remove('active'));
        // Mostrar el formulario de "Editar Producto"
        const editarProductoForm = document.getElementById('form-editar-producto');
        if (editarProductoForm) {
            editarProductoForm.classList.add('active');
        }
    });
}

// Mostrar y ocultar el formulario de "Editar Producto"
const SistemaRecomendacionProductoLink = document.querySelector('a[data-target="form-recomendaciones"]');
if (SistemaRecomendacionProductoLink) {
    SistemaRecomendacionProductoLink.addEventListener('click', function (e) {
        e.preventDefault();
        // Ocultar todos los formularios
        forms.forEach(form => form.classList.remove('active'));
        // Mostrar el formulario de "Editar Producto"
        const SistemaRecomendacionProducto = document.getElementById('form-recomendaciones');
        if (SistemaRecomendacionProducto) {
            SistemaRecomendacionProducto.classList.add('active');
        }
    });
}

// Mostrar y ocultar el formulario de "Editar Producto"
const ConfiguracionProductoLink = document.querySelector('a[data-target="form-configuracion"]');
if (ConfiguracionProductoLink) {
    ConfiguracionProductoLink.addEventListener('click', function (e) {
        e.preventDefault();
        // Ocultar todos los formularios
        forms.forEach(form => form.classList.remove('active'));
        // Mostrar el formulario de "Editar Producto"
        const ConfiguracionProducto = document.getElementById('form-configuracion');
        if (ConfiguracionProducto) {
            ConfiguracionProducto.classList.add('active');
        }
    });
}