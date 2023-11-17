import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
