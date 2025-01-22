import { TextInput } from "@repo/ui/textInput";
import "./roomStyle.css";

async function ChatRoom({params}: {params: any}) {
    const roomId = await params.roomId;
  return (
    <div className="chatroom">
      <p>roomId: {roomId}</p>
      <div className="chat">
        <p>Hello</p>
      </div>
      <div>
        <TextInput/>
        <button type="button" className="btn">Send</button>
      </div>
    </div>
  )
}

export default ChatRoom;
