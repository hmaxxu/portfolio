import React from 'react';
import Sidebar from './Sidebar';

interface TwoColumnLayoutProps {
  children: React.ReactNode;
}

export default function TwoColumnLayout({ children }: TwoColumnLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row min-h-screen bg-white dark:bg-gray-900">
        <aside className="
          w-full md:w-1/3 lg:w-1/4
          md:sticky md:top-0 md:h-screen
          bg-gray-100 dark:bg-gray-800 
          border-r border-gray-300 dark:border-gray-700 
          flex flex-col justify-center
        ">
          <Sidebar />
        </aside>

        <main className="
          flex-grow 
          p-6 md:p-16 
          bg-white dark:bg-gray-900 
          border-r border-gray-300 dark:border-gray-700 
          relative
        ">
          
          <div className="relative z-10 max-w-3xl">
            {children}
          </div>
        </main>
        
      </div>
    </div>
  );
}