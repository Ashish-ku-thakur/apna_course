import LeftSideBar from '@/components/admin/sidebar/LeftSideBar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      {/* ✅ Sidebar - hidden on small screens, shown from lg and above */}
      <div className='hidden md:block w-80 bg-gray-200 border py-3 px-8 h-screen fixed top-16 left-0'>
        <LeftSideBar />
      </div>

      {/* ✅ Main content area: adjust margin-left only on large screens */}
      <div className='flex-1 ml-0 md:ml-80'>
        {children}
      </div>
    </div>
  );
};

export default layout;
