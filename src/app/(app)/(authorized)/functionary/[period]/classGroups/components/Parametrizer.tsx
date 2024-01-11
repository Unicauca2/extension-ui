import APIUrls from "@/models/APIUrls";
import SelectPensum from "./SelectPensum";

async function getPensums({ idProgram }: { idProgram: number | undefined }) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + APIUrls.getPensumsList + idProgram
  );
  return res.json();
}

interface IParametrizer {
  idProgram: number | undefined;
  user: string | undefined | null;
}
export default async function Parametrizer({ idProgram }: IParametrizer) {
  const pensums = await getPensums({ idProgram });
  if (!idProgram) return <>Cargando</>;
  return (
    <div>
      {pensums && (
        <SelectPensum program={idProgram as number} pensums={pensums.result} />
      )}
    </div>
  );
}
