import IUser from "./IUser";

export default interface IBlog {
  idReviews?: number;
  dateCreated?: Date;
  title: string;
  description: string;
  user?: IUser;
}
