import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Collaborate from './components/Collaborate';
import Aipra from './components/Aipra';
import Choice from './components/Choice';
import Dev from './components/Dev';
import Cloudservice from './components/Cloudservice';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>




      <Routes>

        <Route path='/' element={<Collaborate />}></Route>
        <Route path='/Aipra' element={<Aipra />}></Route>
        <Route path='/Choice' element={<Choice />}></Route>
        <Route path='/Dev' element={<Dev />}></Route>
        <Route path='/Cloudservice' element={<Cloudservice />}></Route>
      </Routes>
    </>
  )
}

export default App
















//    font-family: serif;
//<div class="service-hero jumbotron jumbotron-fluid" style="background-image: linear-gradient(to right, rgba(15, 15, 15, 0.4), rgba(15, 15, 15, 0.4)), url("/download.png");">
{/* <Routes>
  <Route index element={<Home />}></Route>
  <Route path='/about' element={<Movie />}></Route>
  <Route path='/main' element={<Main />}></Route>
  <Route path='/Contact us' element={<Contact />}></Route>
</Routes> */}