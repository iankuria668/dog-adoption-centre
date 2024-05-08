import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer"
import "./About.css"

function About() {
  //use window.location.href property to provide acces to change the url of the page within the web application
  const onClickMailtoHandler = (email) => {
    window.location.href = `mailto:${email}`; // Week 2 day7 content explains this further, it took a while to understand
  };
  // Create an array of Team members each with their set of data to be passed onto the card
  const teamMembers = [
    //fill in your name, title, bio and email here. We can all use a common url of royal pets because it is the name of the company
    {
    name: "Bill Mageni",
    title: "CEO & Founder",
    bio: "Experienced in veterinary and adoption services.",
    email: "bill.mageni@royalpets.com",
  },
  {
    name: "Sarah Jones",
    title: "Adoption Specialist",
    bio: "Passionate about matching dogs with perfect families.",
    email: "sarah.jones@royalpets.com",
  },
];
    return (
      <>
        <header>
          <NavBar />
        </header>
        <div className="about-section">
          // I have used Tailwind css here to style titles and paragraphs
  <h1 className="text-9xl	font-size: 8rem; line-height: 1; text-gray-400	--tw-text-opacity: 1; color: rgba(156, 163, 175, var(--tw-text-opacity));">About Us Page</h1>
<br></br>
<br></br>
<br></br>
 <p className="text-4xl	font-size: 2.25rem;line-height: 2.5rem; ">General Mission:</p> <p className="text-center	text-align: center; text-xl	font-size: 1.25rem; line-height: 1.75rem; " >
At The Royal Pets, our mission is to rescue abandoned, neglected, and surrendered dogs, providing them with the care, training, and love they deserve. We strive to match each dog with its perfect forever home, ensuring a lifetime of happiness and companionship. We also promote responsible pet ownership and animal welfare through education and community outreach.</p>
<br></br>
<br></br>
<br></br>
<p className="text-4xl	font-size: 2.25rem;line-height: 2.5rem;">Specific Breed Focus:</p><p className="text-center	text-align: center; text-xl	font-size: 1.25rem; line-height: 1.75rem;" >
The Royal Pets is dedicated to rescuing and rehoming Labrador Retrievers. We are passionate about finding loving families for these wonderful dogs and ensuring they thrive in their forever homes. Through responsible adoption practices and education, we advocate for the well-being of all Labradors in need.</p>
<br></br>
<br></br>
<br></br>
<p className="text-4xl	font-size: 2.25rem;line-height: 2.5rem;">Community Focus:</p><p className="text-center	text-align: center; text-xl	font-size: 1.25rem; line-height: 1.75rem;" >
The Royal Pets believes that every dog deserves a second chance. We partner with shelters and rescues to find homes for homeless dogs. We also offer low-cost veterinary services, spay/neuter programs, and training resources for our community, promoting responsible pet ownership and a supportive environment for all dogs and their families.</p>
</div>

<h2 className="text-5xl font-size: 8rem; line-height: 1;">Our Team: </h2>
        <div className="about-list">
          //Create a card for each team member by mapping their data onto cards
          {teamMembers.map((member) => ( 
            <div className="about-row" key={member.name}>
              <div className="about-column">
                <div className="about-card">
                  <div className="about-container">
                    <h2 className="text-left  text-align: left; text-2xl">{member.name}</h2>
                    <p className="about-title">{member.title}</p>
                    <p>{member.bio}</p>
                    <p>{member.email}</p>
                    <p>
                      // create an onclick property so that when the button is clicked, the user is re-routed to mailto
                      <button className="about-button" onClick={() => onClickMailtoHandler(member.email)}>
                        Contact
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default About;