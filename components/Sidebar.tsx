'use client';

import ThemedLink from '../components/ThemedLink';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Sidebar() {
  const iconSize = 16;
  const iconClass = 'inline-block mr-2 align-middle';
  
  return (
    <div className="p-8 pt-24 pb-12 flex flex-col items-end text-right text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4">Max Xu</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        CS + Math @ U of T 
      </p>
      
      <ul className="flex flex-col gap-4">
        <li>
          <ThemedLink 
            href="https://github.com/maxhxu" 
            color="#181717"
            darkColor="#FAFAFA"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub size={iconSize} className={iconClass} />
            GitHub
          </ThemedLink>
        </li>
        <li>
          <ThemedLink 
            href="https://www.linkedin.com/in/hmaxxu/" 
            color="#0077B5"
            darkColor="#51A5D6"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin size={iconSize} className={iconClass} />
            LinkedIn
          </ThemedLink>
        </li>
        <li>
          <ThemedLink 
            href="mailto:hmaxxu@gmail.com" 
            color="#166534"
            darkColor="#4ADE80"
          >
            <FaEnvelope size={iconSize} className={iconClass} />
            Contact
          </ThemedLink>
        </li>
      </ul>
    </div>
  );
}
