'use client';

import BlogToolbar from '@/components/page/Blog/BlogToolbar';
import BlogList from '@/components/page/Blog/BlogList';

const Home = () => {
  return (
    <div className='w-full max-w-[800px]'>
      <BlogToolbar />
      <BlogList />
    </div>
  );
};

export default Home;
