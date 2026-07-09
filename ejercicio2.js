// 2. Sistema de Veterinaria
function Mascota(nombre, especie, edad, peso) {
  this.nombre = nombre
  this.especie = especie
  this.edad = edad
  this.peso = peso

  this.presentarse = function () {
    return `
      - Paciente: ${this.nombre}
      - Especie: ${this.especie}
      - Paciente: ${this.edad}
      - Peso: ${this.peso}
    `
  }
}

const mascota1 = new Mascota('Lucy', 'Gato', 5, 20)
const mascota2 = new Mascota('Saki', 'Gato', 2, 13)
const mascota3 = new Mascota('Sakura', 'Perro', 3, 15)

console.log(mascota1.presentarse())
console.log(mascota2.presentarse())
console.log(mascota3.presentarse())
