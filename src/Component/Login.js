import React, { useState, useEffect } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [error, setError] = useState("");
  const [storedUsers, setStoredUsers] = useState([]);

  // Load stored users from localStorage when the component mounts
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("key")) || [];
    setStoredUsers(savedUsers);
    console.log(savedUsers,"l")
  }, []);

  const allUsers = [
    { role: "Admin", username: "bikashraj", password: "12345678" },
    { role: "Admin", username: "9334074778", password: "12345678" },
    { role: "Admin", username: "Bikash Kumar", password: "12345678" },
    { role: "Admin", username: "bikashrajbikash150@gmail.com", password: "12345678" },
    { role: "Admin", username: "Bikash211266", password: "12345678" },
    { role: "Admin", username: "admin", password: "admin123" },
    { role: "User", username: "user", password: "user123" },
    { role: "User", username: "user", password: "12345678" },
  ];

  // Function to handle login
  const login = () => {
    const users = [...allUsers, ...storedUsers];

    const validUser = users.find(
      (user) => user.role === role && user.username === username && user.password === password
         
    );
    if (validUser) {
        navigate('/')
        localStorage.setItem('activeuser',JSON.stringify(validUser))
    }
    else {
             setError("Invalid username or password!");
            }
        }


//     if (validUser) {
//       if (role === "Admin") {
//         window.location.href = "./Admin.html";
//       } else if (role === "User") {
//         window.location.href = "./DashBoard.html";
//       }
//     } else {
//       setError("Invalid username or password!");
//     }
//   };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>
      <button onClick={login}>Login</button>

      <span className="newAccount" onClick={() =>{navigate('/Signup')}}>
        Click to create a new account
      </span>

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;
