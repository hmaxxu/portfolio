import React from 'react';

/**
 * For Project Card data
 */
interface ProjectCardProps {
  title: string;
  description: string;
  // Existing project link (e.g., repository)
  link?: {
    href: string;
    text: string;
  };
  // Optional live page link
  liveLink?: {
    href: string;
    text: string;
  };
  tags?: string[];
}

/**
 * ProjecCard component for showcasing a project.
 * @param {ProjectCardProps} props - The properties for the project card.
 * @returns {JSX.Element} The rendered project card component.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, liveLink, tags }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-sm shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-200 dark:border-gray-700 mb-6">

      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      
      {/* Tags Section */}
      {tags && tags.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:text-blue-200 dark:bg-blue-900"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

      {/* Action Buttons Container */}
      {(link || liveLink) && (
        <div className="mt-4 flex flex-wrap gap-4 items-center">
          {/* Live Page Button (optional) */}
          {liveLink && (
            <a
              href={liveLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-150 ease-in-out dark:bg-green-500 dark:hover:bg-green-600"
            >
              {liveLink.text}
            </a>
          )}

          {/* Existing Project Link (optional) */}
          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition duration-150 ease-in-out"
            >
              {link.text} &rarr;
            </a>
          )}
        </div>
      )}

    </div>
  );
};

export default ProjectCard;