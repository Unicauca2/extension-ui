export interface optionsObj {
  typeUser: string;
  title: string;
  icon: string;
  items: {
    icon:string,
    label:string,
    url:string
  }[];
}

export const menuOptions: optionsObj[] = [
  {
    typeUser: "candidate",
    title: "Aspirante",
    icon: "candidateIcon",
    items: [
      {
        icon: "sheetCheck",
        label: "Inscripción a nuevo curso",
        url: "",
      },
      {
        icon: "sheetCheck",
        label: "Actualización de datos",
        url: "",
      },
      {
        icon: "sheetCheck",
        label: "Historial de inscripciones",
        url: "",
      },
    ],
  },
  {
    typeUser: "student",
    title: "Estudiante",
    icon: "studentIcon",
    items: [
      {
        icon: "people",
        label: "Notas",
        url: "",
      },
      {
        icon: "people",
        label: "Faltas",
        url: "",
      },
      {
        icon: "sheetCheck",
        label: "Historia académica",
        url: "",
      },
      {
        icon: "people",
        label: "Matrícula académica",
        url: "/academicEnrollment",
      },
      {
        icon: "people",
        label: "Matrícula financiera",
        url: "",
      },
      {
        icon: "people",
        label: "Materias",
        url: "",
      },
      {
        icon: "people",
        label: "Pensum/Currículo",
        url: "",
      },
      {
        icon: "people",
        label: "Historial de pagos",
        url: "",
      },
    ],
  },
  {
    typeUser: "teacher",
    title: "Docente",
    icon: "teacherIcon",
    items: [
      {
        icon: "sheetCheck",
        label: "Grupo estudiantes",
        url: "",
      },
      {
        icon: "sheetCheck",
        label: "Notas",
        url: "",
      },
      {
        icon: "sheetCheck",
        label: "Historial",
        url: "",
      },
    ],
  },
  {
    typeUser: "coordinator",
    title: "Coordinador",
    icon: "coordinatorIcon",
    items: [
      {
        icon: "period",
        label: "Periodos",
        url: "",
      },
      {
        icon: "people",
        label: "Inscripciones",
        url: "",
      },
      {
        icon: "sheetCheck",
        label: "Matrículas",
        url: "",
      },
      {
        icon: "sheet",
        label: "Gestionar oferta academica",
        url: "/academicOffer",
      },
      {
        icon: "student",
        label: "Estudiantes",
        url: "",
      },
      {
        icon: "teacher",
        label: "Docentes",
        url: "",
      },
      {
        icon: "subject",
        label: "Cursos",
        url: "",
      },
      {
        icon: "book",
        label: "Libros",
        url: "",
      },
      {
        icon: "report",
        label: "Reportes",
        url: "",
      },
    ],
  },
];


