'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

import * as Icons from '@/components/ui/Icons';
import Button from '@/components/ui/Button';
import { postService } from '@/services/post.service';
import { Post } from '@/types/post';
import { commentService } from '@/services/comment.service';
import { Comment } from '@/types/comment';
import { formatRelativeTime } from '@/helper/time';
import { defaultPostInfo } from '@/helper/defaultState';
import { useAuth } from '@/hooks';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const { userId } = useAuth();

  const isOnline = true;

  const [postInfo, setPostInfo] = useState<Post | null>(defaultPostInfo);
  const [commentInfo, setCommentInfo] = useState<Comment[] | null>(null);
  const [comment, setComment] = useState<string>('');
  const [isCommentTextarea, setIsCommentTextarea] = useState<boolean>(false);

  const [isCommentDialog, setIsCommentDialog] = useState<boolean>(false);

  const fetchGetPostById = async (postId: string) => {
    try {
      const response = await postService.getPostById(postId);
      setPostInfo(response);
    } catch (error) {
      setPostInfo(null);
      console.error(error);
    }
  };

  const fetchGetCommentByPost = async (postId: string) => {
    try {
      const response = await commentService.getCommentByPost(postId);
      setCommentInfo(response);
    } catch (error) {
      setCommentInfo(null);
      console.error(error);
    }
  };

  const handlePostComment = useCallback(async () => {
    if (!comment.trim() || !postInfo) return;

    try {
      if (userId) {
        await commentService.createComment(postInfo.id, userId, comment);

        fetchGetPostById(postInfo.id);
        fetchGetCommentByPost(postInfo.id);
        setComment('');
        setIsCommentTextarea(false);
        setIsCommentDialog(false);
      }
    } catch (error) {
      console.error(error);
    }
  }, [comment, postInfo, userId]);

  const handleCancelComment = useCallback(() => {
    setComment('');
    setIsCommentTextarea(false);
    setIsCommentDialog(false);
  }, []);

  useEffect(() => {
    if (id) {
      fetchGetPostById(id as string);
      fetchGetCommentByPost(id as string);
    } else {
      router.push('/signin');
    }

    return () => {
      setPostInfo(null);
      setCommentInfo(null);
      setComment('');
    };
  }, [id, router]);

  return (
    <div className='max-w-[800px] w-full mx-auto debug-screens'>
      <button
        onClick={() => router.back()}
        className='flex items-center w-11 h-11 rounded-full p-2.5 bg-green-100'
      >
        <Icons.ArrowLeftIcon className='w-6 h-6 text-green-500' />
      </button>

      <div className='flex flex-row gap-2.5 items-center mt-10'>
        <div className='relative inline-block w-12 h-12'>
          <Image
            src='/avatar.png'
            alt='avatar'
            width={48}
            height={48}
            className='rounded-full object-cover'
          />
          {isOnline && (
            <span className='absolute bottom-0 right-0 w-3 h-3 bg-[#00C252] border-[1.5px] border-white rounded-full' />
          )}
        </div>
        <span className='text-text text-sm font-medium'>
          {postInfo?.user.username}
        </span>
        <span className='text-grey-300 text-sm'>
          {formatRelativeTime(postInfo?.createdAt || '')}
        </span>
      </div>

      <span className='inline-block bg-[#F3F3F3] text-[#4A4A4A] px-2 py-1 text-xs rounded-2xl mt-2.5 mb-4'>
        {postInfo?.community}
      </span>

      <div className='flex flex-col gap-4'>
        <h1 className='text-[28px] leading-6 font-bold text-grey-900'>
          {postInfo?.title}
        </h1>
        <span className='text-text text-sx mb-7 whitespace-pre-line'>
          {postInfo?.description}
        </span>
        <div className='flex items-center gap-[5px] text-grey-300'>
          <Icons.CommentIcon className='w-4 h-4' />
          <span className='text-xs'>
            {postInfo?.comments?.length === 0
              ? 'No Comments'
              : `${postInfo?.comments?.length} ${postInfo?.comments?.length === 1 ? 'Comment' : 'Comments'}`}
          </span>
        </div>
      </div>

      {!isCommentTextarea && (
        <Button
          variant='secondary'
          className='hidden md:block min-w-[105px] text-sm mt-8 mb-6'
          onClick={() => setIsCommentTextarea(true)}
        >
          Add Comments
        </Button>
      )}

      <Button
        variant='secondary'
        className='block md:hidden min-w-[105px] text-sm mt-8 mb-6'
        onClick={() => setIsCommentDialog(true)}
      >
        Add Comments
      </Button>

      {isCommentTextarea && (
        <div className='mt-5 mb-10 hidden md:block'>
          <textarea
            className='w-full h-[100px] px-4 py-2.5 border border-grey-200 rounded-lg text-grey-600 text-base outline-none'
            placeholder="What's on your mind..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className='flex justify-end gap-3 mt-2.5'>
            <Button
              variant='secondary'
              className='min-w-[105px] text-sm shadow-sm'
              onClick={handleCancelComment}
            >
              Cancel
            </Button>
            <Button
              className='min-w-[105px] text-sm shadow-sm'
              onClick={handlePostComment}
            >
              Post
            </Button>
          </div>
        </div>
      )}

      <div className='grid gap-6'>
        {Array.isArray(commentInfo) && commentInfo.length > 0 && (
          <>
            {commentInfo?.map((item) => (
              <div key={item.id} className='flex items-start gap-2.5'>
                <Image
                  src='/avatar.png'
                  alt='avatar'
                  width={40}
                  height={40}
                  className='w-10 h-10 rounded-full object-cover'
                />
                <div>
                  <div className='flex flex-row gap-2.5 items-center'>
                    <span className='text-text text-sm font-medium'>
                      {item.user.username}
                    </span>
                    <span className='text-grey-300 text-xs'>
                      {formatRelativeTime(item.createdAt || '')}
                    </span>
                  </div>
                  <p className='text-text text-xs'>{item.description}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <Dialog
        open={isCommentDialog}
        onClose={handleCancelComment}
        className='relative z-10 focus:outline-none'
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
        />

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='w-full max-w-[400px] rounded-xl bg-white py-[30px] px-4 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
            >
              <div className='absolute right-0 top-0 block pr-2.5 pt-2.5'>
                <button
                  type='button'
                  onClick={handleCancelComment}
                  className='outline-none'
                >
                  <Icons.CloseIcon className='w-6 h-6 text-green-500' />
                </button>
              </div>
              <div className='text-start'>
                <DialogTitle
                  as='h3'
                  className='text-xl font-medium text-grey-900'
                >
                  Add Comments
                </DialogTitle>
                <div className='mt-5'>
                  <textarea
                    className='w-full h-[120px] px-4 py-2.5 border border-grey-200 rounded-lg text-grey-600 text-base outline-none'
                    placeholder="What's on your mind..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
              </div>
              <div className='xs:mt-[30px] mt-8 flex md:flex-row xs:flex-col w-full gap-2.5'>
                <Button
                  variant='secondary'
                  className='w-full text-sm'
                  onClick={handleCancelComment}
                >
                  Cancel
                </Button>
                <Button className='w-full text-sm' onClick={handlePostComment}>
                  Post
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default BlogDetail;
