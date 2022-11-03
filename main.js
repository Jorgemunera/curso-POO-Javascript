//Objeto Literal
const natalia={
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    //aprobarCurso:function(){}
        //esta es una manera de crear metodos en objetos

    //esta es otra
    aprobarCurso(nuevoCursito){//si creamos un metodo dentro de un objeto, this hace referencia al objeto natalia
        this.cursosAprobados.push(nuevoCursito);
    }

};


//Prototipo

function Student(name, age, cursosAprobados){
    this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;
    //forma de crear metodo en prototipos
    //this.aprobarCurso=function(nuevoCursito){}
}
//esta es otra forma de crear metodos en prototipos, por fuera del prototipo
Student.prototype.aprobarCurso=function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

//crear una instancia del prototipo
const juanita= new Student(
    "juanita Alejandra",
    15,
    [
        "Curso de Introduccion a la produccion de Videojuego", 
        "Curso de Creacion de personajes"
    ]
);

//Prototipos con la sintaxis de clases: sintaxis parecida a la de otros lenguajes pero es lo mismo que los prototipos

class Student2{
    constructor(name,age,cursosAprobados){//metodo constructor
        this.name=name;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
        //forma de crear metodo en clases
    //this.aprobarCurso=function(nuevoCursito){}
    }
    //esta es otra forma de crear un metodo en clases
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    } 
};

const miguelito= new Student2(
    "Miguel",
    28,
    [
        "Curso Analis de negocios para ciencia de datos",
        "Curso de principios y visualizacion de datos para BI",
    ]
);

//IMPORTANTE: Imaginemos que ya no tenemos solo un name,age,cursosAprobados sino que tenmos muchisimos atributos mas, al momento de crear la instancia del prototipo y crear el objeto nos demorariamos demasiado escribiendo cada uno y no solo eso, tendriamos que aprendernos el orden de cada uno de los atributos(parametros en este caso de la funcion constructora),
//Para esto en la funcion constructora podemos recibir un solo parametro de tipo objeto

class Student3{
    constructor({
        name,
        age,
        cursosAprobados=[],
        email,
    }){
        this.name=name;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
        this.email=email;
    }
}

//y cuando creemos el objeto instancia de esa clase
const jorgito= new Student3({
    age: 29,
    email:"jorgeelpapu@gmail.com",
    name: "Jorge",
    cursosAprobados:[
        "Curso POO",
        "Curso JS"
    ]

});