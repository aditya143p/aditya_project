import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import './Signup.css'
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); // React Router navigation

  const handleSignUp = () => {
    if (!username || !password || !mobile || !email) {
      setError("All fields are required!");
      return;
    }

    const newUser = { role, username, password, mobile, email };

    // Retrieve existing users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("key")) || [];

    // Check if username or email already exists
                                                  //abc          prashabt     adityakumar71120p@gmail.com ====adityakumar71120p@gmail.com
    const userExists = storedUsers.some(user => user.username === username || user.email === email);
    //                                           key  old            current   key  old           current
    if (userExists) {
      setError("User with this username or email already exists!");
      return;
    }

    // Save the new user
    ///    updated user=     old      +    current
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("key", JSON.stringify(updatedUsers));

    // Redirect to Login Page
    navigate("/login");
  };

  return (
    <div className="login-container">
      <h2>SignUp</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile No." required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
      
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>

      <button onClick={handleSignUp}>SignUp</button>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default SignUp;
