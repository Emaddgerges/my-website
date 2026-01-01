
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/about/About';
import Experience from './components/Experience/Experience';
//import Blog from './components/Blog/Blog';
import Nav from './components/Nav/Nav';
import { Contact } from './components/contact/Contact';


function App() {
  useEffect(() => {
    const handleScroll = () => {
      const infoElement = document.querySelector('.info');
      if (window.scrollY > 20) {
        infoElement.classList.add('shrink');
      } else {
        infoElement.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
  <div className="App">
      <div className='info'>
         <h1 className="name">Emad Gerges</h1>
         <h3 className="carer">FrontEnd Web Developer </h3>
      </div>

      <div className="myHomeContener">
          <Router >
        <div className='nav'><Nav />
        </div>
        <div>
          <Routes className="routes">
            <Route path="/" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Contact" element={<Contact />} />
           </Routes>
        </div>
          </Router>
      </div>
   </div>
   

 );
}

export default App;
