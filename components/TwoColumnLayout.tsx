import React from 'react';
import Sidebar from './Sidebar';

interface TwoColumnLayoutProps {
  children: React.ReactNode;
}

export default function TwoColumnLayout({ children }: TwoColumnLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      <div className="hidden md:block md:w-5/32 bg-gray-100 dark:bg-gray-800">
        {/* empty */}
      </div>
      
      <div className="
        w-full 
        md:w-3/16
        md:sticky
        md:top-0
        md:h-screen 
        md:flex md:flex-col
      ">
        
        <div className="
          hidden md:block md:h-1/8 
          bg-gray-100 dark:bg-gray-800 
          border-r border-gray-300 dark:border-gray-700
        ">
          {/* empty */}
        </div>
        
        <div className="flex-grow">
          <Sidebar />
        </div>
      </div>

      <main className="
        w-full
        md:w-1/2
        p-6
      ">
        {children}
      </main>
      
    </div>
  );
}
