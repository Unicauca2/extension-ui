import IconActionCard from "../components/IconActionCard";
import { menuOptions } from "../models/menuInitialValues";
import { itemsObj } from "../models/items";

const options:itemsObj[]|undefined = menuOptions.find((menuType)=>(menuType.typeUser=="coordinator"))?.items;

const currentPeriod = "2022";

export default function Home() {
  return (
    <section className="m-4 pb-10 bg-[#ffffff] w-full min-h-[88vh] rounded-3xl">
      <div className="flex justify-center items-center mt-10 font-bold text-2xl">
        Gestión programa
      </div>
      <div className="m-4 flex flex-wrap justify-center">
        { !options?null:
          options.map((option, index) => (
            <div key={index} className="m-4 shadow-2xl w-48">
              <IconActionCard
                icon={option.icon}
                label={option.label}
                to={`functionary/${currentPeriod}/${option.url}`}
              />
            </div>
        ))}
      </div>
    </section>
  );
}
