import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import isObjectWithDefaultValues from "@/utils/ObjectComparer";
import { personInitialValues } from "../models/ApplicantRegistry";

const styles = {
  color: "white",
  backgroundColor: "#092167",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  transition: ".3s linear",
};

interface tabsSelectionProps {
  value: string;
  object: any;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
  handleComplete: (flag: boolean) => void;
}

export default function TabsSelection({
  value,
  object,
  handleChange,
  handleComplete,
}: tabsSelectionProps) {
  console.log(object);
  console.log(personInitialValues);
  const step1Check =
    !isObjectWithDefaultValues(
      object.applicant,
      personInitialValues.applicant
    ) &&
    object.credentials.password &&
    object.applicant.document;
  const step2Check =
    !isObjectWithDefaultValues(
      object.residency,
      personInitialValues.residency
    ) ||
    (object.residency.country &&
      object.residency.country !== 170 &&
      object.residency.residenceAddress?.length > 0);
  const step3Check = !isObjectWithDefaultValues(
    object.guardian,
    personInitialValues.guardian
  );
  handleComplete(step1Check && step2Check && step3Check);
  return (
    <TabList
      onChange={handleChange}
      scrollButtons="auto"
      color="black"
      variant="scrollable"
      className="scrollColor black"
      sx={{ "& .MuiTabs-indicator": { backgroundColor: "inherit" } }}
    >
      <Tab
        value="1"
        icon={step1Check ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        style={value == "1" ? styles : {}}
        iconPosition="start"
        label={<div className="text-md">Información Personale</div>}
      />
      {step1Check && (
        <Tab
          value="2"
          icon={step2Check ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          style={value == "2" ? styles : {}}
          iconPosition="start"
          label={<p className="text-md">Información residencia</p>}
        />
      )}
      {step1Check && step2Check && (
        <Tab
          value="3"
          icon={step3Check ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          style={value == "3" ? styles : {}}
          iconPosition="start"
          label={<p className="text-md">Información Acudiente</p>}
        />
      )}
    </TabList>
  );
}
