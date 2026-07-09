const prompt = require('prompt-sync')();

function Vehiculo(marca, modelo, anio, color, precio) {
  this.marca = marca
  this.modelo = modelo
  this.anio = anio
  this.color = color
  this.precio = precio
  this.estado = 'DISPONIBLE'

  const cambiarEstado = (estadoActual, nuevoEstado) => {
    if (this.estado === estadoActual) {
      this.estado = nuevoEstado
      console.log(`Se ha actualizado el estado del vehiculo ${this.marca} a ${nuevoEstado}`)
      return
    }

    console.log(`No se puede cambiar a ${nuevoEstado}: el vehiculo ${this.marca} ya se encuentra ${this.estado}`)
  }

  this.vender = function () {
    cambiarEstado('DISPONIBLE', 'VENDIDO')
  }

  this.reservar = function () {
    cambiarEstado('DISPONIBLE', 'RESERVADO')
  }

  this.liberarReserva = function () {
    cambiarEstado('RESERVADO', 'DISPONIBLE')
  }

  this.cambiarColor = function (nuevoColor) {
    this.color = nuevoColor
    console.log(`Se ha cambiado el color del vehiculo ${this.marca} a ${nuevoColor}`)
  }

  this.mostrarInfo = function () {
    console.log(`${this.marca} ${this.modelo} (${this.anio}) - Color: ${this.color} - Precio: ${this.precio} - Estado: ${this.estado}`)
  }
}

console.log('\n========= CONCESIONARIO DE VEHICULOS ========\n')
console.log('----------- Registro de Vehiculos -----------')

const vehiculos = []

for (let i = 1; i <= 3; i++) {
  console.log(`\n---------- Vehiculo ${i} ----------`)
  const marca = prompt('Ingresa la marca del vehiculo: ')
  const modelo = prompt('Ingresa el modelo del vehiculo: ')
  const anio = Number(prompt('Ingresa el anio del vehiculo: '))
  const color = prompt('Ingresa el color del vehiculo: ')
  const precio = Number(prompt('Ingresa el precio del vehiculo: '))
  vehiculos.push(new Vehiculo(marca, modelo, anio, color, precio))
}

console.log('\n------ Pruebas sobre el primer vehiculo -----')
const vehiculo1 = vehiculos[0]
vehiculo1.reservar()
vehiculo1.liberarReserva()
vehiculo1.cambiarColor('verde')
vehiculo1.vender()
vehiculo1.liberarReserva()

console.log('\n========= Resumen de vehiculos =========\n')
vehiculos.forEach(v => v.mostrarInfo())