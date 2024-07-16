import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      {/* navbar */}
      <Navbar/>
      {/* routes */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );;
}

export default App
