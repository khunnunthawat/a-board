'use client';

import React from 'react';
import MainLayout from '@/components/ui/Layout/MainLayout';
import BlogDetail from '@/components/page/Blog/BlogDetail';

const BlogDetailPage = () => {
  return (
    <MainLayout isPadding={false}>
      <div className='w-full min-h-screen bg-white flex justify-center p-8'>
        <BlogDetail />
      </div>
    </MainLayout>
  );
};

export default BlogDetailPage;
