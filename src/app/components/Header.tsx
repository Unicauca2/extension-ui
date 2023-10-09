interface headerProps {
  src: string,
  title: string,
  label: string,
}

const HeaderHome = ({ src, title, label }: headerProps) => {
  return (
    <div className="flex items-center place-content-center text-4xl pt-3 pb-3 scale-75 lg:scale-90">
      <img
        className="md:scale-100 md:pb-0 scale-125 pb-12"
        src={src}
        alt="Logo"
      />
      <div className="pl-10 ml-10 hidden border-white border-s-2 text-center md:block text-[#fff] text-opacity-90">
        <p>{title}</p>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default HeaderHome;
