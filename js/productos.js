function actualizarProductos() {
    fetch('/productosLista.json')
    .then(response => response.json())
    .then(data => {
        let productContent = document.querySelector('#lista-1 .product-content'); //Selecciona el elemento del DOM donde se mostrarán los productos.
            // Iteramos sobre cada producto y agregamos divs a la productContent
            for (let producto of data) {
                let productDiv = document.createElement('div'); //Crea un nuevo div para cada producto.
                productDiv.innerHTML = 
                `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="product-txt">
                        <h3>${producto.nombre}</h3>
                        <p class="cantidad">En Stock: ${producto.stock}</p>
                        <p class="precio">$${producto.precio}</p>
                        <a href="javascript:agregarAlCarrito(${JSON.stringify(producto)});" 
                            class="agregar-carrito btn-2">Agregar al carrito
                        </a>
                    </div>
                `;
                //Una vez que se crea el div con el contenido del producto, se agrega a la productContent utilizando el método appendChild del elemento productContent.
                productContent.appendChild(productDiv);
            }
    });
}

document.addEventListener('DOMContentLoaded', actualizarProductos);