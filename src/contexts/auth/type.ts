import { AuthParams } from "@/service/auth/type";

export type UserData = {
  token: string;
};

export type AuthContextState = {
  user: UserData | null;
  login: (data: AuthParams) => void;
  logout: () => void;
};
