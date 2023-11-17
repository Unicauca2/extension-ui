import { Fragment, ReactNode } from "react";
import {
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { esES } from "@mui/x-date-pickers/locales";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormElement } from "../models/FormElement";
import dayjs, { Dayjs } from "dayjs";
import PasswordMeterInput from "@/components/PasswordMeter";
import FileUploadField from "@/components/FileUploadField";

type FormBuilderProps = {
  boxType: "div" | "form";
  boxStyles: object;
  elements: FormElement[];
  handleInputChange: (propsPath: string[], value: any) => void;
};

function FormBuilder({
  boxType,
  boxStyles,
  elements,
  handleInputChange,
}: FormBuilderProps) {
  const renderFormElement = (
    element: FormElement,
    handleInputChange: (propsPath: string[], value: any) => void
  ): ReactNode => {
    const { type, name, value, options, multiple, label, className, styles } =
      element;

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
              handleInputChange(name?.split(".") as string[], value)
            }
            name={name}
            size="small"
          />
        );

      case "password":
        return (
          <PasswordMeterInput
            label={label as string}
            name={name as string}
            value={value as string}
            onChange={({ target: { value } }) =>
              handleInputChange(name?.split(".") as string[], value)
            }
          />
        );

      case "select":
        if (options?.length && options.length > 0) {
          return (
            <FormControl
              sx={{
                ...styles,
              }}
              size="small"
              fullWidth
            >
              <InputLabel id="de">{label}</InputLabel>
              <Select
                labelId="de"
                multiple={multiple}
                value={value as string[]}
                label={label}
                onChange={({ target: { value } }) => {
                  handleInputChange(
                    name?.split(".") as string[],
                    value as string
                  );
                }}
                input={<OutlinedInput label={label} />}
              >
                {options.map((item, itemIndex) => (
                  <MenuItem key={itemIndex} value={item.value}>
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
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={
              esES.components.MuiLocalizationProvider.defaultProps.localeText
            }
          >
            <DatePicker
              className={className}
              label={label as string}
              value={value ? dayjs(value as string) : null}
              views={["year", "month", "day"]}
              onChange={(value) =>
                handleInputChange(
                  name?.split(".") as string[],
                  dayjs(value as Dayjs)
                )
              }
              format="LL"
            />
          </LocalizationProvider>
        );

      case "file":
        const { accepts } = element;
        return (
          <FileUploadField
            document={value as File}
            name={name as string}
            multiple={multiple as boolean}
            label={label as string}
            accepts={accepts as string}
            handleInputChange={handleInputChange}
            className={className as string}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Box component={boxType} sx={boxStyles}>
      {elements.map((element, index) => (
        <Fragment key={index}>
          {renderFormElement(element, handleInputChange)}
        </Fragment>
      ))}
    </Box>
  );
}

export default FormBuilder;
