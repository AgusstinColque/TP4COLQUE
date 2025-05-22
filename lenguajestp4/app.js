const productos = [
  {
    nombre: "Motorola G6 Plus 64 Gb Índigo Oscuro",
    ram: "4 Gb",
    precio: "$39.999",
    stock: 10,
    imagen: "https://via.placeholder.com/100x150?text=G6+Plus"
  },
  {
    nombre: "Motorola G6 32 Gb Índigo Oscuro",
    ram: "3 Gb",
    precio: "$18.999",
    stock: 20,
    imagen: "https://via.placeholder.com/100x150?text=G6"
  },
  {
    nombre: "Motorola E6 Dual SIM 32 Gb Índigo",
    ram: "3 Gb",
    precio: "$12.999",
    stock: 1,
    imagen: "https://via.placeholder.com/100x150?text=E6"
  },
  {
    nombre: "Motorola One 64 Gb Negro",
    ram: "4 Gb",
    precio: "$23.999",
    stock: 0,
    imagen: "https://via.placeholder.com/100x150?text=One"
  },
  {
    nombre: "Motorola One Vision 128 Gb Azul",
    ram: "4 Gb",
    precio: "$34.999",
    stock: 5,
    imagen: "https://via.placeholder.com/100x150?text=One+Vision"
  },
  {
    nombre: "Motorola Edge 128 Gb Gris",
    ram: "6 Gb",
    precio: "$49.999",
    stock: 2,
    imagen: "https://via.placeholder.com/100x150?text=Edge"
  },
  {
    nombre: "Motorola G8 Power 64 Gb Azul",
    ram: "4 Gb",
    precio: "$27.999",
    stock: 4,
    imagen: "https://via.placeholder.com/100x150?text=G8+Power"
  },
  {
    nombre: "Motorola G9 Plus 128 Gb Oro",
    ram: "4 Gb",
    precio: "$31.999",
    stock: 3,
    imagen: "https://via.placeholder.com/100x150?text=G9+Plus"
  },
  {
    nombre: "Motorola E7 32 Gb Aqua Blue",
    ram: "2 Gb",
    precio: "$9.999",
    stock: 7,
    imagen: "https://via.placeholder.com/100x150?text=E7"
  }
];

const contenedor = document.getElementById("contenedor");

productos.map(producto => {
  const carta = document.createElement("div");
  carta.className = "carta";

  carta.innerHTML = `
    <h3>${producto.nombre}</h3>
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <p><strong>RAM:</strong> ${producto.ram}</p>
    <p><strong>Precio:</strong> ${producto.precio}</p>
    <p><strong>Stock:</strong> ${producto.stock}</p>
    <button>Comprar</button>
    <button>Agregar al carrito</button>
  `;

  contenedor.appendChild(carta);
});
