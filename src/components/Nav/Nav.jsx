
import { Link } from 'react-router-dom';
import "./nav.css"
const Nav =() => {


    return (
      <div>
        
        <div className="myHomeContener" id="myHomeContener" >
        <div className="row">
        <ol className="navList" id="navList">
        <Link className="navHome" id="navHome" to="/">About Me</Link>
        <Link className="navExperience" id="navExperience" to="/Experience">Experience</Link>
         <Link className="navBlog" id="navBlog" to="/Portfolio">Portfolio</Link>
        <Link className="navContact" id="navContact" to="/Contact">Contact Me</Link>
        </ol>
        </div>
        </div>
        </div>
      )
  }
      export default Nav;




