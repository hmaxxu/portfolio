import { Cantarell } from 'next/font/google';
import TwoColumnLayout from '../components/TwoColumnLayout';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: "Plexi",
      description: "The web is your oyster: Personalize, highlight, and master every word you see. A custom, persistent dictionary that scans the web, under your complete control.",
      tags: ["Browser Plugin", "JavaScript", "Web Dev"],
      link: {
        href: "https://github.com/hmaxxu/plexi",
        text: "View on GitHub",
      },
    },
    {
      title: "TikzEdit",
      description: "An online TikZ editor, with LaTeX support. Create stunning vector graphics online in seconds, no install needed.",
      tags: ["JavaScript", "Web Dev", "LaTeX"],
      link: {
        href: "https://github.com/hmaxxu/tikzedit",
        text: "View on GitHub",
      },
      liveLink: {
        href: "https://hmaxxu.github.io/tikzedit/",
        text: "Live Site",
      }
    }
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
            key={index} // List order is static for now
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </TwoColumnLayout>
  );
}
