import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; 

// wraps around the favorites page ensuring that the user can access page after login
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth(); // Check if user is logged in

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
