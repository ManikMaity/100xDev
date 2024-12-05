
import React, { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const socket = useRef<null | WebSocket>(null);

  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (message) => {
      setDate(message.data);
    }
    socket.current = ws;
  }, [])


  function sendMessage(e : React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (!socket.current){
      alert("Socket is not defined");
      return;
    }
    socket.current.send(message);
  }

  return (
    <div>
      <h2>Ping App</h2>

      <div>

      </div>
      <p>{date}</p>
      <form style={{ display: "flex", gap: "10px" , alignItems: "center"}}>
        <input type="text" name="" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' style={{ width: "200px", height: "20px", padding: "5px" }} id="" />
        <button onClick={sendMessage} type="submit">Send</button>
      </form>
    </div>
  )
}

export default App
