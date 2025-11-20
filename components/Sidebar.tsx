'use client';

import ThemedLink from '../components/ThemedLink';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Sidebar() {
  const iconSize = 16;
  const iconClass = 'inline-block mr-2 align-middle';
  
  return (
    <div className="p-4 bg-gray-100 h-full border-r border-gray-300 flex flex-col items-end text-right">
      <h1 className="text-3xl text-right font-bold mb-4">Max Xu</h1>

      <p className="text-right mb-4"> {/* sm:block hidden */}
        CS + Math @ U of T 
      </p>
      
      <ul className="text-right flex flex-col gap-2"> 
        <li>
          <ThemedLink href="https://github.com/maxhxu" color="#501daf" target="_blank" rel="noopener noreferrer">
            <FaGithub size={iconSize} className={iconClass} />
            GitHub
          </ThemedLink>
        </li>
        <li>
          <ThemedLink href="https://www.linkedin.com/in/hmaxxu/" color="#0077b5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={iconSize} className={iconClass} />
            LinkedIn
          </ThemedLink>
        </li>
        <li>
          <ThemedLink href="mailto:hmaxxu@gmail.com" color="#443344">
            <FaEnvelope size={iconSize} className={iconClass} />
            Contact
          </ThemedLink>
        </li>
      </ul>
    </div>
  );
}