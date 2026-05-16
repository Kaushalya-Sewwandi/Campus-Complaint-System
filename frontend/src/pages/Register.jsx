import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { getApiErrorMessage } from "../utils/api";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/api/auth/register", {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
        role,
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert(getApiErrorMessage(err, "Register failed. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-badge">
            <img src="/uov-logo.png" alt="University logo" />
          </div>
          <div>
            <h2>Create account</h2>
            <p className="muted">Create your account and choose your role.</p>
          </div>
        </div>

        <form onSubmit={handleRegister} className="form">
          <label className="field">
            <span>Name</span>
            <input
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
          </label>

          <fieldset className="field role-field">
            <legend>Role</legend>
            <div className="role-options" role="radiogroup" aria-label="Account role">
              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === "student"}
                  onChange={() => setRole("student")}
                />
                <span>Student</span>
              </label>
              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === "admin"}
                  onChange={() => setRole("admin")}
                />
                <span>Admin</span>
              </label>
            </div>
            <p className="hint">Admins can manage and resolve grievances after sign-in.</p>
          </fieldset>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
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