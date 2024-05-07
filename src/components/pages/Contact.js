import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"


function Contact() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
        <div id="contact" className="contact">
        <p><strong>Call us at this number: </strong> <em>071-234-567-890</em></p>
        <p><strong className="">If you are impresed with this group's work support us via Mpesa on: </strong> <em>071-283-7843 </em></p>
        <p> <a href="mailto:billjoseph@gmail.com" className="link">Click here to Send us an email</a></p>
        </div>
        </main>
        <footer>
          <Footer/>
        </footer>
      </>
    );
  };
  
  export default Contact;