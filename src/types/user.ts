export interface User {
  id: string;
  username: string;
  createdAt: string;
}

export interface UserResponse {
  message: string;
  user: User;
}
