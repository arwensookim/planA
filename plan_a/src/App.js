import { Routes, Route, NavLink } from "react-router-dom";

import './nav.css';
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from "./components/portfolio/Portfolio";


function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <NavLink className='nav' to='/' ><img src="https://static.wixstatic.com/media/eeb834_8559f802aa1d40d28768e5769350ee74~mv2.png/v1/fill/w_384,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eeb834_8559f802aa1d40d28768e5769350ee74~mv2.png" style={{width:"192px", height:"32px"}}/></NavLink>
        <NavLink className='nav' to='/' >Home</NavLink>
        <NavLink className='nav' to='/about' >About</NavLink>
        <NavLink className='nav' to='/portfolio' >Portfolio</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
