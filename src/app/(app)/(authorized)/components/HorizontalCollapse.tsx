"use client";

import { Box, Collapse, Button } from "@mui/material";
import Image from "next/image";
import logoConservatorio from "public/conservatorio/logo.png";
import NestedList from "../student/academicEnrollment/components/NestedList";
import { useState } from "react";
import {
  KeyboardDoubleArrowLeftOutlined,
  KeyboardDoubleArrowRightOutlined,
} from "@mui/icons-material";
import { optionsObj, menuOptions } from "../models/menuInitialValues";

interface Props {
  roles:string[]
}

export default function HorizontalCollapse(
  {roles}: Props
) {
  const [collapsed, setCollapsed] = useState(false);

  const listItems:optionsObj[] = [];
  roles.forEach(
    (rol)=>{
      let options=menuOptions.find((e)=>(e.typeUser==rol));
      if(options){
        listItems.push(options);
      }
    }
  );
  
  const handleChange = () => {
    setCollapsed((prev) => !prev);
  };
  const handleListOpen = () => {
    setCollapsed(false);
  };
  return (
    <Collapse orientation="horizontal" in={!collapsed} collapsedSize={68}>
      <Box className="bg-[#ffffff] w-full">
        <Button
          onClick={handleChange}
          className={!collapsed ? "ml-[70%]" : "ml-1"}
        >
          {collapsed ? (
            <KeyboardDoubleArrowRightOutlined className="text-[#000066]" />
          ) : (
            <KeyboardDoubleArrowLeftOutlined className="text-[#000066]" />
          )}
        </Button>
        <div className="flex">
          <Image
            src={logoConservatorio}
            width={50}
            alt="logoC"
            className={collapsed ? "ml-[0.65rem] my-4" : "mx-auto my-4"}
          />
        </div>
        <div className="h-full">
          {listItems.map((item, index) => (
            <div key={index}>
              <NestedList
                title={item.title}
                collapsed={collapsed}
                icon={item.icon}
                items={item.items}
                handleOpenInteraction={handleListOpen}
                urlRoot={"/"+item.typeUser}
                openM={index == 0 ? true : false}
              />
            </div>
          ))}
        </div>
      </Box>
    </Collapse>
  );
}
