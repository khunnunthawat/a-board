import { api } from './api';

import { CreatePostRequest, Post } from '@/types/post';

export const getPosts = async (
  searchQuery?: string,
  community?: string
): Promise<Post[]> => {
  try {
    const search = searchQuery ?? '';

    const response = await api.get<Post[]>('/post', {
      params: {
        search: search.length >= 2 ? search : undefined,
        community: community || undefined,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostById = async (postId: string): Promise<Post> => {
  try {
    const response = await api.get<Post>(`/post/${postId}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostsByUserId = async (
  userId: string,
  searchQuery?: string,
  community?: string
): Promise<Post[]> => {
  try {
    const search = searchQuery ?? '';

    const response = await api.get<Post[]>(`/post/user/${userId}`, {
      params: {
        search: search.length >= 2 ? search : undefined,
        community: community || undefined,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData: CreatePostRequest) => {
  try {
    const response = await api.post<Post>('/post', postData);

    return response;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postId: string, userId: string) => {
  try {
    const response = await api.delete(`/post/${postId}`, {
      data: { userId },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (
  postId: string,
  userId: string,
  updateData: Partial<Post>
) => {
  try {
    const response = await api.patch<Post>(`/post/${postId}`, {
      ...updateData,
      userId,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postService = {
  getPosts,
  getPostById,
  getPostsByUserId,
  createPost,
  deletePost,
  updatePost,
};
