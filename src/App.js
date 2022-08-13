import logo from './logo.svg';
import './App.css';
import Main from './Home/Main';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Home/Contact';
import Portfolio from './Home/Portfolio';
import About from './Home/About';
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Portfolio' element={<Portfolio/>}></Route>
      <Route path='/About' element={<About />}></Route>
    </Routes>
    </Router>
   </>
  );
}

export default App;
