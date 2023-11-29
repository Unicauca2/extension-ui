import GlobalIcon from "@/components/GlobalIcon";
import {List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

interface Props {
  dragActive: any;
  setDragActive: any;
  dragSubject: any;
  subjectsAssigned: number[];
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
  subjectsAssigned
}: Props) {  

  function handleOnDrag(e:React.DragEvent, item:any) {
    var dragImage = document.createElement("div");
    dragImage.className=`drag-icon absolute top-[-100px] rigth-0 ${item.color} rounded-2xl w-[150px] break-word max-h-[100px] text-center text-white content-center`;
    dragImage.textContent=item.name;
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 0, 0);  
    dragSubject.current = item.id;
    setDragActive(true);
  }

  return (
    <List className="w-full px-1">
      {subjectsEnable.map((item, index) => (
        subjectsAssigned.find((e)=>(e==item.id))?null:
        <ListItem
          key={index}
          className={`p-0 m-1 rounded-xl ${item.color} disabled:opacity-75`}
          draggable
          onDragStart={(e) => handleOnDrag(e,item)}
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
