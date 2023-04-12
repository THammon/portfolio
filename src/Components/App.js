import './App.css';
import Home from './Home';
import Navbar from './Navbar';

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
