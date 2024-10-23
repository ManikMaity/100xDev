import React, { useEffect, useState } from 'react'

function Timer() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    

    useEffect(() => {

        if (isRunning){
          var timer =  setInterval(() => {
                setTime(pTime => pTime + 1)
            }, 1000)
        }
        else {
            clearInterval(timer)
        }

        return () => {
            clearTimeout(timer)
        }

    }, [isRunning])

  return (
    <div style={{padding : 10, display : 'flex', flexDirection : 'column', alignItems: "center", gap : 10}}>
    <div style={{height  :  50, width : 50, borderRadius : "50%", backgroundColor : "#252525", display : 'grid', placeContent : "center"}}>
      {time}
    </div>
    <div style={{display : 'flex', gap : 20}}>
        <button onClick={() => {
            setIsRunning(!isRunning);
        }}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={() => {
            setIsRunning(false)
            setTime(0)
        }}>Reset</button>
    </div>
    </div>
  )
}

export default Timer
