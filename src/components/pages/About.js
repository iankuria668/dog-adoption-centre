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
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">About Us Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md">
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
