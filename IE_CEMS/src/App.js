import Navbar from './NavBar';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
