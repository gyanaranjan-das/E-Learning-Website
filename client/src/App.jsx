import React from "react";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App(){
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div style={{padding:'20px'}}>
          <Routes>
            <Route path="/" element={<h1>Welcome to the E-Learning Platform</h1>}></Route>
            <Route path="/courses" element={<h1>Course List (Coming Soon)</h1>}/>
            <Route path="/login" element={<h1>Login(coming Soon)</h1>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;