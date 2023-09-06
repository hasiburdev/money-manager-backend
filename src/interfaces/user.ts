export interface User {
  _id: string;
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  gender: string;
  avatarurl: string;
  accounts: string[];
  subscription: string;
  subscriptionExpiryDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateUser = Pick<
  User,
  "email" | "firstName" | "lastName" | "password"
>;
