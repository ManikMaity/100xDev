import React from 'react'

function Button({children, disabled = false, style = {} , onClick}) {
  return (
    <button onClick={onClick} disabled={disabled} style={style} className="disabled:bg-slate-400 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-70 bg-cyan-500 w-full text-white px-6 py-2 rounded-md mt-8">
      {children}
      </button>
  )
}

export default Button
