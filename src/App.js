import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Register from './pages/Register';

function App() {
  return (

    <BrowserRouter>
            <Navbar/>
       <Routes>
             <Route path="/" element={<Home />}></Route>
             <Route path="registrer" element={<Register/>}></Route>
       </Routes>
    </BrowserRouter>
    
  );
}

export default App;
