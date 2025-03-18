import React, { FC, useEffect, useState } from 'react';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Input,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { useForm } from 'react-hook-form';

import { OptionProps } from '@/types/common';
import Button from '@/components/ui/Button';
import { DialogBackdrop } from '@/components/ui/Dialog';
import * as Icons from '@/components/ui/Icons';
import { communityOptions } from '@/helper/option';
import { postService } from '@/services/post.service';
import { Post, UpdatePostRequest } from '@/types/post';
import { defaultPostInfo } from '@/helper/defaultState';
import { useAuth, usePost } from '@/hooks';

interface OurBlogEditDialogProps {
  postId: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const OurBlogEditDialog: FC<OurBlogEditDialogProps> = ({
  postId,
  isOpen,
  onClose,
  onConfirm,
  onCancel,
}) => {
  const { userId } = useAuth();
  const { fetchGetPostsByUserId } = usePost();

  const [postInfo, setPostInfo] = useState<Post | null>(defaultPostInfo);
  const [selectedCommunity, setSelectedCommunity] =
    useState<OptionProps | null>(null);

  const fetchGetPostById = async (postId: string) => {
    try {
      const response = await postService.getPostById(postId);

      setPostInfo(response);
      setValue('title', response.title);
      setValue('description', response.description);

      const findCommunity = communityOptions.find(
        (community) => community.label === response.community
      );
      setSelectedCommunity(findCommunity || null);
    } catch (error) {
      setPostInfo(null);
      console.error(error);
    }
  };

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit = async (data: UpdatePostRequest) => {
    if (!postInfo || !selectedCommunity) return;

    try {
      if (userId) {
        await postService.updatePost(postInfo.id, userId, {
          title: data.title,
          description: data.description,
          community: selectedCommunity.label,
        });

        fetchGetPostsByUserId(userId);
        onConfirm();
      }
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchGetPostById(postId);
    }
  }, [postId]);

  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-10'>
      <DialogBackdrop />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center'>
          <DialogPanel
            transition
            className='relative w-full sm:max-w-[658px] transform overflow-hidden rounded-xl bg-white py-[30px] px-4 text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:p-[30px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
          >
            <div className='absolute right-0 top-0 pr-2.5 pt-2.5 sm:pr-3.5 sm:pt-3.5 sm:block'>
              <button
                type='button'
                onClick={onClose}
                className='focus:outline-none'
              >
                <Icons.CloseIcon className='w-6 h-6 text-green-500 hover:text-green-500/90' />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-[30px] sm:gap-2.5 text-start'>
                <div>
                  <DialogTitle className='text-2xl sm:text-[28px] font-semibold text-grey-900 mb-[30px]'>
                    Edit Post
                  </DialogTitle>
                  <div className='grid gap-3.5'>
                    {selectedCommunity && (
                      <Listbox
                        value={selectedCommunity}
                        onChange={setSelectedCommunity}
                      >
                        <div className='relative w-full sm:max-w-[195px]'>
                          <ListboxButton className='relative flex w-full cursor-pointer sm:min-w-[195px] bg-transparent border border-success rounded-lg py-2.5 px-4 text-sm font-semibold text-success outline-none shadow-xs bg-white'>
                            <div className='block truncate'>
                              {selectedCommunity
                                ? selectedCommunity.label
                                : 'Choose a community'}
                            </div>
                            <div className='pointer-events-none absolute inset-y-0 right-4 flex items-center'>
                              <Icons.ChevronDownIcon className='w-5 h-5 text-success' />
                            </div>
                          </ListboxButton>
                          <ListboxOptions
                            transition
                            className='absolute z-10 left-0 mt-[5.48px] sm:mt-[15px] sm:w-[320px] w-full overflow-auto rounded-lg border border-grey-200 bg-white py-1 text-sm text-text font-semibold focus:outline-none'
                          >
                            {communityOptions.map((item) => (
                              <ListboxOption
                                key={item.id}
                                value={item}
                                className='group relative flex justify-between cursor-pointer select-none py-2.5 px-3.5 text-text transition text-base font-medium hover:bg-green-100 data-[focus]:bg-green-100'
                              >
                                <span>{item.label}</span>
                                <span className='absolute inset-y-0 right-0 flex items-center pr-4 [.group:not([data-selected])_&]:hidden'>
                                  <Icons.CheckIcon className='w-5 h-5' />
                                </span>
                              </ListboxOption>
                            ))}
                          </ListboxOptions>
                        </div>
                      </Listbox>
                    )}
                    <Input
                      type='text'
                      placeholder='Title'
                      className='block w-full px-4 py-2.5 rounded-lg border border-grey-200 text-text placeholder:text-grey-600 outline-none bg-transparent'
                      {...register('title')}
                    />
                    <textarea
                      className='block w-full px-4 py-2.5 h-[234px] rounded-lg border border-grey-200 text-text placeholder:text-grey-600 outline-none bg-transparent'
                      placeholder={`What’s on your mind...`}
                      {...register('description')}
                    />
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row sm:justify-end gap-3'>
                  <Button
                    variant='secondary'
                    className='w-full sm:max-w-[105px] text-sm'
                    onClick={onCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    className='w-full sm:max-w-[105px] text-sm'
                    type='submit'
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default OurBlogEditDialog;
