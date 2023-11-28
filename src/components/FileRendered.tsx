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
          className="px-4"
          src={src}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      ) : (
        <img src={src} alt="Uploaded content" />
      )}
    </Fragment>
  );
};

export default FileRendered;
