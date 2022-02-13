import React from "react";

export default function FormField({
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
