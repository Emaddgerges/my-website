import './Experience.css'
import ExperienceTemplate from './Templet';

const Experience = () => {

  return (

     <div className="experiencePageDiv">
     <div className='hedlinePagedivExperience'>
      <h3 className='hedlinePage'>My Experiences</h3>
     </div>

      <ExperienceTemplate id="1" className="experienceTem-item"
                         company="Amazon" 
                         role="Fulfillment Center Associate (Texas)" 
                         carerLink="https://www.amazon.com" 
                         dateStart="May 2021" 
                         dateEnd="Current" 
                         description1="Utilized problem-solving skills in a fast-paced environment"
                         description2="Demonstrated strong attention to detail and organizational abilities"/>

      <ExperienceTemplate id="2" className="experienceTem-item"
                         company="Al Raaei  (Cairo, Egypt)"
                         role= "Business Owner"
                         dateStart="Mar 2019"
                         dateEnd="Jul 2020"
                         description1="Managed digital marketing campaigns and created multimedia content"/>

      <ExperienceTemplate id="3" className="experienceTem-item"
                         company="Qtar Media Corporation (Doha, Qatar)" 
                         role="Senior Video Editor" 
                         carerLink="https://www.qmc.qa" 
                         dateStart="Aug 2012" 
                         dateEnd="Dec 2018" 
                         description1="Led teams in producing high-quality video content for various platforms"/>

      <ExperienceTemplate id="4" className="experienceTem-item"
                         company="Alrai Media Group (Kuwait City, Kuwait)" 
                         role="Video Editor" 
                         carerLink="https://www.alraimedia.com" 
                         dateStart="May 2007" 
                         dateEnd="Aug 2012" 
                         description1="Edited Nightly Show, Edited News Reports, Edited Documentary Film"/>

      <ExperienceTemplate id="5" className="experienceTem-item"
                         company="Phoenix ProducTion (Kuwait City, Kuwait)" 
                         role="Video Editor" 
                         carerLink="https://www.phoenix-mp.com" 
                         dateStart="Oct 2006" 
                         dateEnd="Apr 2007" 
                         description1="Edited TV Programs, Edited News Reports for Reuters and AP, Edited Documentaries Film"/>

      <ExperienceTemplate id="6" className="experienceTem-item"
                         company="ANA Agency (Cairo, Egypt)" 
                         role="Video Editor" 
                         carerLink="https://www.anaonline.net" 
                         dateStart="Nov 2005" 
                         dateEnd="Jul 2006" 
                         description1="Edited News Reports for diferent Agencies, Edited Documentaries Film"/>

       </div>
       
  ) 
}
  export default Experience;

