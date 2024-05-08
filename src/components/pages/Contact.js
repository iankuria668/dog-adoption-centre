import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

function Contact() {
  return (
    <div className="bg-black text-white">
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto p-8">
        <div id="contact" className="contact">
          <p>
            <strong>Call us at this number:</strong> <em>071-234-567-890</em>
          </p>
          <p>
            <strong>If you are impressed with this group's work support us via Mpesa on:</strong>{" "}
            <em>071-283-7843</em>
          </p>
          <p>
            <a href="mailto:billjoseph@gmail.com" className="text-blue-400">
              Click here to Send us an email
            </a>
          </p>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
