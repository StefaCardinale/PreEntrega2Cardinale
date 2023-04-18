let productos = [  {    
  nombre: "Camiseta",    
  precio: 50,    
  cantidad: 1000  
},  
{    
  nombre: "Pantalón",    
  precio: 80,    
  cantidad: 800  
},  
{    
  nombre: "Accesorio",    
  precio: 30,    
  cantidad: 1500  
}];
let carrito = [];
let totalCompra = 0;
let seguirComprando = true;

function obtenerIndiceProducto(nombre) {
  return productos.findIndex(function (producto) {
    return producto.nombre === nombre;
  });
}

function obtenerPrecio(nombre) {
  let indice = obtenerIndiceProducto(nombre);
  if (indice >= 0) {
    return productos[indice].precio;
  }
  return 0;
}

function comprarProducto() {
  let nombre = prompt("¿Qué producto deseas comprar? (Camiseta, Pantalón o Accesorio)").toLowerCase();
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

  seguirComprando = confirm("¿Desea seguir comprando?");
}

alert("Bienvenido al simulador de compras!");
while (seguirComprando) {
  let accion = prompt("¿Qué deseas hacer? (Comprar/Salir)");

  switch (accion) {
    case "Comprar":
      comprarProducto();
      break;
    case "Salir":
      alert("Gracias por utilizar el simulador!");
      seguirComprando = false;
      break;
    default:
      alert("Lo siento, la acción es inválida. Intente de nuevo.");
      break;
  }

  if (!seguirComprando) {
    let totalCompra = carrito.reduce((total, producto) => total + producto.cantidad * obtenerPrecio(producto.nombre), 0);
    alert("Gracias! Tu monto total es de: " + totalCompra + ".");
  }
}
