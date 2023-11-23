import { ListItemIcon } from "@mui/material";
import SchoolIcon from "@mui/icons-material/SchoolOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskIcon from "@mui/icons-material/TaskAltOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SendIcon from "@mui/icons-material/Send";
import { AccountCircleOutlined, LogoutOutlined } from "@mui/icons-material";

interface Props {
  nameIcon: string;
  className?: string;
}

export default function GlobalIcon({ nameIcon, className }: Props) {
  switch (nameIcon) {
    case "studentIcon":
      return (
        <ListItemIcon>
          <SchoolIcon className="text-[#000066] ml-1" />
        </ListItemIcon>
      );
    case "deleteIcon":
      return <DeleteIcon />;
    case "warningIcon":
      return <WarningAmberIcon className={className} />;
    case "accountCircleOutlined":
      return <AccountCircleOutlined className={className} />;
    case "logoutOutlined":
      return <LogoutOutlined className={className} />;
    case "taskIcon":
      return <TaskIcon className={className} />;
    case "listOutlined":
      return <ListOutlinedIcon className={className} />;
    case "sendIcon":
      return <SendIcon className={className} />;
    default:
      return <></>;
  }
}
