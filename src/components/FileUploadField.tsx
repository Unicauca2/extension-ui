import InputFileUpload from "./InputFileUpload";
import { Fragment } from "react";
import FileRendered from "./FileRendered";
import { Button } from "@mui/material";

interface Props {
  label: string;
  name: string;
  document: File;
  className: string;
  handleInputChange: ({ target }: any, name?: string | undefined) => void;
}

const FileUploadField = ({
  label,
  name,
  document,
  className,
  handleInputChange,
}: Props) => {
  const fileUrl = document ? URL.createObjectURL(document) : null;
  return (
    <Fragment>
      <div className={"border-b border-r shadow-md " + className}>
        <div className="text-center py-4 flex justify-center">
          <InputFileUpload
            handleInputChange={({ target: { files } }) => {
              handleInputChange(name.split("."), files[0]);
            }}
            label={label}
            name={name}
          />
          {document && (
            <Button
              variant="outlined"
              color="error"
              sx={{ marginLeft: "10px" }}
              onClick={() => {
                handleInputChange(name.split("."), undefined);
              }}
            >
              X
            </Button>
          )}
        </div>
        {fileUrl && <FileRendered src={fileUrl} type={document?.type || ""} />}
      </div>
    </Fragment>
  );
};

export default FileUploadField;
