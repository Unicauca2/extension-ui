"use client"

import {Box, Collapse, Button} from '@mui/material';
import Image from 'next/image'
import logoConservatorio from 'public/conservatorio/logo.png'
import NestedList from './NestedList';
import {useState } from 'react';
import {KeyboardDoubleArrowLeftOutlined, 
        KeyboardDoubleArrowRightOutlined} from '@mui/icons-material';

const listItems =[
  {
    title: "Estudiante",
    icon: "studentIcon",
    items: [
      {label: "Notas"},
      {label: "Faltas"},
      {label: "Historia académica"},
      {label: "Matricula Financiera"},
      {label: "Pensum/Currículo"}
    ]
  }
]
export default function HorizontalCollapse() {
  const [collapsed, setCollapsed] = useState(false);
  const handleChange = () => {
    setCollapsed((prev) => !prev);
  };
  const handleListOpen = () => {
    setCollapsed(false)
  }
  return (
    <Box className="m-4" >
      <Collapse orientation="horizontal" in={!collapsed} collapsedSize={70}>
        <Box className="bg-[#ffffff] w-full min-w-min min-h-[400px] h-[95vh] rounded-3xl">
          <Button onClick={handleChange} className={!collapsed ? 'ml-[70%]':'ml-0'}>
            {collapsed ?<KeyboardDoubleArrowRightOutlined className='text-[#000066]'/>: <KeyboardDoubleArrowLeftOutlined className='text-[#000066]'/>}
          </Button>
          <div className='flex'>
              <Image src={logoConservatorio} width={50} alt="logoC" className={collapsed ? 'ml-[0.65rem] my-4'  : 'mx-auto my-4'}/>
          </div>
          <div className=' h-[73vh] h-min-[500px] overflow-y-auto '>
            { listItems.map((item,index)=>(
                <div key={index}>
                  <NestedList title={item.title} collapsed={collapsed} icon={item.icon} items={item.items} handleOpenInteraction={handleListOpen} openM={(index==0)?true:false}/>
                </div>
              ))
            }
          </div>
        </Box>
      </Collapse>
    </Box>

  );
}