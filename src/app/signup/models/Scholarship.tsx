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

const getScholarGrade = () => {
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

const getSensibilizationAndInfant = (
  scholarGrades: {
    value: number;
    label: string;
  }[],
  scholarShip: Scholarship
) => [
  {
    type: "select",
    label: "Nacionalidad",
    name: "scholarShip.semester",
    value: scholarShip.semester,
    options: scholarGrades,
    styles: { my: 1, width: "100%" },
  },
  {
    type: "text",
    label: "Dirección de residencia",
    name: "scholarShip.institution",
    value: scholarShip.institution,
    className: "w-full my-2",
  },
  {
    type: "select",
    label: "Sector",
    name: "scholarShip.sector",
    value: scholarShip.sector,
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
    name: "scholarShip.calendar",
    value: scholarShip.calendar,
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
];

const ageCase = (birthDate: Dayjs, scholarShip: Scholarship) => {
  const years = dayjs()
    .locale("es")
    .diff(dayjs(birthDate, { format: "YYYY-MM-DD" }), "year");
  if (years < 4) return null;
  if (years < 11)
    return getSensibilizationAndInfant(getScholarGrade(), scholarShip);
  return;
};

interface Props {
  scholarShip: Scholarship;
  types: {
    [key: string]: {
      value: number | string;
      label: string;
      parent?: number;
    }[];
  };
}

export function getScholarShipElements({ scholarShip, types }: Props) {
  return [
    {
      type: "select",
      label: "Nacionalidad",
      name: "scholarShip.nationality",
      value: scholarShip.nationality,
      options: types.countries,
      styles: { my: 1, width: "100%" },
    },
    {
      type: "text",
      label: "Dirección de residencia",
      name: "scholarShip.residenceAddress",
      value: scholarShip.residenceAddress,
      className: "w-full my-2",
    },
    {
      type: "select",
      label: "Departamento de residencia",
      name: "scholarShip.state",
      value: scholarShip.state,
      options: types.states,
      styles: { my: 1, width: "100%" },
    },
    {
      type: "select",
      label: "Ciudad de residencia",
      name: "scholarShip.city",
      value: scholarShip.city,
      options: cities,
      styles: { my: 1, width: "100%" },
    },
  ] as FormElement[];
}
