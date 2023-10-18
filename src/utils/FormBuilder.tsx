import { Fragment, ReactNode } from "react";
import {
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormElement } from "../models/FormElement";
import dayjs, { Dayjs } from "dayjs";
import PasswordMeterInput from "@/components/PasswordMeter";

type FormBuilderProps = {
  boxType: "div" | "form";
  boxStyles: object;
  elements: FormElement[];
};

function FormBuilder({ boxType, boxStyles, elements }: FormBuilderProps) {
  const renderFormElement = (element: FormElement): ReactNode => {
    const {
      type,
      name,
      value,
      options,
      multiple,
      label,
      className,
      styles,
      onChange,
    } = element;

    switch (type) {
      case "label":
        return (
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              flexShrink: 0,
              color: "#444400",
              py: "0.4rem",
            }}
          >
            {label}
          </Typography>
        );
      case "text":
      case "email":
        return (
          <TextField
            className={className}
            label={label}
            value={value}
            onChange={({ target: { value } }) =>
              onChange(name?.split(".") as string[], value)
            }
            name={name}
          />
        );

      case "password":
        return (
          <PasswordMeterInput
            label={label as string}
            name={name as string}
            value={value as string}
            onChange={({ target: { value } }) =>
              onChange(name?.split(".") as string[], value)
            }
          />
        );

      case "select":
        if (options?.length && options.length > 0) {
          return (
            <FormControl sx={styles}>
              <InputLabel className={className + " bg-white pr-2"}>
                {label}
              </InputLabel>
              <Select
                multiple={multiple}
                value={value as string[]}
                onChange={({ target: { value } }) => {
                  onChange(name?.split(".") as string[], value);
                }}
                input={<OutlinedInput label="Name" />}
              >
                {options.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        }
        return null;

      case "datePicker":
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className={className}
              label={label as string}
              value={dayjs(value as string)}
              views={["year", "month", "day"]}
              onAccept={(value) =>
                onChange(
                  name?.split(".") as string[],
                  dayjs(value as Dayjs).format("YYYY-MM-DD")
                )
              }
            />
          </LocalizationProvider>
        );

      default:
        return null;
    }
  };

  return (
    <Box component={boxType} sx={boxStyles}>
      {elements.map((element, index) => (
        <Fragment key={index}>{renderFormElement(element)}</Fragment>
      ))}
    </Box>
  );
}

export default FormBuilder;
