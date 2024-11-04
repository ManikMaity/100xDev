import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Layout from './pages/Layout'
import Signin from './pages/Signin'
import Lightbulb from './pages/Lightbulb'
import DummyContext from './context/dummyContext'

function App() {

  const [bulbOn, setBulbOn] = useState(true)

  return (
    <DummyContext.Provider value={{bulbOn, setBulbOn}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='signin' element={<Signin />} />
          <Route path="*" element={<Error />} />
          <Route path='/lightbulb' element={<Lightbulb />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </DummyContext.Provider>
  )
}

export default App
