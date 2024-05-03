import { AuthContext } from "@/contexts/auth";
import { FC, useContext } from "react";
import { Navigate, RouteProps } from "react-router-dom";

type RouteElement = Pick<RouteProps, "element"> & { isProtected: boolean };

export const RouteElement: FC<RouteElement> = ({ isProtected, ...props }) => {
  const { user } = useContext(AuthContext);

  if (isProtected && !user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  if (!isProtected && user) {
    return <Navigate to="/profile" />;
  }

  return props.element;
};
