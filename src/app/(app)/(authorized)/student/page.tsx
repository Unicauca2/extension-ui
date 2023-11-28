import IconActionCard from "../components/IconActionCard";

const options = [
  {
    icon: "people",
    label: "Matrícula Académica",
    to: "/academicEnrollment",
  },
  {
    icon: "sheetCheck",
    label: "Historia Académica",
    to: "/academicEnrollment",
  },
];

export default function Home() {
  return (
    <section className="m-4 pb-10 bg-[#ffffff] w-full rounded-3xl ">
      <div className="flex justify-center items-center mt-10 font-bold text-2xl">
        Estudiante
      </div>
      <div className="m-4 flex flex-wrap justify-center">
        {options.map((option, index) => (
          <div key={index} className="m-4 shadow-2xl w-48">
            <IconActionCard
              icon={option.icon}
              label={option.label}
              to={`student/${option.to}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
