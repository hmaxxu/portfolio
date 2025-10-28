import React from 'react';
import Sidebar from './Sidebar';

interface TwoColumnLayoutProps {
  children: React.ReactNode;
}

export default function TwoColumnLayout({ children }: TwoColumnLayoutProps) {
  return (
    
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="hidden md:block md:w-1/8 bg-gray-100">
        {/* empty */}
      </div>
      
      <div className="
        w-full 
        md:w-3/16
      ">
        <div className="hidden md:block md:h-1/8 bg-gray-100 border-r border-gray-300">
          {/* empty */}
        </div>
        
        <Sidebar />
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