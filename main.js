// Definir variables
let productos = [  {    
  nombre: "camiseta",    
  precio: 50,    
  cantidad: 1000  
},  
{    
  nombre: "pantalón",    
  precio: 80,    
  cantidad: 800  
},  
{    
  nombre: "accesorios",    
  precio: 30,    
  cantidad: 1500  
}];
let carrito = [];
let totalCompra = 0;
let seguirComprando = true;

// Función para obtener el índice de un producto en el array
function obtenerIndiceProducto(nombre) {
  return productos.findIndex(function (producto) {
    return producto.nombre === nombre;
  });
}

// Función para obtener el precio de un producto
function obtenerPrecio(nombre) {
  let indice = obtenerIndiceProducto(nombre);
  if (indice >= 0) {
    return productos[indice].precio;
  }
  return 0;
}

// Función para comprar un producto
function comprarProducto() {
  let nombre = prompt("¿Qué producto deseas comprar? (camiseta, pantalón o accesorios)").toLowerCase();
  let cantidad = parseFloat(prompt("¿Cuántos deseas comprar?"));

  let indice = obtenerIndiceProducto(nombre);
  if (indice < 0) {
    alert("Lo siento, el producto es inválido.");
    return;
  }

  let cantidadDisponible = productos[indice].cantidad;
  if (cantidad > 0 && cantidad <= cantidadDisponible) {
    productos[indice].cantidad -= cantidad;
    carrito.push({nombre: nombre, cantidad: cantidad});
    alert("Has comprado " + cantidad + " " + nombre + "s.");
    totalCompra += cantidad * obtenerPrecio(nombre);
  } else {
    alert("Lo siento, la cantidad es inválida.");
  }

  seguirComprando = confirm("¿Deseas seguir comprando?");
}

// Loop principal
alert("Bienvenido al simulador de compras.");
while (seguirComprando) {
  let accion = prompt("¿Qué deseas hacer? (comprar/salir)");

  switch (accion) {
    case "comprar":
      comprarProducto();
      break;
    case "salir":
      alert("Gracias por utilizar el simulador.");
      seguirComprando = false;
      break;
    default:
      alert("Lo siento, la acción es inválida. Intenta de nuevo.");
      break;
  }

  if (!seguirComprando) { // si se ha salido del loop, mostrar el total
    let totalCompra = carrito.reduce((total, producto) => total + producto.cantidad * obtenerPrecio(producto.nombre), 0);
    alert("Gracias! Tu monto total es de: " + totalCompra + ".");
  }
}
