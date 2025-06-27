import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

const PrivateRoute = ({ children }) => {
  const { userLoggedIn } = useContext(UserContext);
  return userLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
