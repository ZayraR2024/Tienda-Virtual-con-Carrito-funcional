let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    const productoEliminado = carrito.splice(index, 1)[0];
    total -= productoEliminado.precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');
    const contadorCarrito = document.getElementById('contador-carrito');

    listaCarrito.innerHTML = '';
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio}`;
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = () => eliminarDelCarrito(index);
        li.appendChild(eliminarBtn);
        listaCarrito.appendChild(li);
    });

    totalElemento.textContent = total;
    contadorCarrito.textContent = carrito.length;
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

function mostrarCarrito() {
    const carritoOverlay = document.getElementById('carrito-overlay');
    if (carritoOverlay.style.display === 'none') {
        carritoOverlay.style.display = 'block';
    } else {
        carritoOverlay.style.display = 'none';
    }
}
