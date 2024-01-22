import { Fragment } from "react";
import Image from "next/image";

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
        <Image
          src={src}
          className="max-h-[75vh] mx-auto"
          alt="Uploaded content"
          width={500}
          height={1000}
        />
      )}
    </Fragment>
  );
};

export default FileRendered;
