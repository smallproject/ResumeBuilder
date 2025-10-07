import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./components/Header.jsx";
import ResumeForm from "./components/ResumeForm.jsx";
import ResumePreview from "./components/ResumePreview.jsx";

function App() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        summary: "",
        experience: "",
        education: "",
        skills: "",
    });
  return (
      <div className="d-flex flex-column min-vh-100">
          <Header/>
          <main className="container my-5">
              <div className="row">
                  <div className="col-md-6">
                      <ResumeForm formData={formData} setFormData={setFormData}/>
                  </div>
                  <div className="col-md-6">
                      <ResumePreview data={formData}/>
                  </div>
              </div>
          </main>
      </div>
  )
}

export default App
