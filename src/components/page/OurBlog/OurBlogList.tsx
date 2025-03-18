import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

import { CommunityType } from '@/types/common';
import BlogCard from '@/components/page/Blog/BlogCard';
import OurBlogEditDialog from '@/components/page/OurBlog/OurBlogEditDialog';
import OurBlogDeleteDialog from '@/components/page/OurBlog/OurBlogDeleteDialog';
import { useAuth, usePost } from '@/hooks';
import { useOurBlogPostStore } from '@/store/postStore';
import { postService } from '@/services/post.service';

const OurBlogList = () => {
  const { userId } = useAuth();

  const { fetchGetPostsByUserId } = usePost();
  const { ourBlogPostList } = useOurBlogPostStore();

  const [editPostId, setEditPostId] = useState('');
  const [deletePostId, setDeletePostId] = useState('');
  const [isOurBlogEditDialog, setOurBlogEditDialog] = useState(false);
  const [isOurBlogDeleteDialog, setOurBlogDeleteDialog] = useState(false);

  const fetchDeletePost = async (postId: string, userId: string) => {
    try {
      const response = await postService.deletePost(postId, userId);

      if (response.status === 200) {
        fetchGetPostsByUserId(userId);
        setOurBlogDeleteDialog(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenOurBlogEditDialog = useCallback((postId: string) => {
    if (postId) {
      setOurBlogEditDialog(true);
      setEditPostId(postId);
    }
  }, []);

  const handleCloseEditPost = useCallback(() => {
    setOurBlogEditDialog(false);
  }, []);

  const handleOpenOurBlogDeleteDialog = useCallback((postId: string) => {
    if (postId) {
      setOurBlogDeleteDialog(true);
      setDeletePostId(postId);
    }
  }, []);

  const handleDeletePost = useCallback(() => {
    if (deletePostId && userId) {
      fetchDeletePost(deletePostId, userId);
    }
  }, [deletePostId, userId]);

  const handleCloseDeletePost = useCallback(() => {
    setOurBlogDeleteDialog(false);
  }, []);

  return (
    <>
      <div className='py-6'>
        {ourBlogPostList?.map((item, index) => (
          <div
            key={item.id}
            className={classNames(
              'p-5 bg-white border-grey-100',
              index === 0 ? 'rounded-t-xl border-t' : 'border-t',
              index === ourBlogPostList.length - 1 && 'rounded-b-xl border-b'
            )}
          >
            <BlogCard
              key={item.id}
              id={item.id}
              author={item.user.username}
              community={item.community as CommunityType}
              title={item.title}
              description={item.description}
              comments={item.comments.length || 0}
              onEdit={() => handleOpenOurBlogEditDialog(item.id)}
              onDelete={() => handleOpenOurBlogDeleteDialog(item.id)}
            />
          </div>
        ))}
      </div>

      <OurBlogEditDialog
        postId={editPostId}
        isOpen={isOurBlogEditDialog}
        onClose={handleCloseEditPost}
        onConfirm={handleCloseEditPost}
        onCancel={handleCloseEditPost}
      />

      <OurBlogDeleteDialog
        isOpen={isOurBlogDeleteDialog}
        onClose={handleCloseDeletePost}
        onConfirm={handleDeletePost}
        onCancel={handleCloseDeletePost}
      />
    </>
  );
};

export default OurBlogList;
