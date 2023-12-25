export interface ILogin {
  userName: string;
  password: string;
}

export interface ISignInResponse {
  token: string;
  id: string;
  userName: string;
  email: string;
  role: string[];
  type: string;
  refreshToken: string;
}
