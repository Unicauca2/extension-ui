import PasswordMeterInput from "@/components/PasswordMeter";
import dayjs, { Dayjs } from "dayjs";
import { usePersonRegister } from "../hooks/usePersonRegister";
import { Box, Select, MenuItem, SelectChangeEvent, TextField, FormControl, InputLabel } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getBloodTypes, getDocumentTypes, getGenderTypes } from "@/services/types";
import { ApplicantRegistry } from "./ApplicantRegistry";
import { Credential } from "@/app/login/models/Credential";

export interface Applicant {
  firstName: string,
  secondName: string,
  firstLastName: string,
  secondLastName: string,
  identification: string,
  expeditionDate: Dayjs,
  birthDate: Dayjs,
  identificationDocumentType: string,
  cellPhone: string,
  bloodType: string,
  email: string,
  gender: string,
  eps: string,
  document: File,
}

interface Props {
  applicant: Applicant,
  credentials: Credential,
  handleInputChange: ({ target }: any, name?: string | undefined) => void
}

export function getApplicantForm({ applicant, credentials, handleInputChange }: Props) {
  const handleSelectChange = (event: SelectChangeEvent) => {
    handleInputChange({
      target: {
        name: event.target.name,
        value: event.target.value
      }
    })
  }
  const handleDateChange = (value: dayjs.Dayjs | null, name: string) => {
    handleInputChange({
      target: {
        name: name,
        value: dayjs(value).format("YYYY-MM-DD"),
      }
    })
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "23%" },
        "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
          borderRadius: "25px"
        },
        "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
          borderRadius: "25px"
        },
        "& .MuiStack-root": {
          width: "24.6%"
        },
        "& .MuiSelect-select": {
          backgroundColor: "inherit"
        },
        "& .css-h0q0iv-MuiButtonBase-root-MuiTab-root.Mui-selected": {
          color: "inherit"
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        label="Primer nombre"
        name="applicant.firstName"
        value={applicant.firstName}
        onChange={handleInputChange}
      />
      <TextField
        required
        label="Segundo nombre"
        name="applicant.secondName"
        value={applicant.secondName}
        onChange={handleInputChange}
      />
      <TextField
        required
        label="Primer apellido"
        name="applicant.firstLastName"
        value={applicant.firstLastName}
        onChange={handleInputChange}
      />
      <TextField
        required
        label="Segundo apellido"
        name="applicant.secondLastName"
        value={applicant.secondLastName}
        onChange={handleInputChange}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Fecha de nacimiento"
          value={dayjs(applicant.birthDate)}
          views={["year", "month", "day"]}
          onAccept={(value) => handleDateChange(value, "applicant.birthDate")}
        />
      </LocalizationProvider>
      <FormControl sx={{ m: "8px", width: "23%" }} >
        <InputLabel id="selectDocumentType">Tipo de documento</InputLabel>
        <Select
          required
          name="applicant.identificationDocumentType"
          value={applicant.identificationDocumentType}
          onChange={handleSelectChange}
          style={{ borderRadius: "25px" }}
        >
          {getDocumentTypes().map((documentType) => (
            <MenuItem key={documentType.value} value={documentType.value}>{documentType.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        required
        label="Numero Identificacion"
        name={"applicant.identification"}
        value={applicant.identification}
        onChange={handleInputChange}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Fecha de expedición"
          value={dayjs(applicant.expeditionDate)}
          views={["year", "month", "day"]}
          onAccept={(value) => handleDateChange(value, "applicant.expeditionDate")}
        />
      </LocalizationProvider>
      <FormControl sx={{ m: "8px", width: "23%" }} >
        <InputLabel id="selectDocumentType">Género</InputLabel>
        <Select
          required
          name="applicant.gender"
          value={applicant.gender}
          onChange={handleSelectChange}
          style={{ borderRadius: "25px" }}
        >
          {getGenderTypes().map((gender) => (
            <MenuItem key={gender.value} value={gender.value}>{gender.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        required
        label="Celular"
        name="applicant.cellPhone"
        value={applicant.cellPhone}
        onChange={handleInputChange}
      />
      <TextField
        required
        label="EPS"
        name="applicant.eps"
        value={applicant.eps}
        onChange={handleInputChange}
      />
      <FormControl sx={{ m: "8px", width: "23%" }} >
        <InputLabel id="">Tipo de sangre</InputLabel>
        <Select
          required
          name="applicant.bloodType"
          value={applicant.bloodType}
          onChange={handleSelectChange}
          style={{ borderRadius: "25px" }}
        >
          {getBloodTypes().map((bloodType) => (
            <MenuItem key={bloodType.value} value={bloodType.value}>{bloodType.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        required
        label="Correo electrónico"
        name="applicant.email"
        value={applicant.email}
        onChange={handleInputChange}
      />
      <PasswordMeterInput name="credentials.password" value={credentials.password} handleInputChange={handleInputChange} />
    </Box>
  );
}