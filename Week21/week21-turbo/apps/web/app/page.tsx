"use client";
import { TextInput } from "@repo/ui/textInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Home() {

  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  return (
    <div className="chatapp">
      <div className="join">
      <TextInput className="roomid" placeholder="Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)}/>
      <button type="button" className="btn" onClick={() => router.push(`/room/${roomId}`)}>
        Join Channel
      </button>
      </div>
    </div>
  )
}

export default Home;
