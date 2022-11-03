//Vamos a crear 2 objetos con ciertos atributos, pero como vemos bajo esta estructura, el codigo no es escalable, ya que estamos teniendo mas de 30 lineas de codigo por cada estudiante y si tuvieramos mil estudiantes, o si se modifican los cursos disponibles de las escuelas, tocaria ir estudiante por estudiante viendo quien esta en determinada ruta de aprendizaje y agregar el curso nuevo uno por uno. esto no es escalable

// const juan1={
//     name: "juan dc",
//     username: "juandc",
//     points: 100,
//     socialMedia:{
//         twitter:"fjuandc",
//         instagram:"fjuandc",
//         facebook:"undefined",

//     },
//     approvedCourses:[
//         "Curso definitivo CSS y HTML",
//         "Curso practico CSS y HTML",
//     ],
//     learningPaths:[
//         {
//             name: "Escuela de desarrollo web",
//             courses:[
//                 "Curso definitivo CSS y HTML",
//                 "Curso practico CSS y HTML",
//                 "Curso de responsive Design",
//             ],
//         },
//         {
//             name: "Escuela de Videojuegos",
//             courses:[
//                 "Curso de introduccion a la produccion de videojuegos",
//                 "Curso de unreal engine",
//                 "Curso de unioty 3D",
//             ],
//         },
//     ],
// };

// const Jorge={
//     name: "Jorge Munera",
//     username: "Jorgemunera",
//     points: 1000,
//     socialMedia:{
//         twitter:"Jorgemunera",
//         instagram:"Jorge_munera",
//         facebook:"undefined",

//     },
//     approvedCourses:[
//         "Curso de databussines",
//         "Curso dataViz",
//     ],
//     learningPaths:[
//         {
//             name: "Escuela de desarrollo web",
//             courses:[
//                 "Curso definitivo CSS y HTML",
//                 "Curso practico CSS y HTML",
//                 "Curso de responsive Design",
//             ],
//         },
//         {
//             name: "Escuela de datascience",
//             courses:[
//                 "Curso de databussines",
//                 "Curso dataViz",
//                 "Curso de tableau",
//             ],
//         },
//     ],
// };

//POR TAL RAZON VAMOS A TRABJAR CON CLASES

class Student{
    constructor({
        name,
        email,
        username,
        twitter=undefined,
        instagram=undefined,
        facebook=undefined,
        approveCourses=[],
        learningPaths=[],
        
    }){
        this.name=name;
        this.email=email;
        this.username=username;
        this.socialMedia={
            twitter,
            instagram,
            facebook,
        };
        this.approveCourses=approveCourses;
        this.learningPaths=learningPaths;
    }
}

const jorge2= new Student ({
    name: "jorge Pepo",
    username:"jorpepo",
    email: "jorgepepo@platzi.com",
    twitter:"jpepo",
});

const miguelito= new Student ({
    name: "miguel",
    username:"miguelo",
    email: "migue@platzi.com",
    instagram:"miguelon",
});