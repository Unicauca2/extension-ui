"use client";

import GlobalIcon from "@/components/GlobalIcon";
import { List, ListItem, ListItemIcon, ListItemText, Tooltip} from "@mui/material";
import React from "react";
import { subjectsObj } from "../models/subjectsEnableInitialValues" 

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
  subjectBlock:string[];
}

export default function ListSubjects({
  setDragActive,
  dragSubject,
  subjectsEnable,
  subjectsAssigned,
  subjectBlock
}: Props) {
  function handleOnDrag(e: React.DragEvent, item: any) {
    var dragImage = document.createElement("div");
    dragImage.className = `drag-icon absolute top-[-100px] rigth-0 ${item.color} rounded-2xl w-[150px] break-word max-h-[100px] text-center text-white content-center`;
    dragImage.textContent = item.name;
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 0, 0);
    dragSubject.current = item.id;
    setDragActive(true);
  }

  function validateDragSubject(idSuject:number){
    let resp:string="";

    subjectsEnable.find((e)=>(e.id==idSuject))?.slots.map(
      (slotList)=>{
        for (let i = 0; i < slotList.duration; i++) {
          for (let j = 0; j < subjectBlock.length; j++) {
            let block=subjectBlock[j].split("-");
            if(parseInt(block[0])==slotList.idDay && 
                parseInt(block[1])==(slotList.idStart + i) && 
                parseInt(block[2])!=idSuject
              ){
                let subject=subjectsEnable.find((e)=>(e.id==parseInt(block[2])));
                if(subject){
                  resp=subject.name;
                  break;
                }}}
          if(resp!=""){break;}
        }});
    return resp
  }

  function Lista(item:subjectsObj, index:number){
    let validation:string=validateDragSubject(item.id);
    if(validation==""){
      return(
        <ListItem
          key={index}
          className={`p-0 m-1 rounded-xl ${item.color}`}
          draggable
          onDragStart={(e) => handleOnDrag(e, item)}
          onDragEnd={() => setDragActive(false)}
        >
          <ListItemIcon className="text-white p-1 ml-2">
            <GlobalIcon nameIcon={"listOutlined"} />
          </ListItemIcon>
          <ListItemText className="text-white p-0.5 m-0">
            {item.name}
          </ListItemText>
        </ListItem>
      );
    }else{
      return(
        <Tooltip 
          title={"inhabilitado por "+validation}
          placement="right"
        >
          <ListItem
            key={index}
            className={`p-0 m-1 rounded-xl ${item.color} disabled:opacity-75`}
            disabled
          >
            <ListItemIcon className="text-white p-1 ml-2">
              <GlobalIcon nameIcon={"listOutlined"} />
            </ListItemIcon>
            <ListItemText className="text-white p-0.5 m-0">
              {item.name}
            </ListItemText>
          </ListItem>
        </Tooltip>
      )
    }
  }

  return (
    <List className="w-full px-1">
      {subjectsEnable.map((item, index) =>
        subjectsAssigned.find((e) => e == item.id) ? null : Lista(item,index)
      )}
    </List>
  );
}
