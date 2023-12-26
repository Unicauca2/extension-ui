interface IdentityDocumentFile {
  id: number;
  name: string;
  file: { id: number }; // Puedes ajustar el tipo según el tipo real de archivo que esperas aquí
}

interface ScholarshipType {
  id: number;
  description: string;
}

interface Scholarship {
  id: number;
  institution: string;
  description: string;
  semester: string;
  graduateType: string;
  calendar: any; // Puedes ajustar el tipo según el tipo real de calendario que esperas aquí
  scholarshipType: ScholarshipType;
}

interface DocumentType {
  id: number;
  description: string;
  code: string;
}

interface CountryState {
  id: number;
  code: string | null;
  description: string;
  acronym: string;
}

interface StateCity {
  id: number;
  code: string;
  description: string;
  countryState: CountryState;
}

interface City {
  id: number;
  code: string;
  description: string;
  stateCity: StateCity;
}

interface ApplicantGuardian {
  id: number;
  fullName: string;
  names: string | null;
  lastNames: string | null;
  identification: string;
  address: string | null;
  telePhone: string;
  workPhone: string | null;
  cellPhone: string;
}

interface Applicant {
  id: number;
  email: string;
  password: string;
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  identification: string;
  residenceAddress: string;
  birthDate: string;
  expeditionDate: string | null;
  eps: string | null;
  stratum: string | null;
  cellPhone: string;
  gender: string | null;
  identityDocumentFile: IdentityDocumentFile;
  scholarship: Scholarship;
  college: any; // Puedes ajustar el tipo según el tipo real de colegio que esperas aquí
  documentType: DocumentType;
  stateResidence: any; // Puedes ajustar el tipo según el tipo real de estado de residencia que esperas aquí
  stateBirth: any; // Puedes ajustar el tipo según el tipo real de estado de nacimiento que esperas aquí
  cityResidence: City;
  cityIdentification: City;
  cityBirth: City;
  cityOrigin: City;
  countryOrigin: CountryState;
  countryBirth: CountryState;
  blood: string | null;
  applicantGuardians: ApplicantGuardian[];
  enabled: boolean;
  username: string;
  accountNonLocked: boolean;
  authorities: { authority: string }[];
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
}

interface EnrollmentP {
  id: number;
  state: number;
  applicant: Applicant;
}

interface Enrollment {
  id: number;
  date: string;
  enrollmentP: EnrollmentP;
}

interface ApiResponse {
  code: string;
  message: string;
  status: number;
  result: { [key: number]: Enrollment };
}

export type { ApiResponse };
