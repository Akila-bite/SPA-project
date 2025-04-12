// import { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "../Firebase";
// import { onAuthStateChanged } from "firebase/auth";

// // Create authentication context
// const AuthContext = createContext();

// // AuthProvider component to provide currentUser context
// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Listen for authentication state changes
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user); // Set the user object if authenticated, null if not
//       setLoading(false); // loading false after the auth state is checked
//     });

    
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
//       </div>
//     );
//   }
  

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children} {/* Only render children after loading is complete */}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use authentication context
// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, } from "firebase/auth";
import { auth } from "../Firebase";

// Create authentication context
const AuthContext = createContext();

// AuthProvider component to provide currentUser context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register user and send email verification
  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);
      return { user, message: "Verification email sent. Please check your inbox." };
    } catch (error) {
      throw error;
    }
  };

  // Resend email verification
  const resendVerificationEmail = async () => {
    const user = auth.currentUser;
    if (user && !user.emailVerified) {
      await sendEmailVerification(user);
      return "Verification email resent.";
    } else {
      return "User is already verified or not logged in.";
    }
  };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload(); // Refresh user info to get updated emailVerified status
        if (user.emailVerified) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null); // Or keep user but show warning elsewhere
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false); // done checking auth
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        registerUser,
        resendVerificationEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);
