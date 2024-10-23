import { useState } from 'react'
import Timer from './components/Timer'
const dummyText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, animi laboriosam. Rerum, recusandae culpa, alias sed molestias at dignissimos et vero voluptate voluptates commodi corrupti, sit in sunt pariatur non?"
import "./App.css"
import Card from './components/Card'
import Hero from './components/Hero'
import ClassBased from './components/ClassBased'
import NewCard from './components/NewCard'
import { ErrorBoundary } from 'react-error-boundary'

function App() {

  const [show, setShow] = useState(true)
  const [showImage, setShowImage] = useState(true)

  return (
    <div style={{display : 'flex', gap: "20px", flexDirection : "column"}}>
      <div>Hi there</div>
      <Post/>
      <button style={{width : 100, height : 40}} onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <Profile/>}
      <Profile name='Manik Maity' profiledes='Web Developer | Tech | College Student | Self Tought' content='What is that?' followers='5k' following='1k' time='1d'/>
      <Timer/>
      <Card>
        <img src="https://placehold.co/600x400" alt="" />
        <p>{"dummyText"}</p>
        <p>{"dummyText"}</p>
      </Card>
      <ClassBased/>
      <button style={{width : 100, height : 40}} onClick={() => setShowImage(!showImage)}>{showImage ? "Hide" : "Show"}</button>
      {showImage &&
    <ErrorBoundary fallback={<div>Something went wrong</div>}>

      <NewCard/>
      </ErrorBoundary>
      }
    </div>

  )
}



function Post() {
  return (
    <div style={{ color: 'red' , backgroundColor: "#252525", borderRadius: 10, padding: 10, width: 600}}>
      <div style={{display : 'flex', gap: "10px", alignItems: "center", justifyContent: "space-between"}}>
        <img src="https://placehold.co/200x200?text=M" style={{height : 60, width: 60, padding : 10, borderRadius: "50%"}} alt="M" />
        <input placeholder='Start a post, or Try AI writter' style={{width : "100%", padding : 10, height : 40, borderRadius: "50px", border : "2px solid gray", backgroundColor: "transparent"}} type="text" name="" id="" />
      </div>
    </div>
  )
}

function Profile({time = "1h", followers = "1k", following = "1k", name = "Shruti Meheta", profiledes = "AI Developer | Tech | College Student", content = dummyText}) {

  const [close,  setClose] = useState(false)
  return (
    <div style={{position : `relative`,  backgroundColor: "#252525", borderRadius: 10, padding: 20, width : "500px"}}>
      <button onClick={() => setClose(!close)} style={{position : "absolute", right : 10, top:  10}}>{close ? "Show" : "Hide"}</button>
    <div style={{ fontFamily: "sans-serif", color: "#dadada", gap: "20px", fontSize: 14, display: 'flex', flexDirection: "column", alignItems: "start"}}>
      <div style={{display : 'flex', gap: "10px", alignItems: "center", justifyContent: "center"}}>
      <img src={`https://placehold.co/200x200?text=${name[0].toUpperCase()}`} style={{height : 60, width: 60, padding : 10, borderRadius: "50%"}} alt="M" />
      <div style={{display : 'flex', flexDirection : "column"}}>
        <p style={{fontWeight: "bold"}}>{name}</p>
        <p>{profiledes}</p>
        <p>{time}m . {followers} followers . {following} following</p>
      </div>
      </div>
      <div style={{display : `${close ? "none" : "block"}`}} className="text">
        <p>{content}</p>
      </div>
    </div>
    </div>
  )
}



export default App
