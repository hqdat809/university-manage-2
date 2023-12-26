export interface ILogin {
  userName: string;
  password: string;
  rememberMe: boolean;
}

export interface ISignInResponse {
  accessToken: string;
  refreshToken: string;
  type: string;
}

export interface IError {
  error: string;
  message: string;
  path: string;
  status: number;
  statusText?: string;
}
