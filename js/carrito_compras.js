
// Funcion que agrega un producto al carrito
// - Recibe el objeto producto (id, nombre, imagen, stock, precio)
// - Verifica si el producto ya esta en el carrito
// - Si esta, incrementa su cantidad
// - Si no esta, agrega el producto con cantidad 1
// - Guarda el carrito actualizado en el localStorage
// - Llama a la funcion actualizarCarritoUI para refrescar la UI
const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();
    const productoEnCarrito = carrito.find(item => item.id === producto.id);
    if (productoEnCarrito) { // si el producto ya tiene su espacio en el carrito
        productoEnCarrito.cantidad++; // incremento la cantidad
    } else { 
        carrito.push({...producto, cantidad: 1}); // agrego un espacio para el producto
    }
    localStorage.setItem('carrito', JSON.stringify(carrito)); // guardo el carrito en el localStorage
    actualizarCarritoUI();
    alert("Producto agregado al carrito");
}

// Funcion que devuelve el carrito actual desde el localStorage
const obtenerCarrito = () => {
    const carritoStorage = localStorage.getItem('carrito');
    return carritoStorage ? JSON.parse(carritoStorage) : [];
}

// Funcion que elimina un producto del carrito
// - Recibe el id del producto a eliminar
// - Busca el producto en el carrito
// - Si lo encuentra, lo elimina del carrito
// - Guarda el carrito actualizado en el localStorage
// - Llama a la funcion actualizarCarritoUI para refrescar la UI
const eliminarDelCarrito = (id) => {
    const carrito = obtenerCarrito();
    const indice = carrito.findIndex(item => item.id === id);
    if (indice >= 0) {
        carrito.splice(indice, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarritoUI();
    }
}

// Funcion que vacia el carrito
// - Elimina el item 'carrito' del localStorage
// - Llama a la funcion actualizarCarritoUI para refrescar la UI
const vaciarCarrito = () => {
    localStorage.removeItem('carrito');
    actualizarCarritoUI();
}

// Funcion que actualiza la UI del carrito
// - Crea un elemento <tr> para cada producto en el carrito
// - Agrega los elementos <tr> al elemento <tbody> del carrito
// - Agrega un evento click a cada boton "borrar" para eliminar el producto
// - Agrega un evento click al boton "vaciar" para vaciar el carrito
const actualizarCarritoUI = () => {
    const carrito = obtenerCarrito();
    const listaCarrito = document.querySelector('#lista-carrito tbody');
    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.imagen}" width="50"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td><a href="#" class="borrar-producto" data-id="${producto.id}">X</a></td>
        `;
        listaCarrito.appendChild(row);
    });
}

// darle funcionalidad al boton para vaciar el carrito
document.querySelector('#vaciar-carrito').addEventListener('click', () => {
    if(confirm("Seguro que desea vaciar el carrito?")){
        vaciarCarrito();
        alert("Carrito vaciado");
    }
});

// darle funcionalidad a las cruces individuales de los productos en el carrito.
document.querySelectorAll('.borrar-producto').forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        eliminarDelCarrito(parseInt(boton.getAttribute('data-id')));
    });
});

// simulación de compra
document.querySelector('#realizar-compra').addEventListener('click', () => {
    alert("Compra realizada con éxito");
    vaciarCarrito();

})

// Inicializar la UI del carrito al cargar la página
document.addEventListener('DOMContentLoaded', actualizarCarritoUI);

export { agregarAlCarrito };