
  import './Portfolio.css';
  import PropTypes from 'prop-types';
  
     const PortfolioTemplet = ({ PICC, projectName, projectrLink, description}) => {
      return (
       <div className="experienceTemplet-item">
        <h4 className='projectName'>{projectName}</h4>
          <a href={projectrLink} target="_blank" rel="noopener noreferrer" >
            <img src={new URL(`../../assets/images/${PICC}.png`, import.meta.url).href} 
            alt={projectName || PICC} className="project-image"/>
          </a>
          <div className='neww'> 
            <div className='description'><p className='descriptions'>{description}</p></div>
          </div>     
       </div>
      )
      };
      
        PortfolioTemplet.propTypes = {
        projectName: PropTypes.string.isRequired,
        PICC: PropTypes.string.isRequired,
        projectrLink: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      };
  
      export default PortfolioTemplet;