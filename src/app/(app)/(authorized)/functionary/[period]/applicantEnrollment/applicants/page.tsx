"use client";

import DataGridDemo from "@/components/DataGrid";
import FileRendered from "@/components/FileRendered";
import { useState } from "react";

export default function ApplicantList() {
  const [cellSelected, setCellSelected] = useState<any>(null);
  return (
    <>
      <div className="w-2/3">
        <DataGridDemo
          onCellClick={(cell: any) => {
            setCellSelected(cell);
          }}
        />
      </div>
      <div className="w-1/3">
        {cellSelected && (
          <>
            <p>{cellSelected.id}</p>
            <FileRendered src="/app/cedula.jpg" type="jpg" />
          </>
        )}
      </div>
    </>
  );
}
