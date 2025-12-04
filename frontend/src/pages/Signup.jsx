import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Design/Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [emoji, setEmoji] = useState("😊");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setEmoji("🧐");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Account created! You can now log in.");
      setEmoji("🥳");
      navigate("/login");
    } else {
      alert(data.message || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-emoji">{emoji}</div>
        <h2 className="signup-title">Create Account</h2>

        <form onSubmit={handleSignup}>
          <label className="signup-label">Username</label>
          <input
            type="text"
            name="username"
            className="signup-input"
            value={form.username}
            onChange={handleChange}
            required
          />

          <label className="signup-label">Password</label>
          <input
            type="password"
            name="password"
            className="signup-input"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>

        <p className="signup-message">
          Already have an account?
          <span
            className="signup-login-link"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;