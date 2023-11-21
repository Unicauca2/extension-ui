import { ListItemIcon } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SchoolIcon from '@mui/icons-material/SchoolOutlined';

interface Props {
  nameIcon: string
}

export default function GlobalIcon({nameIcon}: Props) {
  switch (nameIcon) {
    case "studentIcon":
      return (
        <ListItemIcon>
          <SchoolIcon className="text-[#000066]"/>
        </ListItemIcon>
      );
    default:
      return <h1>Fuckit</h1>;
  }
}
