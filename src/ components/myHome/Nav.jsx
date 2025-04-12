
import { Link } from 'react-router-dom';
import "./nav.css"
const Nav =() => {


    return (
      <>
        
        <div className="myHomeContener" id="myHomeContener" >
        <div className="row">
        <ol className="navList" id="navList">
        <Link className="navHome" id="navHome" to="/">About Me</Link>
        <Link className="navExperience" id="navExperience" to="/Experience">Experience</Link>
        <Link className="navPort" id="navPort" to="/Portfolio">Portfolio</Link>
        <Link className="navContact" id="navContact" to="/Contact">Contact Me</Link>
        </ol>
        </div>
        </div>
        </>
      )
  }
      export default Nav;





 {/*

 <h1 className="name">Ęmad Ğerges</h1>
        <h2 className="carer">FrontEnd Web Developer </h2>

 <a className='nav' href='/'>Home</a>
 <a className='nav' href='/Experience'>Experience</a>
 <a className='nav' href='/Port'>Port</a>
 <a className='nav' href='/About'>About</a>

import About from "../about/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "../home/Home"; 
import Port from "../port/Port";
import "./MyHome.css"
import { Contact } from "../contact/Contact";
import Experience from "../Experience/Experience";






        <div className="row ">
        
        
     
      
        </div>*/}
        
    