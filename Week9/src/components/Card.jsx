import React from 'react'

function Card({children}) {
  return (
    <div className='min-h-4 min-w-6 max-w-md p-6 m-3 rounded-md bg-gray-900'>
      {children}
    </div>
  )
}

export default Card
