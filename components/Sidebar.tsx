'use client';

import ThemedLink from '../components/ThemedLink';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Sidebar() {
  const iconSize = 16;
  const iconClass = 'inline-block mr-2 align-middle';
  return (
    <div className="p-4 bg-gray-100 h-full border-r border-gray-300 flex flex-col items-end **text-right**">
      <h1 className="text-3xl text-right font-bold mb-4">Name here</h1>

      <p className ="text-right mb-4 sm:block hidden">
        Undergrad student at some university, passionate about math and computers.
      </p>
      
      <ul className="text-right"> 
        <li>
          <ThemedLink href="https://github.com">
            <FaGithub size={iconSize} className={iconClass} />
            LinkedIn
          </ThemedLink>
        </li>
        <li>
          <ThemedLink href="https://linkedin.com">
            <FaLinkedin size={iconSize} className={iconClass} />
            GitHub
          </ThemedLink>
        </li>
      </ul>
    </div>
  );
}