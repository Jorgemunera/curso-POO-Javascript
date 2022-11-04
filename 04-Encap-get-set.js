//por convencion, los atributos y metodos que no queremos que se llamen desde afuera de nuestro prototipo, lo que hacemos es colocar un guion bajo _
class Course{
    constructor({
        name,
        classes=[],
    }){
        this._name=name;
        this.Classes=classes;
    }

//pero como vamos a conseguir el nombre del curso?, colocamos get y el nombre del atributo como si fuera un metodo, esto es porque desde afuera, cuando creemos las instancias de nuestro prototipo vamos a llamar a name, y como en cualquier funcion debemos retornar su this._ y nombre.
//abajo del get colocaremos un set de la misma forma que el get, y el set nos permitira interactuar como una funcion, en este caso si queremos cambiar el nombre del curso, podriamos poner condicionales para que no lo puedan hacer

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        if(nuevoNombre === "Curso malito de programacion basica"){
            console.error("Web..no")
        } else{
            this._name=nuevoNombre;
        }  
    }
}

class LearningPath{
    constructor({
        name,
        courses=[],
    }){
        this.name=name;
        this.courses=courses;
    }
}


class Classes{
    constructor({
        name,
        comentarios,
    }){
        this.name=name;
        this.comentarios=comentarios;
    }
}
const cursoProgBasica= new Course({
    name: "Curso gratis de programacion basica",
});

//cuando queramos leer su nombre (del atributo encapsulado)hacemos esto
//cursoProgBasica.name
//y si queremos cambiar el valor de ese atributo hacemos esto
//curso.ProgBasica.name="curso jkjhfkd" pero si no cumple con nuestra condicional arriba en el set, entonces no lo dejara cambiar
const cursoDefinitivoHTML= new Course({
    name: "Curso definitivo HTML y CSS",
});
const cursoDePracticoHTML= new Course({
    name: "Curso practico de HTML y CSS",
});

const escuelaWeb=new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoDePracticoHTML,
    ]
});

const cursoDataBusines= new Course({
    name: "Curso DataBusiness",
});
const cursoDataViz= new Course({
    name: "Curso Dataviz",
});

const escuelaData=new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        cursoDataBusines,
        cursoDataViz,
    ]
});

const cursoUnity= new Course({
    name: "Curso de Unity",
});
const cursoUnreal= new Course({
    name: "Curso de Unreal",
});


const escuelaVgs=new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        cursoUnity,
        cursoUnreal,
    ]
});


class Student{
    constructor({
        name,
        email,
        username,
        twitter=undefined,
        instagram=undefined,
        facebook=undefined,
        approvedCourses=[],
        learningPaths=[],
    }){
        this.name=name;
        this.email=email;
        this.username=username;
        this.socialMedia={twitter,instagram,facebook,};this.approvedCourses=approvedCourses;
        this.learningPaths=learningPaths;}}

const juan2=new Student({
    name:"JuanDC",
    username:"juandc",
    email:"juanito@juanito.com",
    twitter:"fjuandc",
    learningPaths:[
        escuelaWeb,
        escuelaVgs,],
});

const miguelito2=new Student({
    name:"Miguelito",
    username:"migelitofeliz",
    email:"miguelito@juanito.com",instagram:"migelito_feliz",
    learningPaths:[
        escuelaWeb,
        escuelaData,],
});
