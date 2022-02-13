import React from "react";

export default function FormField({
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
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
