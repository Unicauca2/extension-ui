"use client"

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import NestedList from './List';
import { useState } from 'react';

const ListItems = [
  {
    label: "Inscripciones"
  },
  {
    label: "Matrícula"
  },
  {
    label: "Procesos"
  },
  {
    label: "Oferta Academica"
  },
  {
    label: "Cursos"
  },
  {
    label: "Aspirantes"
  },
  {
    label: "Estudiantes"
  },
  {
    label: "Docentes"
  },
  {
    label: "Estadisticas"
  },
  {
    label: "Reportes"
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
    <Box sx={{ margin: "1rem" }}>
      <Collapse orientation="horizontal" in={!collapsed} collapsedSize={70} >
        <Box sx={{ background: "white", height: "95vh", minWidth: "200px", borderRadius: "24px" }}  >
          <Button sx={{
              marginLeft: !collapsed ? 16 : 0,
              width: 5,
              height: 30,
            }}
            onClick={handleChange}
          >
            {collapsed ? ">>" : "<<"}
          </Button>
          <div className='flex'>
            <img className={collapsed ? "ml-[0.65rem]" : 'mx-auto'} src="../../conservatorio/logo.png" width="50" />
          </div>
          <NestedList title={"Coordinador"} items={ListItems} collapsed={collapsed} handleOpenInteraction={handleListOpen} />
        </Box>
      </Collapse>
    </Box>

  );
}