import React, { useState } from "react";

interface Option {
  id: number;
  label: string;
  semester: string;
  code: string;
}

interface IDynamicSelectItems {
  index: number;
  handleChange: (value: number, index: number) => void;
  assignatures: { id: number; label: string; semester: string; code: string }[];
}
export default function DynamicSelectItems({
  index,
  handleChange,
  assignatures,
}: IDynamicSelectItems) {
  const [inputText, setInputText] = useState<string>("");
  const [options, setOptions] = useState<Option[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setInputText(newText);
    const newOptions: Option[] = generateOptions(newText);
    setOptions(newOptions);
  };

  const generateOptions = (text: string): Option[] => {
    return assignatures.filter((assignature) => {
      if (assignature.label.toLowerCase().includes(text.toLowerCase())) {
        return true;
      }
      if (assignature.code.toLowerCase().includes(text.toLowerCase())) {
        return true;
      }
      return false;
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Búsqueda..."
      />
      {options.length > 0 && (
        <div>
          <select
            defaultValue=""
            onChange={({ target: { value } }) => handleChange(+value, index)}
          >
            <option disabled value="">
              Seleccione una materia
            </option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label} - ({option.code})
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
