import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // We'll create this next

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth(); // Check if user is logged in

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
