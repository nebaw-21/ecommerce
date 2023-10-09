import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import SideBar from './components/SideBar';
import Login from './components/Login';
import Register from './components/Register';
import ShowCatagory from './components/ShowCatagory';




function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home  />} />
    <Route path="/side" element={<SideBar />} />
    <Route path="/login" element={<Login  />} />
    <Route path="/register" element={<Register />} />

    <Route path="/show" element={<ShowCatagory />} />
  
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
