import React, { useState } from "react";

interface Option {
  id: number;
  code: string;
}

interface EmailInputProps {
  maxItems: number;
  placeholder: string;
  index: number;
  handleChange: (value: number[], index: number) => void;
  handleRemoveItem: (index: number) => void;
  students: { id: number; code: string }[];
}
const DinamycInputItems: React.FC<EmailInputProps> = ({
  maxItems,
  placeholder,
  index,
  handleChange,
  handleRemoveItem,
  students,
}) => {
  const [items, setItems] = useState<number[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [options, setOptions] = useState<Option[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setInputSearch(newText);
    const newOptions: Option[] = generateOptions(newText);
    setOptions(newOptions);
  };

  const generateOptions = (text: string): Option[] => {
    if (text.trim() === "") {
      return [];
    }
    return students.filter((student) => {
      if (student.code.toLowerCase().includes(text.toLowerCase())) {
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
    console.log(value);
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
                {option.code}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        {items.map((email, index) => (
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
            {email}
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
