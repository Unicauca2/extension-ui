import InputFileUpload from "./InputFileUpload";
import { Fragment } from "react";
import FileRendered from "./FileRendered";
import { usePersonRegister } from "@/app/signup/hooks/usePersonRegister";

interface Props {
  label: string;
  name: string;
}

const FileUploadField = ({ label, name }: Props) => {
  const { person, handleInputChange } = usePersonRegister();
  const fileUrl = (person.applicant.document) ? URL.createObjectURL(person.applicant.document) : null;
  return (
    <Fragment>
      <div className="border-b border-r shadow-md">
        <div className="text-center py-4">
          <InputFileUpload handleInputChange={handleInputChange} label={label} name={name} />
        </div>
        {fileUrl && <FileRendered src={fileUrl} type={person?.applicant?.document?.type || ""} />}
      </div>
    </Fragment>
  );
};

export default FileUploadField;
