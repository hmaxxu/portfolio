'use client';

import ThemedLink from '../components/ThemedLink';

export default function Sidebar() {
  return (
    <div className="p-4 bg-gray-100 h-7/8 border-r border-gray-300 flex flex-col items-end **text-right**">
      <h1 className="text-3xl font-bold mb-4">Name here</h1>

      <p className ="text-right mb-4 sm:block hidden">
        Undergrad student at some university, passionate about math and computers.
      </p>
      
      <ul className="text-right"> 
        <ThemedLink href="https://github.com">GitHub</ThemedLink>
      </ul>
    </div>
  );
}