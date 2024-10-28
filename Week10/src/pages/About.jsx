import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

    const navigator = useNavigate();

    useEffect(() => {
        goBackAfter10s()
    })

    const goBackAfter10s = () => {
        setTimeout(() => {
            navigator('/');
        }, 5000)
    }


  return (
    <div>
      About
    </div>
  )
}

export default About
