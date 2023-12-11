import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import GlobalIcon from "@/components/GlobalIcon";

interface Props {
  title: string;
  icon: string;
  items: {
    icon: string;
    label: string;
    url: string;
  }[];
  collapsed?: boolean;
  handleOpenInteraction?: () => void;
  urlRoot:string;
  openM: boolean;
}

export default function NestedList({
  title,
  icon,
  items,
  collapsed,
  handleOpenInteraction,
  urlRoot,
  openM,
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
    <List
      className="w-full mr-10 rounded-[20px]"
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        {icon && <ListItemIcon><GlobalIcon nameIcon={icon} className="text-[#000066] ml-1" /></ListItemIcon>}
        {!collapsed && (
          <ListItemText
            primary={title}
            className="text-[#000066] font-sans font-bold mr-2 ml-0"
          />
        )}
        {open ? (
          <ExpandLess className="text-[#000066]" />
        ) : (
          <ExpandMore className="text-[#000066]" />
        )}
      </ListItemButton>
      <Collapse in={open && !collapsed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className="overflow-auto">
          {items.map((item, index) => (
            <ListItemButton key={index} className="pl-5 py-0" href={urlRoot+item.url}>
              <ListItemText
                primary={item.label}
                className="text-[#000066] font-sans font-bold left-0"
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
