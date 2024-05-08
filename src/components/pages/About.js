// About.js
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
    <>
      <header>
        <NavBar />
      </header>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">About Us Page</h1>
        {/* Your about content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.title}</p>
              <p className="text-gray-700">{member.bio}</p>
              <button
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded mt-2"
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
    </>
  );
}

export default About;
