import GlobalIcon from "@/components/GlobalIcon";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

interface Props {
  dragActive: any;
  setDragActive: any;
  dragSubject: any;
  hours: {
    id: number;
    content: string;
  }[];
  subjectsEnable: {
    id: number;
    name: string;
    code?: string;
    classroom?: string;
    color: string;
    slots: {
      idDay: number;
      idStart: number;
      duration: number;
    }[];
  }[];
}

export default function ListSubjects({
  setDragActive,
  dragSubject,
  subjectsEnable,
}: Props) {
  function handleOnDrag(id: number) {
    dragSubject.current = id;
    setDragActive(true);
  }
  return (
    <List className="w-full px-1">
      {subjectsEnable.map((item, index) => (
        <ListItem
          key={index}
          className={`p-0 m-1 rounded-xl ${item.color} disabled:opacity-75`}
          draggable
          onDragStart={() => handleOnDrag(item.id)}
          onDragEnd={() => setDragActive(false)}
        >
          <ListItemIcon className="text-white p-1 ml-2">
            <GlobalIcon nameIcon={"listOutlined"} />
          </ListItemIcon>
          <ListItemText className="text-white p-0.5 m-0">
            {item.name}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
