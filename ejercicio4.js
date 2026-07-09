// 4. Biblioteca
function Libro(nombre, autor, anio, editorial, ISBN) {
  this.nombre = nombre
  this.autor = autor
  this.anio = anio
  this.editorial = editorial
  this.ISBN = ISBN
  this.estaPrestado = false

  this.prestar = function () {
    if (!this.estaPrestado) {
      this.estaPrestado = true
      console.log(`Se ha prestado el libro ${this.nombre}`)
      return
    }

    console.log(`No se puede prestar el libro ${this.nombre}: ya se encuentra prestado`)
  }

  this.devolver = function () {
    if (this.estaPrestado) {
      this.estaPrestado = false
      console.log(`Se ha devuelto el libro ${this.nombre}`)
      return
    }

    console.log(`No se puede devolver el libro ${this.nombre}: ya se encontraba disponible`)
  }
}

const libro1 = new Libro('El retrato de Dorian Gray', 'Oscar Wilde', '2021', 'Editorial Blanco & Negro', '9789585367128')
const libro2 = new Libro('El Hombre En Busca de Sentido', 'Viktor Frankl', '2020', 'Herder', '9788425432026')
const libro3 = new Libro('Habitos Atomicos', 'James Clear', '2024', 'Booket', '9786287574922')

libro1.prestar()
libro1.prestar()
libro1.devolver()
libro1.devolver()

console.log()

libro2.prestar()
libro2.devolver()
libro2.prestar()
libro2.devolver()
