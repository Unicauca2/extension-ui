import { FormElement } from "@/models/FormElement";
import dayjs, { Dayjs } from "dayjs";

export interface Scholarship {
  scholarshipType: number | string;
  institution: string;
  description: string;
  semester: string | number;
  graduateType: string | number;
  calendar: string | number;
}

const getScholarFormation = (scholarship: Scholarship): FormElement[] => {
  const getScholarGrades = () => {
    const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((grade) => {
      return { value: grade + "°", label: grade.toString() + "°" };
    });
    grades.push(
      ...[
        {
          value: "Jardin",
          label: "Jardin",
        },
        {
          value: "Kinder",
          label: "Kinder",
        },
      ]
    );
    return grades;
  };
  return [
    {
      type: "select",
      label: "Grado",
      name: "scholarship.semester",
      value: scholarship.semester,
      options: getScholarGrades(),
      styles: { my: 1, width: "100%" },
    },
    {
      type: "text",
      label: "Institución educativa",
      name: "scholarship.institution",
      value: scholarship.institution,
      className: "w-full my-2",
    },
    {
      type: "select",
      label: "Sector",
      name: "scholarship.description",
      value: scholarship.description,
      options: [
        {
          value: "Privado",
          label: "Privado",
        },
        {
          value: "Oficial",
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
          value: "A",
          label: "A",
        },
        {
          value: "B",
          label: "B",
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
      return { value: grade.toString(), label: grade.toString() };
    });
    grades.push(
      ...[
        {
          value: "Trabajo de grado",
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
      { value: "Especialización", label: "Especialización" },
      { value: "Maestría", label: "Maestría" },
      { value: "Doctorado", label: "Doctorado" },
    ];
  };
  const getPhDGrades = () => {
    const grades = [1, 2, 3, 4, 5, 6].map((grade) => {
      return { value: grade.toString(), label: grade.toString() };
    });
    grades.push(
      ...[
        {
          value: "Trabajo de grado",
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

type ScholarshipTypeMap = {
  [key: string]: {
    elements: (scholarship: Scholarship) => FormElement[];
    checker: (scholarship: Scholarship) => boolean;
  };
};
const scholarshipTypeMap: ScholarshipTypeMap = {
  "8": {
    elements: () => [],
    checker: () => true,
  },
  "9": {
    elements: (scholarship) => getScholarFormation(scholarship),
    checker: (scholarship) => scholarChecker(scholarship),
  },
  "10": {
    elements: (scholarship) => getTechnicalFormation(scholarship),
    checker: (scholarship) => technicalChecker(scholarship),
  },
  "5": {
    elements: (scholarship) => getUniversityFormation(scholarship),
    checker: (scholarship) => universityChecker(scholarship),
  },
  "6": {
    elements: (scholarship) => getPhDFormation(scholarship),
    checker: (scholarship) => phDChecker(scholarship),
  },
  "7": {
    elements: (scholarship) => getGraduateFormation(scholarship),
    checker: (scholarship) => graduateChecker(scholarship),
  },
};

const getAcademicFormationElements = (
  scholarship: Scholarship
): FormElement[] => {
  const academicFormationOptions = [
    {
      value: 9,
      label: "Escolar",
    },
    {
      value: 10,
      label: "Tecnología",
    },
    {
      value: 5,
      label: "Universitaria - Pregrado",
    },
    {
      value: 6,
      label: "Posgrado",
    },
    {
      value: 7,
      label: "Actualmente no estudio / Soy profesional",
    },
    {
      value: 8,
      label: "Ninguna de las anteriores",
    },
  ];
  const elements = [
    {
      type: "select",
      label: "Estudio que realiza actualmente",
      name: "scholarship.scholarshipType",
      value: scholarship.scholarshipType,
      options: academicFormationOptions,
      styles: { my: 1, width: "100%" },
    },
  ] as FormElement[];

  if (scholarship.scholarshipType !== 0 && scholarship.scholarshipType !== "")
    elements.push(
      ...scholarshipTypeMap[scholarship.scholarshipType.toString()].elements(
        scholarship
      )
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
      {
        type: "label",
        label: "Edad no admitida, debe tener más de 4 años para inscribirse",
      },
    ];
  if (years < 11)
    return [
      { type: "label", label: "Escolar" },
      ...getScholarFormation(scholarship),
    ];
  return getAcademicFormationElements(scholarship);
}

function scholarChecker(scholarship: Scholarship) {
  if (
    (scholarship.semester as number) < 1 ||
    (scholarship.semester as number) > 13
  )
    return false;
  if (
    scholarship.institution === undefined ||
    scholarship.institution.length === 0
  )
    return false;
  if (
    scholarship.description === undefined ||
    scholarship.description.length === 0
  )
    return false;
  if (
    (scholarship.calendar as number) < 1 ||
    (scholarship.calendar as number) > 2
  )
    return false;
  return true;
}
function technicalChecker(scholarship: Scholarship) {
  if (
    scholarship.description === undefined ||
    scholarship.description.length === 0
  )
    return false;
  if (
    scholarship.institution === undefined ||
    scholarship.institution.length === 0
  )
    return false;
  return true;
}
function universityChecker(scholarship: Scholarship) {
  if (
    scholarship.description === undefined ||
    scholarship.description.length === 0
  )
    return false;
  if (
    (scholarship.semester as number) < 1 ||
    (scholarship.semester as number) > 11
  )
    return false;
  if (
    scholarship.institution === undefined ||
    scholarship.institution.length === 0
  )
    return false;

  return true;
}
function phDChecker(scholarship: Scholarship) {
  if (
    scholarship.description === undefined ||
    scholarship.description.length === 0
  )
    return false;
  if (
    (scholarship.semester as number) < 1 ||
    (scholarship.semester as number) > 7
  )
    return false;
  if (
    scholarship.institution === undefined ||
    scholarship.institution.length === 0
  )
    return false;
  if (
    (scholarship.graduateType as number) < 1 ||
    (scholarship.graduateType as number) > 3
  )
    return false;
  return true;
}
function graduateChecker(scholarship: Scholarship) {
  if (
    scholarship.description === undefined ||
    scholarship.description.length === 0
  )
    return false;
  return true;
}

export function getScholarShipChecker({
  birthDate,
  scholarship,
}: Props): boolean {
  const years = dayjs()
    .locale("es")
    .diff(dayjs(birthDate, { format: "YYYY-MM-DD" }), "year");
  if (years < 4) return false;
  if (years < 11) {
    return scholarChecker(scholarship);
  }
  return (
    scholarshipTypeMap[scholarship.scholarshipType.toString()]?.checker(
      scholarship
    ) || false
  );
}
