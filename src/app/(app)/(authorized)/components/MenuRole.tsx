import IconActionCard from "../components/IconActionCard";
import { menuOptions } from "../models/menuInitialValues";
import { itemsObj } from "../models/items";

export interface IMenuRole {
  title: string;
  roleUrlPath: string;
  roleNameOptions: string;
}
export default function MenuRole({
  title,
  roleNameOptions,
  roleUrlPath,
}: IMenuRole) {
  const options: itemsObj[] | undefined = menuOptions.find(
    (menuType) => menuType.typeUser == roleNameOptions
  )?.items;
  return (
    <section className="m-4 pb-10 bg-[#ffffff] w-full min-h-[88vh] rounded-3xl">
      <div className="flex justify-center items-center mt-10 font-bold text-2xl">
        {title}
      </div>
      <div className="m-4 flex flex-wrap justify-center">
        {options ? (
          options.map((option, index) => (
            <div key={index} className="m-4 shadow-2xl w-48">
              <IconActionCard
                icon={option.icon}
                label={option.label}
                to={`${roleUrlPath}/${option.url}`}
              />
            </div>
          ))
        ) : (
          <div>No hay opciones</div>
        )}
      </div>
    </section>
  );
}
