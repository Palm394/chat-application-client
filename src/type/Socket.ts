export interface ResType {
  message: string;
  userId?: string;
  username?: string;
  profileImage?: string;
  backgroundImage?: string;
}

export type UserSocketType = {
  _id: string;
  username: string;
  profileImage: string;
  chatId: string;
};

export type GroupSocketType = {
  _id: string;
  name: string;
  backgroundImage: string;
};

export type MessageSocketType = {
  _id: string;
  message: string;
  userId: string;
  username: string;
  profileImage: string;
  isOwner: boolean;
  isLiked: boolean;
  like: number;
  createdAt: Date;
  chatId: string;
};
