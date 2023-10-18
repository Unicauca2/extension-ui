import React from "react";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const styles = {
  color: "white",
  backgroundColor: "green",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  transition: ".3s linear",
};

interface tabsSelectionProps {
  value: string;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export default function TabsSelection({
  value,
  handleChange,
}: tabsSelectionProps) {
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
        key={"1"}
        value="1"
        icon={value > "1" ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        style={value == "1" ? styles : {}}
        iconPosition="start"
        label={<div className="text-md">Información Personal</div>}
      />
      <Tab
        key={"2"}
        value="2"
        icon={value > "2" ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        style={value == "2" ? styles : {}}
        iconPosition="start"
        label={<p className="text-md">Información residencia</p>}
      />
      <Tab
        key={"3"}
        value="3"
        icon={value > "3" ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        style={value == "3" ? styles : {}}
        iconPosition="start"
        label={<p className="text-md">Información Acudientes</p>}
      />
    </TabList>
  );
}
