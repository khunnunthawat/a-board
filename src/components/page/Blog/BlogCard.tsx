import React from 'react';
import Image from 'next/image';

import * as Icons from '@/components/ui/Icons';
import { CommunityType } from '@/types/common';

interface BlogCardProps {
  id: string;
  author: string;
  avatar?: string;
  community: CommunityType;
  title: string;
  description: string;
  comments: number;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  author,
  avatar = '/avatar.png',
  community,
  title,
  description = '',
  comments = 0,
  onEdit,
  onDelete,
}) => {
  return (
    <>
      <div className='flex items-start justify-between mb-[15px]'>
        <div className='flex items-center gap-2.5'>
          {avatar && (
            <Image
              src={avatar}
              alt={author}
              width={40}
              height={40}
              className='w-[31px] h-[31px] rounded-full object-cover'
            />
          )}
          <span className='text-sm font-medium text-grey-300'>
            {author || ''}
          </span>
        </div>

        <div className='flex flex-row gap-[15px]'>
          {onEdit && (
            <button
              onClick={() => onEdit(id)}
              className='w-4 h-4 text-green-300 hover:text-green-300/80'
            >
              <Icons.EditIcon className='w-4 h-4' />
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(id)}
              className='text-green-300 hover:text-green-300/80'
            >
              <Icons.DeleteIcon className='w-4 h-4' />
            </button>
          )}
        </div>
      </div>

      {community && (
        <span className='inline-block bg-[#F3F3F3] text-[#4A4A4A] px-2 py-1 text-xs rounded-2xl mb-[5px]'>
          {community}
        </span>
      )}

      <h2 className='text-base font-semibold text-gray-900 mb-[2px]'>
        {title}
      </h2>
      <p className='text-grey-900 text-xs whitespace-pre-line'>
        {description || ''}
      </p>

      <div className='flex items-center gap-[5px] text-grey-300 mt-2.5'>
        <Icons.CommentIcon className='w-4 h-4' />
        <span className='text-xs'>
          {comments === 0
            ? 'No Comments'
            : `${comments} ${comments === 1 ? 'Comment' : 'Comments'}`}
        </span>
      </div>
    </>
  );
};

export default BlogCard;
