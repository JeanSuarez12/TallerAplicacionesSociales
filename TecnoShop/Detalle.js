// Obtener elementos del DOM
const productDetail = document.getElementById("product-detail");
const relatedProductsContainer = document.getElementById("related-products-container");

// Obtener parámetros de la URL para identificar el producto
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Función para cargar el detalle del producto
function loadProductDetail() {
  fetch("productos.json")
    .then((response) => {
      if (!response.ok) throw new Error(`Error al cargar JSON: ${response.statusText}`);
      return response.json();
    })
    .then((products) => {
      const product = products.find((p) => p.id === productId);

      if (!product) {
        productDetail.innerHTML = "<p>Producto no encontrado.</p>";
        return;
      }

      // Mostrar el detalle del producto
      productDetail.innerHTML = `
        <img src="${product.image_url}" alt="${product.title}" style="max-width: 100%; height: auto;">
        <h3 class="product-title">${product.title}</h3>
        <p>Precio: ${product.price ? "$" + product.price : "No disponible"}</p>
        <p>Valoración: ${product.rating ?"⭐"+ product.rating : "No disponible"}</p>
        <a href="${product.link}" target="_blank" class="view-button">Ver en Amazon</a>
      `;

      // Mostrar productos relacionados
      const relatedProducts = products.filter((p) => p.category === product.category && p.id !== productId);
      displayRelatedProducts(relatedProducts);
    })
    .catch((error) => {
      console.error("Error al cargar el detalle del producto:", error);
      productDetail.innerHTML = "<p>Error al cargar el producto.</p>";
    });
}

// Función para mostrar productos relacionados
function displayRelatedProducts(products) {
  relatedProductsContainer.innerHTML = products
    .map(
      (product) => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Precio: $${product.price}</p>
        <a href="detalle.html?id=${product.id}">Ver Detalle</a>
      </div>
    `
    )
    .join("");
}

// Cargar el detalle del producto al cargar la página
loadProductDetail();
