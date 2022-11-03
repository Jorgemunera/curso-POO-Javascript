//reto: Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".

class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        if(this.integrantes.some(obj=>obj.instrumento==='Bateria')){
            console.log('ya hay un baterista')
        }else{
            this.integrantes.push(integranteNuevo)
        }     
    }
  }
  
  class Integrante {
    constructor({
        nombre,
        instrumento,
    }){
        this.nombre=nombre;
        this.instrumento=instrumento;
    }
  }
  
  
  export {
    Banda,
    Integrante,
  }
  
  