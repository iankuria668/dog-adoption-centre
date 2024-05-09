import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import ContactImage1 from "./DogHome/BARK Post_ Dog News, Guides, Reviews, & Cool Stuff from BARK.jpeg"; // Import the first contact image
import ContactImage2 from "./DogHome/These Lovely Dogs ‘Pack Walk’ And Pose For Pictures Together Every Day.jpeg"; // Import the second contact image

function Contact() {
  return (
    <div className="bg-black text-white">
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First column */}
          <div className="flex flex-col items-center">
            <img
              src={ContactImage1}
              alt="Contact 1"
              className="w-full h-auto rounded-lg mb-4"
            /> {/* First contact image */}
          </div>
          {/* Second column */}
          <div className="flex flex-col items-center">
            <img
              src={ContactImage2}
              alt="Contact 2"
              className="w-full h-auto rounded-lg mb-4"
            /> {/* Second contact image */}
          </div>
          <div className="flex flex-col items-center text-left md:col-span-2">
            <p>
              If you have any questions or inquiries, feel free to contact us
              using the information below:
            </p>
            <p className="mb-2">
              <strong>Call us:</strong> 071-234-567-890
            </p>
            <p className="mb-2">
              <strong>Support us via Mpesa:</strong> 071-283-7843
            </p>
            <p>
              <a
                href="mailto:billjoseph@gmail.com"
                className="text-green-400 hover:text-green-300 underline"
              >
                Click here to send us an email
              </a>
            </p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
