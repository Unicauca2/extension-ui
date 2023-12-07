import { ListItemIcon } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";

interface Props {
  key: string;
}

export default function GlobalIcon({ key }: Props) {
  console.log(key);
  switch (key) {
    case "inboxIcon":
      return (
        <ListItemIcon>
          <InboxIcon className="ml-2" />
        </ListItemIcon>
      );
    default:
      return <h1>Fuckit</h1>;
  }
}
