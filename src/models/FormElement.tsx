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
  onChange: (propsPath: string[], value: any) => void;
  name?: string;
  label?: string;
  value?: string | number | boolean | string[] | Dayjs | File | File[];
  options?: { value: string; label: string }[]; // Solo para campos select
  multiple?: boolean;
  checked?: boolean; // Solo para campos checkbox y radio
  placeholder?: string; // Solo para campos de texto, email y textarea
  className?: string; // Clases CSS adicionales
  subForm?: FormElement[][]; // Solo para campos dynamicList
  fileRequirements?: FormElement[]; // Solo para campos fileBlock
  index?: number | { row: any; col: any }; // indice de los campos de dynamicList
  styles?: any;
};
