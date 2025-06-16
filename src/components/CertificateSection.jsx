import React from "react";

const certificate = [
  {
    id: 1,
    title: "Python",
    description:
      "This certificate is awarded for successfully completing a three-day professional workshop in Python, demonstrating a commitment to continuous learning and skill development in the field of programming.",
    image: "/certificates/python.jpeg",
    preview: "/certificates/python.jpeg",
  },
  {
    id: 2,
    title: "IoT",
    description:
      "This certificate is awarded for attending a 20-hour workshop on the Internet of Things (IoT), where I collaborated with a team to develop a project named Fuel Guard, showcasing hands-on experience and teamwork in an applied technology setting.",
    image: "/certificates/Iots.jpg",
    preview: "/certificates/Iots.jpg",
  },
  {
    id: 3,
    title: "IET CSS",
    description:
      "This certificate is awarded for participating in the CSS Challenge organized by IET DAVV, demonstrating skills in web design and styling.",
    image: "/certificates/ietCSS.jpeg",
    preview: "/certificates/ietCSS.jpeg",
  },
  {
    id: 4,
    title: "HackerRank CSS",
    description:
      "This certificate is awarded for successfully passing the CSS test on HackerRank, demonstrating proficiency in front-end development skills.",
    image: "/certificates/hackCSS.jpeg",
    preview: "/certificates/hackCSS.jpeg",
  },
  {
    id: 5,
    title: "MERN Stack Developer",
    description:
      "This certificate is awarded for successfully completing the MERN Stack Developer course by Apna College, demonstrating proficiency in modern web development technologies.",
    image: "/certificates/ApnaClg.png",
    preview: "/certificates/ApnaClg.png",
  },
  {
    id: 6,
    title: "Travel Mania",
    description:
      "Participated in the college’s cultural event ‘Travel Mela,’ contributing to activities such as quizzes and cultural performances.",
    image: "/certificates/travelMania.jpg",
    preview: "/certificates/travelMania.jpg",
  },
  {
    id: 7,
    title: "Sql (Basic)",
    description:
      "Awarded for successfully completing the SQL (Basic) skill assessment on HackerRank, demonstrating foundational proficiency in writing queries, filtering data, and working with SQL clauses such as SELECT, WHERE, JOIN, and GROUP BY.",
    image: "/certificates/sql.png",
    preview: "/certificates/sql.png",
  },
  {
    id: 8,
    title: "Azure Compute & Networking Services – Microsoft Learn",
    description:
      " Completed module covering Azure virtual machines, containers, and core networking resources.",
    image: "/certificates/Dec_Azure.png",
    preview: "/certificates/Dec_Azure.png",
  },
  {
    id: 9,
    title: "Core Architectural Components of Azure – Microsoft Learn ",
    description:
      "Completed module on key Azure architecture elements, including regions, availability zones, and resource groups.",
    image: "/certificates/Dec_Arc_Aruze.png",
    preview: "/certificates/Dec_Arc_Aruze.png",
  },
  {
    id: 10,
    title: "Introduction to Git – Microsoft Learn",
    description:
      "Completed beginner-level module covering Git fundamentals, version control principles, and essential commands like init, commit, and push.",
      image: "/certificates/git.png",
    preview: "/certificates/git.png",
  },
];

export const CertificateSection = () => {
  return (
    <section id="certificate" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-primary">Certificates</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {certificate.map((cert) => (
            <div
              key={cert.id}
              className="bg-card rounded-lg shadow-xs overflow-hidden flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {cert.description}
                </p>
                <a
                  href={cert.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button w-fit flex items-center gap-2 mt-auto"
                >
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
