import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Education from "./routes/Education";
import {Route, Routes} from "react-router-dom"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/education" element={<Education/>}/>
    </Routes>
    </>
  )
}

export default App
