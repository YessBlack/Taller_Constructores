// 1. Inventario - Tienda de Tecnologia
function Producto(marca, procesador, ram, precio, sistemaOperativo, disco) {
  this.marca = marca
  this.procesador = procesador
  this.ram = ram
  this.disco = disco
  this.precio = precio
  this.sistemaOperativo = sistemaOperativo
}

const computador1 = new Producto('Asus', 'Intel i7', 16, 512, 3000000, 'Windows 11')
const computador2 = new Producto('MacBook Pro', 'Apple', 16, 512, 6000000, 'MacOS Tahoe')
const computador3 = new Producto('Dell', 'AMD Ryzen 5', 16, 512, 2500000, 'Ubuntu')

console.log('Computador 1 ', computador1)
console.log('Computador 2 ', computador2)
console.log('Computador 3 ', computador3)
