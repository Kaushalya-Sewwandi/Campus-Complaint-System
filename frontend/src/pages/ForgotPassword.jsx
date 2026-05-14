import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="auth">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-badge">
            <img src="/uov-logo.png" alt="University of Vavuniya logo" />
          </div>
          <div>
            <h2>Reset password</h2>
            <p className="muted">
              Password reset is not enabled yet. Please contact the university IT/admin office to
              reset your account.
            </p>
          </div>
        </div>

        <div className="auth-footer auth-footer--bare">
          <Link to="/login" className="link">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

