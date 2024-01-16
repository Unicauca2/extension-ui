import React, { useState } from "react";
import { Option } from "../model/TableTypes";

interface EmailInputProps {
  maxItems: number;
  placeholder: string;
  index: number;
  handleChange: (value: number[], index: number) => void;
  handleRemoveItem: (index: number) => void;
  rawOptions: { id: number; label: string }[];
}
const DinamycInputItems: React.FC<EmailInputProps> = ({
  maxItems,
  placeholder,
  index,
  handleChange,
  handleRemoveItem,
  rawOptions,
}) => {
  const [items, setItems] = useState<number[]>([]);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [options, setOptions] = useState<Option[]>(rawOptions);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setInputSearch(newText);
    const newOptions: Option[] = generateOptions(newText);
    setOptions(newOptions);
  };

  const generateOptions = (text: string) => {
    if (text.trim() === "") {
      return [];
    }
    return rawOptions.filter((option) => {
      if (option.label.toLowerCase().includes(text.toLowerCase())) {
        return true;
      }
      return false;
    });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      if (inputSearch.length !== 12) {
        alert("El codigo debe tener 12 caracteres");
        return;
      }
      if (inputSearch.trim() !== "") {
        setInputSearch("");
      }
      event.preventDefault();
    }
  };
  const handleRemoveEmail = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    handleRemoveItem(index);
  };

  const handleSelect = (value: number, index: number) => {
    handleChange([...items, value], index);
    setItems([...items, value]);
  };

  return (
    <div>
      {items.length < maxItems && (
        <input
          type="text"
          placeholder={placeholder}
          minLength={12}
          maxLength={12}
          value={inputSearch}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      )}
      {options.length > 0 && items.length < maxItems && (
        <div>
          <select
            defaultValue={[""]}
            onChange={({ target: { value } }) => handleSelect(+value, index)}
            multiple={true}
          >
            <option disabled value="">
              Seleccione un estudiante
            </option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        {items.map((selected, index) => (
          <div
            key={index}
            style={{
              display: "inline-block",
              margin: "4px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            {selected}
            <span
              style={{
                marginLeft: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                color: "blue",
              }}
              onClick={() => handleRemoveEmail(index)}
            >
              x
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DinamycInputItems;
