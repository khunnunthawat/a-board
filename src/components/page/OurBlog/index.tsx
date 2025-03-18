'use client';

import OurBlogBlogToolbar from '@/components/page/OurBlog/OurBlogBlogToolbar';
import OurBlogList from '@/components/page/OurBlog/OurBlogList';

const OurBlog = () => {
  return (
    <div className='w-full max-w-[800px]'>
      <OurBlogBlogToolbar />
      <OurBlogList />
    </div>
  );
};

export default OurBlog;
