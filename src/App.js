import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
