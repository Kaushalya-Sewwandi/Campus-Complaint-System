import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { getApiErrorMessage } from "../utils/api";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/api/auth/login", {
        email: email.trim().toLowerCase(),
        password,
      });

      // Save token + user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
    } catch (err) {
      setError(getApiErrorMessage(err, "Login failed"));
    } finally {
      setLoading(false);
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
            <h2>Sign in</h2>
            <p className="muted">Welcome back. Please enter your details.</p>
          </div>
        </div>

        {error ? (
          <div className="alert alert-error" role="alert" aria-live="polite">
            {error}
          </div>
        ) : null}

        <form onSubmit={handleLogin} className="form">
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
            <div className="field-row">
              <span>Password</span>
              <Link to="/forgot-password" className="link link-subtle">
                Forgot password?
              </Link>
            </div>
            <div className="input-wrap">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                onKeyDown={(e) => setCapsLockOn(e.getModifierState?.("CapsLock") ?? false)}
                onKeyUp={(e) => setCapsLockOn(e.getModifierState?.("CapsLock") ?? false)}
              />
              <button
                type="button"
                className="icon-btn icon-btn--eye"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.1A10.4 10.4 0 0 1 12 5c5 0 9.3 3.3 10.6 7a10.7 10.7 0 0 1-4.2 5.2M6.3 6.3C4.3 7.6 2.8 9.7 2.1 12c1.3 3.7 5.6 7 9.9 7 .9 0 1.8-.1 2.6-.3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 6.5A10.7 10.7 0 0 0 2.1 12c1.3 3.7 5.6 7 9.9 7 1.4 0 2.8-.3 4-1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                )}
              </button>
            </div>
            {capsLockOn ? <div className="hint">Caps Lock is on.</div> : null}
          </label>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="auth-footer">
          <span className="muted">New here?</span>{" "}
          <Link to="/register" className="link">
            Create an account
          </Link>
        </div>
      </div>
    </div>
);

  
}

export default Login;