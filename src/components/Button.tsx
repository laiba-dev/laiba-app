import React from "react";

export default function Button({
  text,
  onClick,
  disabled = false,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  const customOnClick = () => {
    if (!disabled) {
      return onClick();
    }
  };
  return (
    <button
      className="button"
      style={disabled ? { backgroundColor: "#e2e2e2" } : undefined}
      onClick={customOnClick}
    >
      {text}
    </button>
  );
}
