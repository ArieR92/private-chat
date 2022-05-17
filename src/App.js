import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Register from './pages/Register';
import {AuthProvider} from './context/authContext'

function App() {
  return (

    <BrowserRouter>
            <Navbar/>
       <AuthProvider>
          <Routes>
             <Route path="/" element={ <Home/> }></Route>
             <Route path="/Register" element={<Register />} />
          </Routes>
       </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
