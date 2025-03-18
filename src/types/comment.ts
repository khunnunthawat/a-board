import { User } from './user';

export interface Comment {
  id: string;
  description: string;
  user: User;
  createdAt: string;
  deletedAt: string | null;
}
