import React from "react";

const textInputStyle = {
  padding : '10px',
  margin : '10px',
  borderRadius : '25px',
  border : 'none',
  outline : 'none'
}

export function TextInput({placeholder, className, value, onChange}: {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <input type="text" name="" style={textInputStyle} id="" value={value} onChange={onChange} className={className} placeholder={placeholder}/>
  )
}

