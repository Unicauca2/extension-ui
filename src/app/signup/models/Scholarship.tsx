import { FormElement } from "@/models/FormElement";
import dayjs, { Dayjs } from "dayjs";

export interface Scholarship {
  scholarshipType: number;
  institution: string;
  sector: string;
  description: string;
  semester: string;
  graduateType: string;
  calendar: string;
}

const getScholarFormation = (scholarship: Scholarship): FormElement[] => {
  const getScholarGrades = () => {
    const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((grade) => {
      return { value: grade, label: grade.toString() + "°" };
    });
    grades.push(
      ...[
        {
          value: 12,
          label: "Jardin",
        },
        {
          value: 13,
          label: "Kinder",
        },
      ]
    );
    return grades;
  };
  return [
    {
      type: "select",
      label: "Semestre",
      name: "scholarship.semester",
      value: scholarship.semester,
      options: getScholarGrades(),
      styles: { my: 1, width: "100%" },
    },
    {
      type: "text",
      label: "Dirección de residencia",
      name: "scholarship.institution",
      value: scholarship.institution,
      className: "w-full my-2",
    },
    {
      type: "select",
      label: "Sector",
      name: "scholarship.sector",
      value: scholarship.sector,
      options: [
        {
          value: 1,
          label: "Privado",
        },
        {
          value: 2,
          label: "Oficial",
        },
      ],
      styles: { my: 1, width: "100%" },
    },
    {
      type: "select",
      label: "Calendario",
      name: "scholarship.calendar",
      value: scholarship.calendar,
      options: [
        {
          value: 1,
          label: "Privado",
        },
        {
          value: 2,
          label: "Oficial",
        },
      ],
      styles: { my: 1, width: "100%" },
    },
  ] as FormElement[];
};

const getTechnicalFormation = (scholarship: Scholarship): FormElement[] =>
  [
    {
      type: "text",
      label: "Nombre de programa o tecnología",
      name: "scholarship.description",
      value: scholarship.description,
      className: "w-full my-2",
    },
    {
      type: "text",
      label: "Institución educativa",
      name: "scholarship.institution",
      value: scholarship.institution,
      className: "w-full my-2",
    },
  ] as FormElement[];

const getUniversityFormation = (scholarship: Scholarship): FormElement[] => {
  const getUniversityGrades = () => {
    const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((grade) => {
      return { value: grade, label: grade.toString() };
    });
    grades.push(
      ...[
        {
          value: 11,
          label: "Trabajo de grado",
        },
      ]
    );
    return grades;
  };
  return [
    {
      type: "text",
      label: "Carrera o programa",
      name: "scholarship.description",
      value: scholarship.description,
      className: "w-full my-2",
    },
    {
      type: "select",
      label: "Semestre",
      name: "scholarship.semester",
      value: scholarship.semester,
      options: getUniversityGrades(),
      styles: { my: 1, width: "100%" },
    },
    {
      type: "text",
      label: "Universidad",
      name: "scholarship.institution",
      value: scholarship.institution,
      className: "w-full my-2",
    },
  ] as FormElement[];
};

const getPhDFormation = (scholarship: Scholarship): FormElement[] => {
  const getPhDTypes = () => {
    return [
      { value: 1, label: "Especialización" },
      { value: 2, label: "Maestría" },
      { value: 3, label: "Doctorado" },
    ];
  };
  const getPhDGrades = () => {
    const grades = [1, 2, 3, 4, 5, 6].map((grade) => {
      return { value: grade, label: grade.toString() };
    });
    grades.push(
      ...[
        {
          value: 7,
          label: "Trabajo de grado",
        },
      ]
    );
    return grades;
  };
  return [
    {
      type: "select",
      label: "Tipo de posgrado",
      name: "scholarship.graduateType",
      value: scholarship.graduateType,
      options: getPhDTypes(),
      styles: { my: 1, width: "100%" },
    },
    {
      type: "text",
      label: "Programa de posgrado",
      name: "scholarship.description",
      value: scholarship.description,
      className: "w-full my-2",
    },
    {
      type: "select",
      label: "Semestre",
      name: "scholarship.semester",
      value: scholarship.semester,
      options: getPhDGrades(),
      styles: { my: 1, width: "100%" },
    },
    {
      type: "text",
      label: "Universidad",
      name: "scholarship.institution",
      value: scholarship.institution,
      className: "w-full my-2",
    },
  ] as FormElement[];
};

const getGraduateFormation = (scholarship: Scholarship): FormElement[] =>
  [
    {
      type: "text",
      label: "Profesion",
      name: "scholarship.description",
      value: scholarship.description,
      className: "w-full my-2",
    },
  ] as FormElement[];

const getAcademicFormationElements = (
  scholarship: Scholarship
): FormElement[] => {
  const getOptions = [
    {
      value: 1,
      label: "Escolar",
    },
    {
      value: 2,
      label: "Tecnología",
    },
    {
      value: 3,
      label: "Universitaria - Pregrado",
    },
    {
      value: 4,
      label: "Posgrado",
    },
    {
      value: 5,
      label: "Actualmente no estudio / Soy profesional",
    },
    {
      value: 0,
      label: "Ninguna de las anteriores",
    },
  ];
  const elements = [
    {
      type: "select",
      label: "Estudio que realiza actualmente",
      name: "scholarship.scholarshipType",
      value: scholarship.scholarshipType,
      options: getOptions,
      styles: { my: 1, width: "100%" },
    },
  ] as FormElement[];

  type ScholarshipTypeMap = {
    [key: string]: FormElement[];
  };

  const scholarshipTypeMap: ScholarshipTypeMap = {
    "1": getScholarFormation(scholarship),
    "2": getTechnicalFormation(scholarship),
    "3": getUniversityFormation(scholarship),
    "4": getPhDFormation(scholarship),
    "5": getGraduateFormation(scholarship),
  };

  if (scholarship.scholarshipType !== 0)
    elements.push(
      ...scholarshipTypeMap[scholarship.scholarshipType.toString()]
    );
  return elements;
};

interface Props {
  birthDate: Dayjs;
  scholarship: Scholarship;
}

export function getScholarShipElements({
  birthDate,
  scholarship,
}: Props): FormElement[] {
  const years = dayjs()
    .locale("es")
    .diff(dayjs(birthDate, { format: "YYYY-MM-DD" }), "year");
  if (years < 4)
    return [
      { type: "label", label: "Edad no admitida, debe tener más de 4 años" },
    ];
  if (years < 11)
    return [
      { type: "label", label: "Escolar" },
      ...getScholarFormation(scholarship),
    ];
  return getAcademicFormationElements(scholarship);
}
