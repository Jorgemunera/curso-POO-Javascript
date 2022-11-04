//creando prototipo de las escuelas de platzi

//podemos ver que estamos repitiendo codigo en uno de los cursos de todas las escuelas, por esto mejor hacemos una nueva abstraccion y creamos la clase o prototipo de Cursos
class Course{
    constructor({
        name,
        classes=[],
    }){
        this.name=name;
        this.Classes=classes;
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

//creando una instancia, cada escuela, con sus cursos y clases
//hay que tener en cuenta que cada curso tiene tambien sus clases, por tanto se puede hacer la abstraccion para hacer el prototipo de clases
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
