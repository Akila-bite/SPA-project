import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

// Create authentication context
const AuthContext = createContext();

// AuthProvider component to provide currentUser context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Set the user object if authenticated, null if not
      setLoading(false); // Set loading to false after the auth state is checked
    });

    // Clean up subscription on component unmount
    return () => unsubscribe();
  }, []);

  
  if (loading) {
    return <div>Loading...</div>; // Need to replace this with a cool spinner or placeholder
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children} {/* Only render children after loading is complete */}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);

