
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
//import REACT_APP_EMAILJS_SERVICE_ID from '../../.env';
// import REACT_APP_EMAILJS_TEMPLATE_ID from '../../.env';
// import REACT_APP_EMAILJS_PUBLIC_KEY from '../../.env';


export const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
     emailjs
      .sendForm(
        'service_89v6uuh', // EmailJS Service ID
        'template_ufuv66f', // EmailJS Template ID
        form.current,
        'gh5udUznGdDlydkM3' // EmailJS User ID
       )

      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
         },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.log(error.text);
         }
        );
     e.target.reset(); // Reset the form after submission
    };

 return (
    <div className='contact'>
     <div className='hedlinePagedivContact'>
      <h3 className='hedlinePage'>Contact Me </h3>
     </div>
    <div className="contactContener">
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Your Name" required />

        <label>Email</label>
        <input type="email" name="user_email" placeholder="Your Email" required />

        <label>Message</label>
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit" className="submitButton">Send</button>
      </form>
    </div>

    <div className="contactContener">

    <a className='linkedin' href="https://www.linkedin.com/in/emadgerges" target="_blank" >
    <i className="fab fa-linkedin fa-5x"></i>
    </a>

    <a className='github' href="https://github.com/emadgerges" target="_blank" >
    <i className="fab fa-github fa-5x"></i>
    </a>
    

    <p className="contactText">I’m always looking for new opportunities to grow and learn.</p>
    </div>
    </div>
    
  );
};

