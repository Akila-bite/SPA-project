

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import "./LoginModal.css";

export default function LoginModal({ onClose, onSuccess, showIntro = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [introComplete, setIntroComplete] = useState(!showIntro);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = {
        uid: result.user.uid,
        email: result.user.email,
      };
      onSuccess?.(firebaseUser);
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = {
        uid: result.user.uid,
        email: result.user.email,
      };
      onSuccess?.(firebaseUser);
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = {
        uid: result.user.uid,
        email: result.user.email,
      };
      onSuccess?.(firebaseUser);
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>

        {!introComplete ? (
          <>
            <h2>Login to access your saved recipes</h2>
            <button className="btn btn-primary mt-3" onClick={() => setIntroComplete(true)}>
              Next
            </button>
          </>
        ) : (
          <>
            <h2>{isRegistering ? "Register" : "Login"}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={isRegistering ? handleRegister : handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">
                {isRegistering ? "Register" : "Login"}
              </button>
            </form>

            <button className="google-button" onClick={handleGoogleLogin}>
              Login with Google
            </button>

            <div className="modal-footer">
              {isRegistering ? (
                <>
                  <p>Already have an account?</p>
                  <button onClick={() => setIsRegistering(false)}>Login</button>
                </>
              ) : (
                <>
                  <p>Don't have an account?</p>
                  <button onClick={() => setIsRegistering(true)}>Register</button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
