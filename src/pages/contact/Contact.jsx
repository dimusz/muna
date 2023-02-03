import React, { useState } from "react";

import "./Contact.css";

function Contact () {
  return (
    <div className="container">
      <div className="container-header">
        <h1>Prețurile prezentate au caracter informativ. </h1>
        <h2>
          Pentru o oferta personalizată te rugăm sa ne lași un mesaj pe adresa
          de email oferte@muna.ro
          <br />
          sau completeaza formularul de mai jos.{" "}
        </h2>
      </div>
      <form className="contact" >
        <div className="form-container">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" cols="19" rows="10"></textarea>
          </div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
