import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ReactNode, useState } from "react";
import { iconButtonClasses } from "@mui/joy";
import GlobalIcon from "./GlobalIcon";

interface Props {
  title: string;
  icon: string;
  items: {
    label: string;
    url?: string;
  }[];
  collapsed?: boolean;
  handleOpenInteraction?: () => void;
}

export default function NestedList({
  title,
  icon,
  items,
  collapsed,
  handleOpenInteraction,
}: Props) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    if (collapsed && handleOpenInteraction) {
      handleOpenInteraction();
      setOpen(true);
      return;
    }
    setOpen(!open);
  };
  console.log(icon);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        borderRadius: "20px",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        {!collapsed && <ListItemText primary={title} />}
        {icon && <GlobalIcon inboxIcon />}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open && !collapsed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item, index) => (
            <ListItemButton key={index} sx={{ pl: 5, py: 0 }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
