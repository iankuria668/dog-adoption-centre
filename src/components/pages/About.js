import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"

function About() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main className="About">
          <h1>This is my about component!</h1>
        </main>
        <footer>
          <Footer/>
        </footer>
      </>
    );
  };
  
export default About;