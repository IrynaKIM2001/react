export interface ICommentModel{
  postId: number;
  id: number;
  user: IUserModel;
  likes: number;
  body: string;
}
export interface IUserModel{
  id: number,
  username: string,
  fullName: string
}