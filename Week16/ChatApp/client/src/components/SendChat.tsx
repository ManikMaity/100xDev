import React from 'react'

function SendChat() {
  return (
    <div className='w-full h-full bg-slate-800 rounded-lg'>
      <form className='flex justify-between w-full h-full p-2'>
        <input placeholder="Type a message" type="text" className='w-[90%] h-full outline-none p-2' />
        <button type='submit' className='w-[9%] h-full bg-slate-600'>Send</button>
      </form>
    </div>
  )
}

export default SendChat
