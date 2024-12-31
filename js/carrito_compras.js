
const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();
    const productoEnCarrito = carrito.find(item => item.id === producto.id);
    if (productoEnCarrito) { // si el producto ya tiene su espacio en el carrito
        productoEnCarrito.cantidad++; // incremento la cantidad
    } else { 
        carrito.push({...producto, cantidad: 1}); // agrego un espacio para el producto
    }
    localStorage.setItem('carrito', JSON.stringify(carrito)); // guardo el carrito en el localStorage
}

const obtenerCarrito = () => {
    const carritoStorage = localStorage.getItem('carrito');
    if (carritoStorage) {
        carrito = JSON.parse(carritoStorage);
    }
    return carrito;
}

const eliminarDelCarrito = (id) => {
    const indice = carrito.findIndex(item => item.id === id);
    if (indice >= 0) {
        carrito.splice(indice, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}

const vaciarCarrito = () => {
  carrito = [];
  localStorage.removeItem('carrito');
}
