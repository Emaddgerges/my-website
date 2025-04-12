import './Experience.css';
import {  } from 'react-router-dom';


const Experience = () => {






  return (
    <div className="experience">
   
     <div className='hedlinePagedivExperience'>
    <h3 className='hedlinePage'>My Experiences</h3>
    </div> 
    <div className='experiencesContener'>

      <div className="experience-item">
      <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="experience-link">


      <h4 className='company'>Amazon</h4>
      <h5 className='amazon'>Fulfillment Center Associate (Texas)</h5>
      <div className='new'>
      <div> 
      <p>May 2021 <br></br> Current</p>
      </div>
      <div>
      <p>Utilized problem-solving skills in a fast-paced environment
        <br></br>Demonstrated strong attention to detail and organizational abilities</p>
        
      </div>
     
      </div> 
      </a>
    </div>  
      <div className="experience-item">
        <h4 className='company'>Business Owner </h4>
        <h5 className='amazon'>Al Raaei  (cairo, Egypt)</h5>
        <div className='new'>
        <p>Mar 2019 <br></br>  Jul 2020</p>
        <p>Managed digital marketing campaigns and created multimedia content</p>
        </div> 
      </div>
      
      <div className="experience-item">
      <a href="https://www.qmc.qa" target="_blank" rel="noopener noreferrer" className="experience-link">

        <h4 className='company'>Senior Video Editor</h4>
        <h5 className='amazon'>Qtar Media Corporation (Doha, Qatar)</h5>
        <div className='new'>
        <p> Aug 2012 <br></br>  Dec 2018</p>
        <p>Led teams in producing high-quality video content for various platforms</p>
      
        </div>
        </a>
      </div>
      <div className="experience-item">
      <a href="https://www.alraimedia.com" target="_blank" rel="noopener noreferrer" className="experience-link">

        <h4 className='company'>Video Editor</h4>
        <h5 className='amazon'>Alrai Media Group (kuwait City, kuwait)</h5>
        <div className='new'>
        <p>May 2007 <br></br>  Aug 2012</p>
        <p>Edited Nighet Shwe, Edited News Reports, Edited Documentaries Film</p>
        </div>
        </a>
      </div>
      <div className="experience-item">
      <a href="https://www.phoenix-mp.com/" target="_blank" rel="noopener noreferrer" className="experience-link">

        <h4 className='company'>Video Editor</h4>
        <h5 className='amazon'>Phonix ProducTion (kuwait City, kuwait)</h5>
        <div className='new'>
        <p>Oct 2006 <br></br>  Apr 2007</p>
        <p>Edited TV Programs, Edited News Reports for Reuters and AP, Edited Documentaries Film</p>
        </div>
        </a>
      </div>
      <div className="experience-item">
      <a href="https://www.anaonline.net/" target="_blank" rel="noopener noreferrer" className="experience-link">

        <h4 className='company'>Video Editor</h4>
        <h5 className='amazon'>ANA Agency (Cairo, Egypt)</h5>
        <div className='new'>
        <p>Nov 2005 <br></br>  Jul 2006</p>
        <p>Edited News Reports for diferent Agencies, Edited Documentaries Film</p>
        </div>
        </a>
        </div>
      </div>
      
      {/* Add more experience items as needed */}
    </div>
  );
};

export default Experience;