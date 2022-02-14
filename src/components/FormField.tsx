import React from "react";

export function FormField({
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
}: {
  type: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder: string;
  disabled?: boolean;
}) {
  return (
    <input
      type={type}
      className="formField"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export function Select({
  value,
  data,
  onChange,
}: {
  value: string;
  data: Array<string>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select value={value} onChange={onChange} className="formField">
      {data.map((value: string, index: number) => (
        <option value={value} key={index}>
          {value}
        </option>
      ))}
    </select>
  );
}
