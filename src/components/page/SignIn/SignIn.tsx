'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Input } from '@headlessui/react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button';

import { useAuth } from '@/hooks';
import { userService } from '@/services/user.service';

const SignIn = () => {
  const { login, getUsername } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError(true);
      return;
    }

    try {
      const res = await userService.signInUser(username);

      localStorage.setItem('username', res.user.username);
      localStorage.setItem('userId', res.user.id);

      login(username);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (getUsername()) {
      router.replace('/');
    }
  }, [getUsername, router]);

  if (getUsername()) return null;

  return (
    <div className='flex w-full min-h-screen bg-green-500'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2'>
        <div className='p-4 flex items-center gap-7 md:gap-[42px] justify-center flex-col bg-green-300 md:order-2 rounded-[0px_0px_36px_36px] md:rounded-[36px_0px_0px_36px]'>
          <div>
            <Image
              className='hidden md:block'
              src='/aBoard.png'
              alt='aBoard'
              width={300}
              height={230}
            />
            <Image
              className='block md:hidden'
              src='/aBoard.png'
              alt='aBoard'
              width={172}
              height={132}
            />
          </div>
          <span className='text-2xl md:text-[28px] leading-6 text-white font-castoro italic'>
            a Board
          </span>
        </div>
        <div className='flex items-center justify-center p-4'>
          <div className='flex flex-col w-full max-w-[384px]'>
            <span className='text-[28px] font-semibold leading-normal mb-10'>
              Sign in
            </span>
            <form onSubmit={handleSignIn} className='grid gap-5'>
              <Input
                className={classNames(
                  'block w-full rounded-lg border border-grey-200 py-[10px] px-[14px] text-base placeholder:text-grey-500 bg-grey-400 text-text',
                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                  error && '!border-red-500'
                )}
                placeholder='Username'
                value={username}
                onChange={(e) => {
                  if (error) setError(false);
                  setUsername(e.target.value);
                }}
              />
              <Button type='submit'>Sign In</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
