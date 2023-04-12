import '../App.css';
import Home from './Home';
import Navbar from './Navbar';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
