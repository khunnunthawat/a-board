import React, { FC } from 'react';
import {
  DialogBackdropProps,
  DialogBackdrop as HeadlessDialogBackdrop,
} from '@headlessui/react';

const DialogBackdrop: FC<DialogBackdropProps> = () => {
  return (
    <HeadlessDialogBackdrop
      transition
      className='fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
    />
  );
};

export default DialogBackdrop;
