// Variables globales
let products = []; // Lista completa de productos
let filteredProducts = []; // Lista de productos filtrados
let currentPage = 1; // Página actual
const productsPerPage = 12; // Número de productos por página

// Elementos del DOM
const priceMinInput = document.getElementById("price-min");
const priceMaxInput = document.getElementById("price-max");
const ratingMinInput = document.getElementById("rating-min");
const ratingMaxInput = document.getElementById("rating-max");
const categorySelect = document.getElementById("category-select");
const applyFiltersButton = document.getElementById("apply-filters");
const productsContainer = document.getElementById("products-container");
const paginationContainer = document.getElementById("pagination-controls");

// Cargar productos inicialmente desde JSON
fetch("productos.json")
  .then((response) => response.json())
  .then((data) => {
    products = data; // Guardar todos los productos
    filteredProducts = products; // Inicialmente, todos los productos están filtrados
    renderProducts(); // Renderizar la primera página
  })
  .catch((error) => console.error("Error al cargar los productos:", error));

// Escuchar clic en el botón de aplicar filtros
applyFiltersButton.addEventListener("click", () => {
  currentPage = 1; // Reinicia la página actual
  applyFilters(); // Aplica los filtros
  renderProducts(); // Renderiza productos filtrados
});

// Función para aplicar filtros
function applyFilters() {
  const priceMin = parseFloat(priceMinInput.value) || 0;
  const priceMax = parseFloat(priceMaxInput.value) || Infinity;
  const ratingMin = parseFloat(ratingMinInput.value) || 0;
  const ratingMax = parseFloat(ratingMaxInput.value) || 5;
  const selectedCategory = categorySelect.value;

  // Filtrar productos según los criterios
  filteredProducts = products.filter((product) => {
    return (
      product.price >= priceMin &&
      product.price <= priceMax &&
      product.rating >= ratingMin &&
      product.rating <= ratingMax &&
      (selectedCategory === "all" || product.category === selectedCategory)
    );
  });

  if (filteredProducts.length === 0) {
    console.warn("No se encontraron productos con los filtros aplicados.");
  }
}

// Función para obtener productos paginados
function getPaginatedProducts() {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  return filteredProducts.slice(startIndex, endIndex);
}

// Función para renderizar productos
function renderProducts() {
  productsContainer.innerHTML = ""; // Limpiar el contenedor

  const paginatedProducts = getPaginatedProducts();

  if (paginatedProducts.length === 0) {
    productsContainer.innerHTML = "<p>No se encontraron productos.</p>";
    paginationContainer.innerHTML = ""; // Elimina controles de paginación
    return;
  }

  paginatedProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image_url}" alt="${product.title}" style="max-width: 100%; height: auto;">
      <h3 class="product-title">${product.title}</h3>
      <p>Precio: ${product.price ? "$" + product.price : "No disponible"}</p>
      <p>Valoración: ${product.rating ? "⭐" + product.rating : "No disponible"}</p>
      <a href="detalle.html?id=${product.id}" class="view-details-button">Ver detalles</a>
      <a href="${product.link}" target="_blank" class="view-button">Ver en Amazon</a>
    `;

    productsContainer.appendChild(productCard);
  });

  renderPaginationControls();
}

// Función para crear controles de paginación
function renderPaginationControls() {
  paginationContainer.innerHTML = ""; // Limpiar controles anteriores

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.className = i === currentPage ? "active-page" : "";
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderProducts(); // Renderiza productos de la nueva página
    });

    paginationContainer.appendChild(pageButton);
  }
}

// Referencias del DOM para modales
const loginButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");
const closeLoginModal = document.getElementById("closeLoginModal");
const registerModal = document.getElementById("registerModal");
const closeRegisterModal = document.getElementById("closeRegisterModal");
const registerLink = document.getElementById("registerLink");

// Mostrar el modal de inicio de sesión al hacer clic en el botón ¡Hola!
loginButton.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

// Cerrar el modal de inicio de sesión
closeLoginModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Mostrar el modal de registro al hacer clic en el enlace "Regístrate aquí"
registerLink.addEventListener("click", (e) => {
  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
  loginModal.style.display = "none"; // Cierra el modal de inicio de sesión
  registerModal.style.display = "flex"; // Abre el modal de registro
});

// Cerrar el modal de registro
closeRegisterModal.addEventListener("click", () => {
  registerModal.style.display = "none";
});

// Cerrar los modales si se hace clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === registerModal) registerModal.style.display = "none";
});
