export interface IUser {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string
}

export interface ILogin {
  username: string,
  password: string,
}