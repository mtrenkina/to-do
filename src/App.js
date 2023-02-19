import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
