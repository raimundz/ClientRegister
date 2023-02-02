export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  tel: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  tel?: string;
}
