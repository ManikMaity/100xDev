import React from "react";

function TextInput({
  type = "text",
  label = "Input",
  placeholder = "Placeholder",
  value = "",
  onChange,
}: {
  type: "text" | "password";
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col max-w-md p-3 rounded-md gap-2 bg-gray-900/20">
      <label htmlFor={label}>{label}</label>
      <input
        className="p-2 border border-gray-300 rounded-md outline-none text-black"
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
