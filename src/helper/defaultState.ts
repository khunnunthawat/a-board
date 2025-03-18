import { Post } from '@/types/post';

export const defaultPostInfo: Post = {
  id: '',
  title: '',
  description: '',
  community: '',
  user: {
    id: '',
    username: '',
    createdAt: '',
  },
  comments: [],
  createdAt: '',
  deletedAt: null,
};
