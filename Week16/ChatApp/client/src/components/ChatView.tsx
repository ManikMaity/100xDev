import React from 'react'
import ChatBubble from './ChatBubble'

function ChatView() {
  return (
    <div className='w-full h-full overflow-y-scroll bg-slate-900 rounded-lg'>
      <ChatBubble chatMessage='This is a default message'/>
    </div>
  )
}

export default ChatView
