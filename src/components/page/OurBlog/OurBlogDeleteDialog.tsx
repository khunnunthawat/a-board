import React, { FC } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

import Button from '@/components/ui/Button';
import { DialogBackdrop } from '@/components/ui/Dialog';

interface OurBlogDeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const OurBlogDeleteDialog: FC<OurBlogDeleteDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-10'>
      <DialogBackdrop />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center sm:p-0'>
          <DialogPanel
            transition
            className='w-full max-w-[400px] rounded-xl bg-white relative transform overflow-hidden px-4 py-[30px] shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
          >
            <div className='grid gap-2 text-center'>
              <DialogTitle
                className='text-lg font-semibold text-grey-900 whitespace-pre-line'
              >
                {'Please confirm if you wish to\ndelete the post'}
              </DialogTitle>
              <p className='text-base text-[#475467] whitespace-pre-line'>
                {`Are you sure you want to delete the post?\nOnce deleted, it cannot be recovered.`}
              </p>
            </div>
            <div className='sm:mt-8 mt-6 flex sm:flex-row flex-col-reverse gap-3'>
              <Button
                variant='outlined'
                onClick={onCancel}
                className='w-full min-h-[44px]'
              >
                Cancel
              </Button>
              <Button
                variant='danger'
                onClick={onConfirm}
                className='w-full min-h-[44px]'
              >
                Delete
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default OurBlogDeleteDialog;
