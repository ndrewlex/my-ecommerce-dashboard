import { useLocalStorage } from "@/hooks/useLocalStorage";
import { loginUser, logoutUser } from "@/service/auth";
import { AuthParams } from "@/service/auth/type";
import { FC, ReactNode, createContext, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextState, UserData } from "./type";

export const AuthContext = createContext<AuthContextState>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useLocalStorage<null | UserData>("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = useCallback(
    async (data: AuthParams) => {
      const res = await loginUser(data);
      if (res.isSuccess) {
        setUser(res.data?.user);
        navigate("/profile");
      }
    },
    [navigate, setUser]
  );

  // call this function to sign out logged in user
  const logout = useCallback(async () => {
    const res = await logoutUser();
    if (res.isSuccess) {
      setUser(null);
      navigate("/login", { replace: true });
    }
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
