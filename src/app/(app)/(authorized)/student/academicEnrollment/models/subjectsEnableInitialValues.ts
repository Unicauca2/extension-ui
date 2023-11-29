interface subjectsObj {
  id: number;
  name: string;
  code?: string;
  classroom?: string;
  color: string;
  slots: {
    idDay: number;
    idStart: number;
    duration: number;
  }[];
}

export const subjectsEnable: subjectsObj[] = [
  {
    id: 1,
    name: "Flauta I",
    code: "FL2023I",
    classroom: "Sala 315 - Hum",
    color: "bg-[#c63d96]",
    slots: [
      { idDay: 1, idStart: 1, duration: 4 },
      { idDay: 2, idStart: 5, duration: 2 },
    ],
  },
  {
    id: 2,
    name: "Guitarra I",
    code: "GT2023I",
    classroom: "Salón 124 - FIC",
    color: "bg-[#26c019]",
    slots: [
      { idDay: 1, idStart: 13, duration: 2 },
      { idDay: 2, idStart: 1, duration: 4 },
    ],
  },
  {
    id: 3,
    name: "Clarinete I",
    code: "CR2023I",
    classroom: "Sala 310 - FIET",
    color: "bg-[#ffb200]",
    slots: [
      { idDay: 4, idStart: 12, duration: 4 },
      { idDay: 5, idStart: 12, duration: 3 },
    ],
  },
  {
    id: 4,
    name: "Violin I",
    code: "VL2023I",
    classroom: "Sala 220 - Hum",
    color: "bg-[#092167]",
    slots: [
      { idDay: 6, idStart: 2, duration: 4 },
      { idDay: 3, idStart: 5, duration: 2 },
    ],
  },
];
