import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./components/Header.jsx";

function App() {

  return (
      <div className="container py-5">
          <Header/>
      </div>
  )
}

export default App
