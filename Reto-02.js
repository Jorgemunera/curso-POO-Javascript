//Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

//Que sea de tipo string.
//Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
//Si no es un string no se cambia el valor de la propiedad name.
export class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
     return this._name;
    }
  
    set name(nuevoNombrecito) {
      if(typeof nuevoNombrecito =='string'){
        nuevoNombrecito = nuevoNombrecito.trim()
      if(nuevoNombrecito.length !== 0){
        let nuevoNombrecitoM=nuevoNombrecito.split(" ").map(word=>{
            const firsLW=word[0].toUpperCase();
            const restWord=word.slice(1);
            const union=firsLW+restWord;
            return union;
            }).join(" ");
            this._name=nuevoNombrecitoM
        }
    }
  }
}
