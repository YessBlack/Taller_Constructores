// 3. Plataforma de Cursos
function Estudiante(nombre, curso, nota) {
  this.nombre = nombre
  this.curso = curso
  this.nota = nota
  this.esAprobado = nota >= 3.0

  this.mostrarResultado = function () {
    if (this.esAprobado) {
      console.log(`El estudiante ${this.nombre} fue Aprobado`)
      return
    }

    console.log(`El estudiante ${this.nombre} no fue Aprobado`)
  }
}

const estudiante1 = new Estudiante('Juan Camilo', 'Programación con Java', 3.5)
const estudiante2 = new Estudiante('Esteban Lopez', 'Logica de Programación', 4.0)
const estudiante3 = new Estudiante('Claudia Maria', 'Programación con JavaScript', 4.5)
const estudiante4 = new Estudiante('Adrian Perez', 'Fundamentos Web', 4.5)

estudiante1.mostrarResultado()
estudiante2.mostrarResultado()
estudiante3.mostrarResultado()
estudiante4.mostrarResultado()
