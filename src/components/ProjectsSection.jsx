import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  // {
  //   id: 1,
  //   title: "AgganBreeze",
  //   description: "Developed a full-stack hotel booking platform that allows users to register, log in securely, explore hotel listings, and manage bookings through a user-friendly interface. Built using Node.js, Express, MongoDB, and EJS with features like session management, form validation, and flash messaging.",
  //   image: "/projects/AgganBreeze.png",
  //   tags: ["Node.js", "Express", "MongoDB","EJS","JavaScript","BootStrap"],
  //   demoUrl: "https://agganbreeze.onrender.com/listings",
  //   githubUrl: "https://github.com/S15jn/WanderLust",
  // },
  {
    id: 2,
    title: "AgganBreeze",
    description: "Developed a full-stack hotel booking platform that allows users to register, log in securely, explore hotel listings, and manage bookings through a user-friendly interface. Built using Node.js, Express, MongoDB, and EJS with features like session management, form validation, and flash messaging.",
    image: "/projects/AgganBreeze.png",
    tags: ["Node.js", "React","Material UI","JavaScript","API's"],
    demoUrl: "https://weather-app-dun-eight-35.vercel.app/",
    githubUrl: "https://github.com/S15jn/WeatherApp",
  },
  {
    id: 3,
    title: "OCHI: Dynamic Landing Page with Seamless Animations",
    description:
      "OCHI is a vibrant, interactive landing page designed with smooth animations to captivate users and enhance their browsing experience.",
    image: "/projects/ochi1.png",
    tags: ["TailwindCss", "JavaScript", "Html","CSS"],
    demoUrl: "https://ochi-project-nine.vercel.app/",
    githubUrl: "https://github.com/S15jn/ochi_project",
  },
  {
    id: 4,
    title: "WeatherApp",
    description:
      "Weather App is a sleek, user-friendly React app with Material-UI that delivers real-time weather updates worldwide. It dynamically displays temperature, humidity, and more with visually appealing backgrounds",
    image: "/projects/weather.png",
    tags: ["ReactJs", "JavaScript","MaterialUI","Fetch API" ,"Html","CSS","OpenWeatherMap API"],
    demoUrl: "https://ochi-project-nine.vercel.app/",
    githubUrl: "https://github.com/S15jn/ochi_project",
  },
  {
    id: 5,
    title: "Todo App",
    description:
      "A dynamic and interactive to-do list application that allows users to easily manage their tasks, including adding, deleting, checking, and unchecking items to enhance productivity and organization.",
    image: "/projects/todo.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://todo-list-cyan-theta.vercel.app/",
    githubUrl: "https://github.com/S15jn/Todo-List",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/S15jn"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};