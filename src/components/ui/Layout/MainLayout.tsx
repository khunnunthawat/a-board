import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import Navbar from '@/components/ui/Layout/Navbar';
import Sidebar from '@/components/ui/Layout/Sidebar';

interface MainLayoutProps {
  children: ReactNode;
  isPadding?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ children, isPadding = true }) => {
  return (
    <div className='flex flex-col h-screen max-h-screen'>
      <Navbar />

      <div className='flex flex-grow w-full overflow-y-auto bg-grey-100'>
        <Sidebar />

        <main className={classNames('flex-grow w-full', isPadding && 'p-10')}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
