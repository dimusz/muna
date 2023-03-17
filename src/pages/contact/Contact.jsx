import React , {useRef} from "react";
import "./Contact.css";
 import emailjs from '@emailjs/browser';
 import { Helmet } from "react-helmet";
 export const Contact = ()=> {
 
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('muna_ro', 'email_template', form.current, 'WYKtISFVke35Y3668')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  return (
    <div className="container">
      <div><Helmet><title>Muna | Contact</title></Helmet></div>
      <div className="container-header">
        <h1>Prețurile prezentate au caracter informativ. </h1>
        <h2>
          Pentru o oferta personalizată te rugăm sa ne lași un mesaj pe adresa
          de email oferte@muna.ro
          <br />
          sau completeaza formularul de mai jos.{" "}
        </h2>
      </div>
      <form className="contact" ref={form} onSubmit={sendEmail}>
        <div className="form-container">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" cols="19" rows="10" name="textarea" ></textarea>
          </div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
