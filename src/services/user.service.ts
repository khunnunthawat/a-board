import { api } from './api';

import { User, UserResponse } from '@/types/user';

export const signInUser = async (username: string) => {
  try {
    const response = await api.post<UserResponse>('/user/signin', { username });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userService = {
  signInUser,
};
