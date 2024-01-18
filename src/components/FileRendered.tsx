import { Fragment } from "react";

interface Props {
  src: string;
  type: string;
}

const FileRendered = ({ src, type }: Props) => {
  return (
    <Fragment>
      {type == "application/pdf" ? (
        <embed
          className="px-4 w-full min-h-[75vh]"
          src={src}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      ) : (
        <img
          src={src}
          className="max-h-[75vh] mx-auto"
          alt="Uploaded content"
        />
      )}
    </Fragment>
  );
};

export default FileRendered;
