document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar elementos
  const menuItems = document.querySelectorAll(".menu-item");
  const submenuItems = document.querySelectorAll(".submenu-item");
  const panels = document.querySelectorAll(".panel, .view");
  const submenus = document.querySelectorAll(".submenu");
  const logoutButton = document.getElementById("logout");

  // Función para ocultar todos los paneles
  const hideAllPanels = () => {
    panels.forEach(panel => panel.classList.add("hidden"));
  };

  // Función para manejar clics en los menús principales
  menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
      // Cerrar otros submenús
      submenus.forEach(submenu => {
        if (submenu.id !== `submenu-${menuItem.dataset.panel}`) {
          submenu.classList.add("hidden");
        }
      });

      // Abrir o cerrar el submenú correspondiente
      const submenu = document.getElementById(`submenu-${menuItem.dataset.panel}`);
      if (submenu) {
        submenu.classList.toggle("hidden");
      } else {
        hideAllPanels();
        document.getElementById(menuItem.dataset.panel).classList.remove("hidden");
      }
    });
  });

  // Función para manejar clics en los submenús
  submenuItems.forEach(submenuItem => {
    submenuItem.addEventListener("click", () => {
      hideAllPanels();
      document.getElementById(submenuItem.dataset.view).classList.remove("hidden");
    });
  });

  // Función para manejar el botón de cerrar sesión
  logoutButton.addEventListener("click", () => {
    alert("Sesión cerrada correctamente.");
    // Aquí puedes agregar redirección o lógica adicional para cerrar sesión
  });
});
