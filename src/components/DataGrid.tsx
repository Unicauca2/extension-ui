import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";
import { ApiResponse } from "@/models/PROVISIONALEnrollmentFetch";

function getColumnData(
  rows: IRows,
  setRowData: React.Dispatch<React.SetStateAction<IRows>>
) {
  const columns: GridColDef[] = [
    {
      field: "fullName",
      headerName: "Nombre completo",
      width: 300,
    },
    {
      field: "identification",
      headerName: "Identificacion",
      width: 100,
    },
    {
      field: "birthDate",
      headerName: "Nacimiento",
      width: 100,
    },
    {
      field: "state",
      headerName: "Estado",
      width: 70,
      renderCell: (params: GridCellParams) => {
        const isApproved = params.row.state & 16;
        if (isApproved) {
          return <CheckIcon style={{ color: "green" }} />;
        } else if (params.row.state & 1048576) {
          return <CloseIcon style={{ color: "red" }} />;
        } else {
          return <WarningIcon style={{ color: "#CE8534" }} />;
        }
      },
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 220,
      renderCell: (params: GridCellParams) => (
        <div>
          <Button
            className="bg-[#52A847] text-[#fff] hover:bg-[#52A847]/80  mr-1"
            onClick={() =>
              handleReview(
                params.id as number,
                rows,
                16 /** Inscripcion calificada */,
                1048576,
                setRowData
              )
            }
          >
            Aceptar
          </Button>
          <Button
            className="bg-[#C11818] text-[#fff] hover:bg-[#C11818]/80"
            onClick={() =>
              handleReview(
                params.id as number,
                rows,
                1048576 /** Inscripcion inconsistencia */,
                16,
                setRowData
              )
            }
          >
            Rechazar
          </Button>
        </div>
      ),
    },
  ];
  return columns;
}

function getRowData(data: ApiResponse) {
  const rows: IRows = [];
  for (let entry in data.result) {
    const aux = data.result[entry];
    rows.push({
      id: aux.id,
      fullName:
        aux.enrollmentP.applicant.firstName +
        " " +
        aux.enrollmentP.applicant.secondName +
        " " +
        aux.enrollmentP.applicant.firstLastName +
        " " +
        aux.enrollmentP.applicant.secondLastName,
      identification: aux.enrollmentP?.applicant?.identification,
      birthDate: aux.enrollmentP?.applicant?.birthDate.split("T")[0],
      state: aux.enrollmentP?.state,
    });
  }
  return rows;
}

const handleReview = (
  id: number,
  rows: IRows,
  newState: number,
  counterState: number,
  setRowData: React.Dispatch<React.SetStateAction<IRows>>
) => {
  const updatedRows = rows.map((row) => {
    if (row.id === id) {
      let calc = row.state;
      if (calc & counterState) {
        calc -= counterState;
      }
      return { ...row, state: calc + newState };
    }
    return row;
  });
  setRowData(updatedRows);
};

export type IRows = {
  id: number;
  fullName: string;
  identification: string;
  state: number;
  birthDate: string;
}[];
interface Props {
  onCellClick: (rowData: any) => void;
  rawData: ApiResponse;
  handleSubmit: (data: IRows) => void;
}
export default function DataGridDemo({
  onCellClick,
  rawData,
  handleSubmit,
}: Props) {
  const [selectionModel, setSelectionModel] = useState<number[]>([]);
  const [rowData, setRowData] = useState<IRows>(getRowData(rawData));

  const handleCellClick = (params: GridCellParams) => {
    if (selectionModel?.length === 1 && selectionModel[0] === params.id) {
      setSelectionModel([]);
      onCellClick(null);
    } else {
      setSelectionModel([params.id as number]);
      onCellClick(params.row);
    }
  };

  function confirmTableFilled() {
    return rowData.some((item) => item.state === 1);
  }

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
        rows={rowData}
        columns={getColumnData(rowData, setRowData)}
        checkboxSelection
        onCellClick={handleCellClick}
        rowSelectionModel={selectionModel}
      />
      <Button
        onClick={() => handleSubmit(rowData)}
        disabled={confirmTableFilled()}
      >
        Confirmar cambios
      </Button>
    </Box>
  );
}
