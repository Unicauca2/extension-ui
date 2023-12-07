import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "primerNombre",
    headerName: "Primer Nombre",
    width: 150,
    editable: true,
  },
  {
    field: "segundoNombre",
    headerName: "Segundo Nombre",
    width: 150,
    editable: true,
  },
  {
    field: "primerApellido",
    headerName: "Primer Apellido",
    width: 150,
    editable: true,
  },
  {
    field: "segundoApellido",
    headerName: "Segundo Apellido",
    width: 150,
    editable: true,
  },
  {
    field: "edad",
    headerName: "Edad",
    type: "number",
    width: 50,
    editable: true,
  },
  {
    field: "estado",
    headerName: "Estado",
    width: 70,
    renderCell: (params: GridCellParams) => {
      const isApproved = params.row.estado === "aprobado";

      if (isApproved) {
        return <CheckIcon style={{ color: "green" }} />;
      } else if (params.row.estado === "desaprobado") {
        return <CloseIcon style={{ color: "red" }} />;
      } else {
        return <WarningIcon style={{ color: "#CE8534" }} />;
      }
    },
  },
  {
    field: "actions",
    headerName: "Acciones",
    width: 250,
    renderCell: (params: GridCellParams) => (
      <div>
        <Button
          className="bg-[#52A847] text-[#fff] hover:bg-[#52A847]/80  mr-1"
          onClick={() => handleApproveClick(params.id as number)}
        >
          Aceptar
        </Button>
        <Button
          className="bg-[#C11818] text-[#fff] hover:bg-[#C11818]/80"
          onClick={() => handleDisapproveClick(params.id as number)}
        >
          Rechazar
        </Button>
      </div>
    ),
  },
];

let rows = [
  {
    id: 1,
    primerNombre: "Jon",
    segundoNombre: "Jon",
    primerApellido: "Snow",
    segundoApellido: "Snow",
    edad: 35,
  },
  {
    id: 2,
    primerNombre: "Cersei",
    segundoNombre: "Cersei",
    primerApellido: "Lannister",
    segundoApellido: "Lannister",
    edad: 42,
  },
  {
    id: 3,
    primerNombre: "Jaime",
    segundoNombre: "Jaime",
    primerApellido: "Lannister",
    segundoApellido: "Lannister",
    edad: 45,
  },
  {
    id: 4,
    primerNombre: "Arya",
    segundoNombre: "Arya",
    primerApellido: "Stark",
    segundoApellido: "Stark",
    edad: 16,
  },
  {
    id: 5,
    primerNombre: "Daenerys",
    segundoNombre: "Daenerys",
    primerApellido: "Targaryen",
    segundoApellido: "Targaryen",
    edad: null,
  },
  {
    id: 6,
    primerNombre: null,
    segundoNombre: null,
    primerApellido: "Melisandre",
    segundoApellido: "Melisandre",
    edad: 150,
  },
  {
    id: 7,
    primerNombre: "Ferrara",
    segundoNombre: "Ferrara",
    primerApellido: "Clifford",
    segundoApellido: "Clifford",
    edad: 44,
  },
  {
    id: 8,
    primerNombre: "Rossini",
    segundoNombre: "Rossini",
    primerApellido: "Frances",
    segundoApellido: "Frances",
    edad: 36,
  },
  {
    id: 9,
    primerNombre: "Harvey",
    segundoNombre: "Harvey",
    primerApellido: "Roxie",
    segundoApellido: "Roxie",
    edad: 65,
  },
  {
    id: 11,
    primerNombre: "Jon",
    segundoNombre: "Jon",
    primerApellido: "Snow",
    segundoApellido: "Snow",
    edad: 35,
  },
  {
    id: 12,
    primerNombre: "Cersei",
    segundoNombre: "Cersei",
    primerApellido: "Lannister",
    segundoApellido: "Lannister",
    edad: 42,
  },
  {
    id: 13,
    primerNombre: "Jaime",
    segundoNombre: "Jaime",
    primerApellido: "Lannister",
    segundoApellido: "Lannister",
    edad: 45,
  },
  {
    id: 14,
    primerNombre: "Arya",
    segundoNombre: "Arya",
    primerApellido: "Stark",
    segundoApellido: "Stark",
    edad: 16,
  },
  {
    id: 15,
    primerNombre: "Daenerys",
    segundoNombre: "Daenerys",
    primerApellido: "Targaryen",
    segundoApellido: "Targaryen",
    edad: null,
  },
  {
    id: 16,
    primerNombre: null,
    segundoNombre: null,
    primerApellido: "Melisandre",
    segundoApellido: "Melisandre",
    edad: 150,
  },
  {
    id: 17,
    primerNombre: "Ferrara",
    segundoNombre: "Ferrara",
    primerApellido: "Clifford",
    segundoApellido: "Clifford",
    edad: 44,
  },
  {
    id: 18,
    primerNombre: "Rossini",
    segundoNombre: "Rossini",
    primerApellido: "Frances",
    segundoApellido: "Frances",
    edad: 36,
  },
  {
    id: 19,
    primerNombre: "Harvey",
    segundoNombre: "Harvey",
    primerApellido: "Roxie",
    segundoApellido: "Roxie",
    edad: 65,
  },
];

const handleApproveClick = (id: number) => {
  // Encuentra la fila con el ID dado y establece su estado como "aprobado"
  const updatedRows = rows.map((row) =>
    row.id === id ? { ...row, estado: "aprobado" } : row
  );
  // Actualiza las filas
  rows = updatedRows;
};

const handleDisapproveClick = (id: number) => {
  // Encuentra la fila con el ID dado y establece su estado como "desaprobado"
  const updatedRows = rows.map((row) =>
    row.id === id ? { ...row, estado: "desaprobado" } : row
  );
  // Actualiza las filas
  rows = updatedRows;
};

interface Props {
  onCellClick: (rowData: any) => void;
}

export default function DataGridDemo({ onCellClick }: Props) {
  const [selectionModel, setSelectionModel] = useState<number[]>([]);

  const handleCellClick = (params: GridCellParams) => {
    if (selectionModel.length === 1 && selectionModel[0] === params.id) {
      setSelectionModel([]);
      onCellClick(null);
    } else {
      setSelectionModel([params.id as number]);
      onCellClick(params.row);
    }
  };

  return (
    <Box>
      <DataGrid
        sx={{
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "rgba(26, 85, 170, 0.5)",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        rows={rows}
        columns={columns}
        checkboxSelection
        onCellClick={handleCellClick}
        rowSelectionModel={selectionModel}
      />
    </Box>
  );
}
