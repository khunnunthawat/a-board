'use client';

import React, { useMemo, useState } from 'react';
import { Button, Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames';

import { useAuth } from '@/hooks';
import * as Icons from '@/components/ui/Icons';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { getUsername, logout } = useAuth();

  const username = getUsername();
  const [isOpen, setIsOpen] = useState(false);

  const isActivePath = useMemo(
    () => (targetPath: string) => pathname === targetPath,
    [pathname]
  );

  const handleLogout = () => {
    router.push('/');
    setIsOpen(false);
    logout();
  };

  return (
    <div className='flex items-center justify-between bg-green-500 text-white px-8 h-[60px] py-2.5'>
      <div
        className='font-castoro italic text-xl cursor-pointer'
        onClick={() => router.push('/')}
      >
        a Board
      </div>
      <div className='hidden sm:block'>
        {username ? (
          <div className='flex gap-5 items-center'>
            <div className='text-base font-medium cursor-default'>
              {username}
            </div>
            <div className='w-10 h-10 overflow-hidden rounded-full'>
              <Image
                src='/avatar.png'
                alt='User Profile'
                width={40}
                height={40}
                className='object-cover w-full h-full'
              />
            </div>
            <div onClick={handleLogout} className='text-xs cursor-pointer'>
              logout
            </div>
          </div>
        ) : (
          <Button
            onClick={() => {
              router.push('/signin');
            }}
            className='h-10 bg-success py-[10px] px-[16px] rounded-lg text-sm font-semibold w-[105px]'
          >
            Sign In
          </Button>
        )}
      </div>
      <div className='block sm:hidden'>
        <Icons.MenuIcon
          className='w-[41px] h-[41px] cursor-pointer text-gray-100 hover:text-green-300 transition'
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <Dialog open={isOpen} onClose={setIsOpen} className='relative z-10'>
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-black/50 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0'
        />
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <DialogPanel
                transition
                className='pointer-events-auto w-screen max-w-[280px] transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700'
              >
                <div className='flex h-full gap-9 flex-col overflow-y-scroll hide-scrollbar bg-green-500 p-9 rounded-[12px_0px_0px_12px]'>
                  <Button
                    type='button'
                    onClick={() => setIsOpen(false)}
                    className='relative'
                  >
                    <Icons.ArrowRightIcon className='w-4 h-3 text-gray-100 hover:text-green-300 transition' />
                  </Button>
                  <div className='relative flex-1'>
                    <nav className='flex flex-col gap-6'>
                      <Button
                        className={classNames(
                          'flex items-center gap-3 text-base hover:text-green-300 transition',
                          isActivePath('/') && 'font-extrabold'
                        )}
                        onClick={() => {
                          router.push('/');
                          setIsOpen(false);
                        }}
                      >
                        <Icons.HomeIcon
                          className='h-6 w-6'
                          strokeWidth={isActivePath('/') ? '2.5' : '1.5'}
                        />
                        <span>Home</span>
                      </Button>
                      <Button
                        className={classNames(
                          'flex items-center gap-3 text-base hover:text-green-300 transition',
                          isActivePath('/our-blog') && 'font-extrabold'
                        )}
                        onClick={() => {
                          router.push('/our-blog');
                          setIsOpen(false);
                        }}
                      >
                        <Icons.BlogIcon
                          className='h-6 w-6'
                          strokeWidth={isActivePath('/blog') ? '2.5' : '1.5'}
                        />
                        <span>Our Blog</span>
                      </Button>
                    </nav>
                  </div>
                  {username ? (
                    <Button
                      onClick={handleLogout}
                      className='text-xs hover:text-green-300 transition'
                    >
                      logout
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        router.push('/signin');
                      }}
                      className='text-xs hover:text-green-300 transition'
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Navbar;
