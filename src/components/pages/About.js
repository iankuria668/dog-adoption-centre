import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

function About() {
  const teamMembers = [
    {
      name: "Bill Mageni",
      title: "Adoption Specialist",
      bio: "Experienced in veterinary and adoption services.",
      email: "bill.mageni@royalpets.com",
    },
    {
      name: "Ian Kuria",
      title: "Adoption Specialist",
      bio: "Matching rescued animals with loving homes since 2024.",
      email: "sarah.jones@royalpets.com",
    },
    {
      name: "Joel Langat",
      title: "Adoption Specialist",
      bio: "Collaborating with shelters and rescues to create happy endings for pets.",
      email: "Joel.Langat@royalpets.com",
    },
    {
      name: "Ted Muigai",
      title: "Adoption Specialist",
      bio: " Prioritizing transparency and education for responsible pet ownership.",
      email: "Ted.Muigai@royalpets.com",
    },
    {
      name: "Daniel Wanjohi",
      title: "Adoption Specialist",
      bio: "Specializing in finding forever families for desired breeds.",
      email: "Daniel.Wanjohi@royalpets.com",
    },
    {
      name: "Lee Mwangi",
      title: "Adoption Specialistr",
      bio: "Ensuring the best pet for you beacause,the right Mutt matters.",
      email: "Lee.Mwangi@royalpets.com",
    },
  ];

  const onClickMailtoHandler = (email) => {
    window.location.href = `mailto:${email}?subject= Support Assitance -`;
  };

  return (
  <div className="bg-gray-900 ">
    <header>
      <NavBar />
      </header>
      <div className="about-section bg-black text-white container mx-auto p-9">
        <h1 className=" text-center text-9xl	font-size: 8rem; line-height: 1; text-gray-400	--tw-text-opacity: 1; color: rgba(156, 163, 175, var(--tw-text-opacity));">About Us </h1>
        <br></br>
        <br></br>
        <br></br>
        <p className="text-center	text-align: center; text-4xl 	font-size: 2.25rem;line-height: 2.5rem; ">General Mission:</p> <p className="text-align: center; text-xl	font-size: 1.25rem; line-height: 1.75rem; text-justify	text-align: justify; " >
          At The Royal Pets, our mission is to rescue abandoned, neglected, and surrendered dogs, providing them with the care, training, and love they deserve. We strive to match each dog with its perfect forever home, ensuring a lifetime of happiness and companionship. We also promote responsible pet ownership and animal welfare through education and community outreach.</p>
          <br></br>
          <br></br>
          <br></br>
          <p className=" text-center	text-align: center; text-4xl	font-size: 2.25rem;line-height: 2.5rem;">Specific Breed Focus:</p><p className="text-center	text-align: center; text-xl	font-size: 1.25rem; line-height: 1.75rem; text-justify	text-align: justify; " >
          The Royal Pets is dedicated to rescuing and rehoming your spesific breed of dogs. We are passionate about finding loving families for these wonderful dogs and ensuring they thrive in their forever homes. Through responsible adoption practices and education, we advocate for the well-being of all Labradors in need.</p>
          <br></br>
          <br></br>
          <br></br>
          <p className="text-center	text-align: center; text-4xl	font-size: 2.25rem;line-height: 2.5rem;">Community Focus:</p><p className="text-center	text-align: center; text-xl	font-size: 1.25rem; line-height: 1.75rem; text-justify	text-align: justify; " >
            The Royal Pets believes that every dog deserves a second chance. We partner with shelters and rescues to find homes for homeless dogs. We also offer low-cost veterinary services, spay/neuter programs, and training resources for our community, promoting responsible pet ownership and a supportive environment for all dogs and their families.</p>
          <br></br>
          <br></br>
          <br></br>
          </div>
          <h1 className="text-transparent	color: transparent;"> rvcef </h1>
          <div className="container mx-auto p-8 bg-gray-800	background-color: rgb(17 24 39); ">
            <h1 className="text-center text-6xl	font-size: 8rem; line-height: 1; text-gray-400	--tw-text-opacity: 1; color: rgba(156, 163, 175, var(--tw-text-opacity))"> Contact Us </h1>
            <br></br>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
             {teamMembers.map((member, index) => (
             <div key={index} className=" bg-zinc-800 shadow-slate-100 hover:shadow-black p-6 rounded-md shadow-md flex flex-col items-center">
              <div className="  aspect-square overflow-hidden rounded-lg mb-5"> </div>
                <h2 className="text-xl font-semibold text-white">{member.name}</h2>
                <p className="text-gray-400 mb-2">{member.title}</p>
                <p className="text-gray-300 mb-4"><erm>"{member.bio}"</erm></p>
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
        <br></br>
          <br></br>
          <br></br>
    <footer>
    <Footer />
    </footer>
  </div>
);
}

export default About;