import '../App.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Contact from './Contact';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route path = "/About" element={<About/>}/>
        <Route path = "/Projects" element={<Projects/>}/>
        <Route path = "/Skills" element={<Skills/>}/>
        <Route path = "/Testimonials" element={<Testimonials/>}/>
        <Route path = "/Contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
