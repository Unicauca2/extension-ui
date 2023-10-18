import dayjs from 'dayjs';
import 'dayjs/locale/es';

import { Applicant } from '@/app/signup/models/Applicant';

function validateApplicantRegistry(applicant: Applicant) {
  const years = dayjs().locale('es').diff(dayjs(applicant.birthDate, { format: 'YYYY-MM-DD' }), 'year')
}
export function Record(applicant: Applicant) {
  validateApplicantRegistry(applicant);
  return <div>{applicant.birthDate.toString()}</div>
}