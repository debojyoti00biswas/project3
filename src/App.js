import './App.css';
import About from './Components/About/About';
import Detail from './Components/Detail/Detail';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Shere_module/Header/Header';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Detail' element={<Detail />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;




