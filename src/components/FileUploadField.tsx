import InputFileUpload from "./InputFileUpload";
import { FC, Fragment, memo } from "react";
import FileRendered from "./FileRendered";
import { Button } from "@mui/material";

interface Props {
  label: string;
  name: string;
  document: File;
  className: string;
  multiple: boolean;
  accepts: string;
  handleInputChange: (propsPath: string[], value: any) => void;
}

const FileUploadField: FC<Props> = memo(
  ({
    name,
    label,
    document,
    className,
    multiple,
    accepts,
    handleInputChange,
  }) => {
    const fileUrl = document ? URL.createObjectURL(document) : null;
    return (
      <Fragment>
        <div className={"border-b border-r shadow-md  " + className}>
          <div className="text-center py-4 flex justify-center bg-[#ffffff]">
            <InputFileUpload
              handleInputChange={handleInputChange}
              label={document ? "cambiar" : label}
              name={name}
              accepts={accepts}
              multiple={multiple}
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
          {fileUrl && (
            <FileRendered src={fileUrl} type={document?.type || ""} />
          )}
        </div>
      </Fragment>
    );
  }
);

export default FileUploadField;
