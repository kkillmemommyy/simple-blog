import { useContext } from "react";
import { AuthContext } from "../../context/";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
