export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  role: 'admin';
  lastLogin?: string;
}

export interface UserProfile {
  email: string;
  avatar?: string;
  currentPassword: string;
  newPassword?: string;
  confirmPassword?: string;
}