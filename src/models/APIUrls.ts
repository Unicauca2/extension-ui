const APIUrls = {
  getAcamidOfferURL: "/v1/student/academicOffer?idStudent=",
  uploadAcademicOfferURL: "/v1/functionary/uploadAcademicOffer",
  acceptPreEnrollmentURL: "/v1/student/acceptPreEnrollment",
  getEnrollmentList: "/v1/functionary/getEnrollments?",
  postEnrollmentAcceptation: "/v1/functionary/acceptEnrollments?",
  getPensumsList: "/v1/functionary/pensums?idProgram=",
  getStudentsList: "/v1/functionary/students?idProgram=",
  getAssignatureList: "/v1/functionary/assignatures?idPensum=",
  postClassGroups: "/v1/functionary/classGroupCreation",
};

export default APIUrls;
