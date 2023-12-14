interface daysObj {
  id: number;
  name: string;
}
interface hoursObj {
  id: number;
  content: string;
}

export const days: daysObj[] = [
  { id: 1, name: "Lunes" },
  { id: 2, name: "Martes" },
  { id: 3, name: "Miércoles" },
  { id: 4, name: "Jueves" },
  { id: 5, name: "Viernes" },
  { id: 6, name: "Sábado" },
];
  
export const hours: hoursObj[] = [
  { id: 1, content: "2:00 pm" },
  { id: 2, content: "3:00 pm" },
  { id: 3, content: "4:00 pm" },
  { id: 4, content: "5:00 pm" },
  { id: 5, content: "6:00 pm" },
  { id: 6, content: "7:00 pm" },
  { id: 7, content: "8:00 pm" },
];