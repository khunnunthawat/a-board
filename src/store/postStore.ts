import { create } from 'zustand';
import { Post } from '@/types/post';

interface PostStoreProps {
  postList: Post[];
  setPostList: (posts: Post[]) => void;
}

interface OurBlogPostStoreProps {
  ourBlogPostList: Post[];
  setOurBlogPostList: (posts: Post[]) => void;
}

export const usePostStore = create<PostStoreProps>((set) => ({
  postList: [],
  setPostList: (posts) => set({ postList: posts }),
}));

export const useOurBlogPostStore = create<OurBlogPostStoreProps>((set) => ({
  ourBlogPostList: [],
  setOurBlogPostList: (posts) => set({ ourBlogPostList: posts }),
}));
