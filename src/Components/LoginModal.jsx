import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase";
import "./LoginModal.css";


export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
      // navigate("/favorites");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      onClose();
      // navigate("/favorites");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Registering with email:", email);
    onClose();
  };

  return (
   <>
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>✖</button>
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
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>

      <button onClick={handleGoogleLogin}>Login with Google</button>

      <div className="modal-footer">
        {isRegistering ? (
          <span>
            <p>Already have an account?{" "}</p>
            <button onClick={() => setIsRegistering(false)}>Login</button>
          </span>
        ) : (
          <span>
            <p>Don't have an account?{" "}</p>
            <button onClick={() => setIsRegistering(true)}>Register</button>
          </span>
        )}
        </div>
      
    </div>
    </> 
  );

}


