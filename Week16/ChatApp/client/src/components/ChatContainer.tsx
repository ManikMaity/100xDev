import ChatView from "./ChatView"
import SendChat from "./SendChat"

function ChatContainer() {
  return (
    <div className='h-screen w-screen flex justify-between bg-white flex-col p-2'>
      <div className="w-full h-[90%]">
        <ChatView/>
      </div>
      <div className="w-full h-[9%]">
        <SendChat/>
      </div>
    </div>
  )
}

export default ChatContainer
