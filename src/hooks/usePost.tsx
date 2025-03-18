import { usePostStore, useOurBlogPostStore } from '@/store/postStore';
import { postService } from '@/services/post.service';

const usePost = () => {
  const { setPostList } = usePostStore();
  const { setOurBlogPostList } = useOurBlogPostStore();

  const fetchGetPosts = async (searchQuery = '', community = '') => {
    try {
      const response = await postService.getPosts(searchQuery, community);
      setPostList(response);
    } catch (error) {
      setPostList([]);
      console.error(error);
    }
  };

  const fetchGetPostsByUserId = async (
    userId: string,
    searchQuery = '',
    community = ''
  ) => {
    try {
      const response = await postService.getPostsByUserId(
        userId,
        searchQuery,
        community
      );
      setOurBlogPostList(response);
    } catch (error) {
      setOurBlogPostList([]);
      console.error(error);
    }
  };

  return {
    fetchGetPosts,
    fetchGetPostsByUserId,
  };
};

export default usePost;
