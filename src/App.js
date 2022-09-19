
import './App.css';
import Header from './Header';
import Navbar2 from './Navbar2';
import Advertise from './Advertise';
import { Routes, Route, Link } from "react-router-dom";
import FullNews from './FullNews';
import Home from './Home';
import Razniti from './Razniti';



function App() {
  return (
    <div className="w-full h-full justify-center">
      
      <Header/>
      <hr></hr>
      <Navbar2 />
      <hr></hr>
      <Advertise clip = "/prothom-alo-images/cityGrup.jpeg"/>
      <hr></hr>
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<FullNews/>} />
        <Route path="/menu" element={<Razniti/>} />
        
     
        
      </Routes>
     
      
     
      
    </div>
  );
}

export default App;
