import { api } from './api';

import { Comment } from '@/types/comment';

export const getCommentByPost = async (postId: string): Promise<Comment[]> => {
  try {
    const response = await api.get<Comment[]>(`/comment/post/${postId}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (
  postId: string,
  userId: string,
  description: string
) => {
  try {
    const response = await api.post(`/comment`, {
      postId,
      userId,
      description,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const commentService = {
  getCommentByPost,
  createComment,
};
