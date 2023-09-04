import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Module/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="singup" element={<Signup/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer/>
      
      <div>
      
    </div>
    </div>

    
  );
}

export default App;
