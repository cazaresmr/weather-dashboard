import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WeatherDetails from "./components/WeatherDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weather/:city' element={<WeatherDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
