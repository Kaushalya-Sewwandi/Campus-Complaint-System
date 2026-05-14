import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };
return (
  <div className="auth">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-badge">
            <img src="/uov-logo.png" alt="University of Vavuniya logo" />
          </div>
          <div>
            <h2>Create account</h2>
            <p className="muted">Set up your student account in seconds.</p>
          </div>
        </div>

        <form onSubmit={handleRegister} className="form">
          <label className="field">
            <span>Name</span>
            <input
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </label>

          <button className="btn" type="submit">
            Create account
          </button>
        </form>

        <div className="auth-footer">
          <span className="muted">Already have an account?</span>{" "}
          <Link to="/login" className="link">
            Sign in
          </Link>
        </div>
      </div>
    </div>
);
  
}

export default Register;