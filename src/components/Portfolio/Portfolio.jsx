import './Portfolio.css'
import PortfolioTemplet from './PortfolioTemplet';

const Portfolio = () => {

  return (


     <div className="experiencePageDiv">
     <div className='hedlinePagedivExperience'>
      <h3 className='hedlinePage'>My Projects</h3>
     </div>
    {/* <div className='hedlinePagedivExperience'>
      <h3 className='hedlinePage'>My Projects</h3>
     </div>*/}

      
      <PortfolioTemplet id="1" className="experienceTem-item"
                         projectName="E.market" 
                         PICC="E.market"
                         projectrLink="https://emarketemad.netlify.app" 
                         description="Created a functional mock e-commerce website using React.js, HTML, CSS, and JavaScript"/>
                        
      <PortfolioTemplet id="2" className="experienceTem-item"
                         projectName="Jeopardy Game" 
                         PICC="Jeopardy Game"
                         projectrLink="https://egjeopardy.netlify.app" 
                         description="Created a website that function as a game using HTML CSS Javascript."/>
                        
      <PortfolioTemplet id="3" className="experienceTem-item"
                         projectName="Meme Generator" 
                         PICC="Meme Generator"
                         projectrLink="https://eg-memegenerator.netlify.app" 
                         description="Create web site using HTML, CSS, and Javascript to allow users to enter text and an image, then creating their meme"/>
                        
      <PortfolioTemplet id="4" className="experienceTem-item"
                         projectName="To Do App" 
                         PICC="To Do App"
                         projectrLink="https://todoappemad.netlify.app" 
                         description="A personal portfolio website to showcase my projects and skills, built using React.js and hosted on GitHub Pages."/>
                                           
     
       </div>
       
  ) 
}
  export default Portfolio;

