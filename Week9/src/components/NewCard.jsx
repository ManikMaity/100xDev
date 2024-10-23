import React, { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary';

function NewCard() {

    useEffect(() => {
        console.log("Component mounted")
        throw new Error("Something went wrong");
        
    }, [])


  return (
    <div className='min-h-4 min-w-6 max-w-md p-6 m-3 rounded-md bg-gray-900'>
      <img src="https://placehold.co/600x400" alt="" />
    </div>
  )
}

export default NewCard
