
  import './Experience.css';
  import PropTypes from 'prop-types';
  
     const ExperienceTemplate = ({ company, role, carerLink, dateStart, dateEnd, description1, description2 }) => {
      return (
        <div className="experienceTemplet-item">
          <a href={carerLink} target="_blank" rel="noopener noreferrer" className="experience-link">
          <h4 className='role'>{role}</h4>
          <h5 className='company'>{company}</h5>
          <div className='new'>
            <div> 
              <h5 className='date'>{dateStart}<br></br>{dateEnd}</h5>
            </div>
            <div className='description'>
              <p className='descriptions'>{description1}
              <br></br><br></br>
              {description2}</p>
            </div>
         </div> 
          </a>
          </div>
      )
      };
      
        ExperienceTemplate.propTypes = {
        company: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        carerLink: PropTypes.string.isRequired,
        dateStart: PropTypes.string.isRequired,
        dateEnd: PropTypes.string.isRequired,
        description1: PropTypes.string.isRequired,
        description2: PropTypes.string.isRequired,
      };

      export default ExperienceTemplate;