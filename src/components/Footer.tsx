interface footerProps {
  anyo: string;
  entidad: string;
  contacto: string;
  version: string;
}

const Footer = ({ anyo, entidad, contacto, version }: footerProps) => {
  return (
    <div className="text-center items-center place-content-center text-lg pt-8 pb-8 text-[#fff] text-opacity-90">
      <div className="flex place-content-center">
        <p>{anyo}</p>
        <p className="pl-4 ml-4 border-white border-s-2">{entidad}</p>
      </div>
      <p>{contacto}</p>
      <p>{version}</p>
    </div>
  );
};

export default Footer;
