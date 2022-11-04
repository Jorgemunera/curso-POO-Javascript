function videoPlay(id){
    const urlSecreta="https://platziultrasecretomasquelanasa.com/" + id
    console.log("Se esta produciendo desde la url"+ urlSecreta);
}

function videoStop(id){
    const urlSecreta="https://platziultrasecretomasquelanasa.com/" + id
    console.log("Pausamos la url"+ urlSecreta);
}

export class PlatziClass{
    constructor({
        name,
        videoId,
    }){
        this.name=name;
        this.videoId=videoId;
    }
    reproducir(){
        videoPlay(this.videoId)
    }

    pausar(){
        videoStop(this.videoId)
    }
}

class Course{
    constructor({
        name,
        classes=[],
    }){
        this._name=name;
        this.Classes=classes;
    }

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
