const APIUrls = {
  getAcamidOfferURL: "/v1/student/academicOffer?idStudent=",
  getEnrollmentList: "/v1/functionary/getEnrollments?",
  getPensumsList: "/v1/functionary/pensums?idProgram=",
  getStudentsList: "/v1/functionary/students?idProgram=",
  getAssignatureList: "/v1/functionary/assignatures?idPensum=",
  getTeachersList: "/v1/functionary/teachers?idProgram=",
  getFileFromServer: "/v1/file/get?fileName=",
  postAcademicOfferURL: "/v1/functionary/uploadAcademicOffer",
  postAcceptPreEnrollmentURL: "/v1/student/acceptPreEnrollment",
  postEnrollmentAcceptation: "/v1/functionary/acceptEnrollments",
  postClassGroups: "/v1/functionary/classGroupCreation",
};

export default APIUrls;
