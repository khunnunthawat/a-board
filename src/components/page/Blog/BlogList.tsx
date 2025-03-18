'use client';

import classNames from 'classnames';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { CommunityType } from '@/types/common';
import BlogCard from '@/components/page/Blog/BlogCard';
import { usePostStore } from '@/store/postStore';

const BlogList = () => {
  const router = useRouter();

  const { postList } = usePostStore();

  const handlePostDetailById = useCallback((id: string) => {
    router.push(`/blog-detail/${id}`);
  }, []);

  return (
    <div className='py-6'>
      {postList?.map((item, index) => (
        <div
          key={item.id}
          className={classNames(
            'p-5 bg-white border-grey-100 cursor-pointer hover:bg-green-100 transition-colors',
            index === 0 ? 'rounded-t-xl border-t' : 'border-t',
            index === postList.length - 1 && 'rounded-b-xl border-b'
          )}
          onClick={() => handlePostDetailById(item.id)}
        >
          <BlogCard
            key={item.id}
            id={item.id}
            author={item.user.username}
            community={item.community as CommunityType}
            title={item.title}
            description={item.description}
            comments={item.comments.length || 0}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
