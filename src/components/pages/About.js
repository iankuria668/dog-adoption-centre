import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
function About() {
  const teamMembers = [
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

  const onClickMailtoHandler = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
  <div className="bg-black text-white">
    <header>
      <NavBar />
      </header>
      <div className="about-section">
        <h1 className="text-9xl	font-size: 8rem; line-height: 1; text-gray-400	--tw-text-opacity: 1; color: rgba(156, 163, 175, var(--tw-text-opacity));">About Us Page</h1>
        <br></br>
        <br></br>
        <br></br>
        <p className="text-4xl	font-size: 2.25rem;line-height: 2.5rem; ">General Mission:</p> <p className="text-align: center; text-xl	font-size: 1.25rem; line-height: 1.75rem; " >
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
          <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
             {teamMembers.map((member, index) => (
             <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md flex flex-col items-center">
                <h2 className="text-xl font-semibold text-white">{member.name}</h2>
                <p className="text-gray-400 mb-2">{member.title}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                onClick={() => onClickMailtoHandler(member.email)}
                >
                Contact
                </button>
              </div>
            ))}
          </div>
        </div>
    <footer>
    <Footer />
    </footer>
  </div>
);
}

export default About;
