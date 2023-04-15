export interface ResType {
  message: string;
  userId?: string;
  profileImage?: string;
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
