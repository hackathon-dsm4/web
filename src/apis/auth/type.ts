export type SignInRequest = {
  token: string;
};

export type RefreshResponse = {
  accessToken: string;
  refreshToken: string;
};
