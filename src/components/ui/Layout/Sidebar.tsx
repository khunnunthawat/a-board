'use client';

import React, { useMemo } from 'react';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import { useAuth } from '@/hooks';
import * as Icons from '@/components/ui/Icons';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { getUsername } = useAuth();

  const username = getUsername();

  const isActivePath = useMemo(
    () => (targetPath: string) => pathname === targetPath,
    [pathname]
  );

  const handleRouterOurBlog = () => {
    if (!username) {
      router.push('/signin');
    } else {
      router.push('/our-blog');
    }
  };

  return (
    <nav className='sm:flex flex-col gap-1 w-[280px] py-8 px-4 hidden'>
      <div className='mx-4'>
        <Link
          href='/'
          className={classNames(
            'flex items-center gap-3 text-base hover:text-green-300 transition text-green-500 py-2 px-3',
            isActivePath('/') && 'font-extrabold'
          )}
        >
          <Icons.HomeIcon
            className='h-6 w-6'
            strokeWidth={isActivePath('/') ? '2.5' : '1.5'}
          />
          <span>Home</span>
        </Link>
      </div>
      <div className='mx-4'>
        <div
          className={classNames(
            'flex cursor-pointer items-center gap-3 text-base hover:text-green-300 transition text-green-500 py-2 px-3',
            isActivePath('/our-blog') && 'font-extrabold'
          )}
          onClick={handleRouterOurBlog}
        >
          <Icons.BlogIcon
            className='h-6 w-6'
            strokeWidth={isActivePath('/blog') ? '2.5' : '1.5'}
          />
          <span>Our Blog</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
