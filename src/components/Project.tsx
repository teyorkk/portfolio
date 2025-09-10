const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS.",
    image: "/port.png",
    link: "https://github.com/teyorkk/portfolio",
  },
  {
    title: "Expense Tracker",
    description: "A mobile expense tracker app using flutter.",
    image: "/expense.jpg",
    link: "https://github.com/teyorkk/expense_tracker_flutter",
  },
  {
    title: "Cineverse",
    description: "A movie review logging website.",
    image: "/cineverse.png",
    link: "https://github.com/teyorkk/cineverse",
  },
];

const Project = () => {
  return (
    <section className="py-16 bg-white" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="block bg-gray-100 rounded-xl shadow hover:shadow-lg transition overflow-hidden group border border-gray-200 transform hover:scale-105 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-40 bg-white overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-md">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
