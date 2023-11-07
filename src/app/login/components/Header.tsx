import ProgramImage from "@/components/ProgramImage";
import Link from "next/link";

interface headerProps {
  src_universidad: string;
  width: number;
  height: number;
}

const HeaderLogin = ({ src_universidad, width, height }: headerProps) => {
  return (
    <Link href={{ pathname: `/` }}>
      <div className="flex items-center place-content-center py-3 h-32 bg-[#ffffff] rounded-b-3xl">
        {/* <div>
          <ProgramImage width={width} height={height} type="logo" />
        </div> */}
        <img
          style={{
            height: height,
          }}
          className="h-auto"
          src={src_universidad}
          alt="Logo"
        />
      </div>
    </Link>
  );
};

export default HeaderLogin;
