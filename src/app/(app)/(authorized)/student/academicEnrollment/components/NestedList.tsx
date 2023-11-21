import {List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import {ExpandLess, ExpandMore } from "@mui/icons-material";
import {useState} from "react";
import GlobalIcon from "./GlobalIcon";

interface Props {
  title: string,
  icon: string,
  items: {
    label: string,
    url?: string
  }[],
  collapsed?: boolean,
  handleOpenInteraction?: () => void,
  openM: boolean
}

export default function NestedList({
  title,
  icon,
  items,
  collapsed,
  handleOpenInteraction,
  openM
}: Props) {
  const [open, setOpen] = useState(openM);

  const handleClick = () => {
    if (collapsed && handleOpenInteraction) {
      handleOpenInteraction();
      setOpen(true);
      return;
    }
    setOpen(!open);
  };
  return (
    <List className="w-full max-w-[350px] rounded-[20px]" component="nav" aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClick}>
        {icon && <GlobalIcon nameIcon={icon} />}
        {!collapsed && <ListItemText primary={title} className="text-[#000066] font-sans font-bold mr-2 ml-0"/>}
        {open ? <ExpandLess className="text-[#000066]" /> : <ExpandMore className="text-[#000066]"/>}
      </ListItemButton>
      <Collapse in={open && !collapsed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className="overflow-auto">
          {items.map((item, index) => (
            <ListItemButton key={index} className="pl-5 py-0">
              <ListItemText primary={item.label} className="text-[#000066] font-sans font-bold left-0"/>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
