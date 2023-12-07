import { Dayjs } from "dayjs";

export type FormElement = {
  id?: string;
  type:
    | "label"
    | "text"
    | "email"
    | "password"
    | "textarea"
    | "checkbox"
    | "radio"
    | "select"
    | "datePicker"
    | "dynamicList"
    | "file"
    | "fileBlock";
  name?: string;
  label?: string;
  value?: string | number | boolean | string[] | Dayjs | File | File[];
  accepts?: string;
  options?: { value: number | string; label: string }[];
  multiple?: boolean;
  checked?: boolean;
  placeholder?: string;
  className?: string;
  subForm?: FormElement[][];
  fileRequirements?: FormElement[];
  index?: number | { row: any; col: any };
  styles?: any;
};
