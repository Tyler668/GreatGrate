import React, { useDebugValue, useRef } from 'react';
// import emailjs from 'emailjs';
// import clientRef from './client';
//

const ContactUs = () => {

  //We contacting
  return (
    <div className="About2">
      <div className="aboutBlurb2">
        <h2> Contacts for Purchase:</h2>
        <p>______________________________</p>
        <h3>Phone:</h3>
        <p>401-932-7397</p>
        <h3>E-mail:</h3>
        <p>greatgrate@yahoo.com</p>

      </div>
    </div>
  );














  // const form = useRef(clientRef);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_p4evdi4', 'template_c4c3yaf', form.current, 'user_DDCrreJkgc4cG6VHMtwNb')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };

  // return (
  //   <form ref={form} onSubmit={sendEmail}>
  //     <label>Name</label>
  //     <input type="text" name="user_name" />
  //     <label>Email</label>
  //     <input type="email" name="user_email" />
  //     <label>Message</label>
  //     <textarea name="message" />
  //     <input type="submit" value="Send" />
  //   </form>
  // );
};


export default ContactUs;