import { Comment } from './comment';
import { CommunityType } from './common';
import { User } from './user';

export interface Post {
  id: string;
  title: string;
  description: string;
  community: string;
  user: User;
  comments: Comment[];
  createdAt: string;
  deletedAt: string | null;
}

export interface CreatePostRequest {
  userId: string;
  title: string;
  description: string;
  community: CommunityType;
}

export interface UpdatePostRequest {
  title: string;
  description: string;
}
