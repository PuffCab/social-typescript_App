
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import DinnersConsole from './components/views/DinnersConsole';
import Home from './components/views/home/Home';
import Login from './components/views/login/Login';






const App: React.FC<{}> = () => {
  
  
  return (
  
    <div className="App">
      <Router>
      <Navbar />
      <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/console" element={<DinnersConsole/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/user/:id" />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
