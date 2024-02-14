const translatableWords: {
  [key: string]: string;
} = {
  functionary: "funcionario",
  student: "estudiante",
  period: "periodo",
  classGroups: "grupos",
  applicantEnrollment: "inscripciones",
  applicants: "aspirantes",
  academicEnrollment: "matricula",
};

interface ITranslator {
  word: string;
}
export function Translator({ word }: ITranslator) {
  return translatableWords[word] || word;
}
