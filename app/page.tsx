import TwoColumnLayout from '../components/TwoColumnLayout';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: "Personal Portfolio Site",
      description: "A fast, modern portfolio built with Next.js, featuring responsive design and dark mode support for a great user experience.",
      tags: ["Next.js", "React", "Tailwind CSS", "Design"],
      link: {
        href: "http://localhost:3000",
        text: "Visit Live Site",
      },
    },
    {
      title: "Plexicon",
      description: "The web is your oyster: Personalize, highlight, and master every word you see. A custom, persistent dictionary that scans all web content, completely under your control.",
      tags: ["Plugin", "JavaScript", "Web Dev"],
      link: {
        href: "https://github.com/yourusername/chatbot-wrapper",
        text: "View on GitHub",
      },
    },
    // Add more projects here
  ];

  return (
    <TwoColumnLayout>
      <div className="mb-10 sm:block hidden">
        {/* empty */}
      </div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">My Projects</h1>

      {/* Map through the projects array to render a ProjectCard for each */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index} // List order is static; for now
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </TwoColumnLayout>
  );
}
