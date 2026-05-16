import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Site">
        <div className="navbar-left">
          <span className="brand brand--logo-only">
            <span className="crest crest--plain">
              <img className="crest-img" src="/uov-logo.png" alt="University of Vavuniya" />
            </span>
          </span>
          <Link to="/" className="navlink navlink--text">
            Home
          </Link>
        </div>

        <div className="navbar-right">
          {!user && (
            <>
              <Link to="/login" className="navlink navlink--text">
                Login
              </Link>
              <Link to="/register" className="navlink navlink--pill">
                Register
              </Link>
            </>
          )}

          {user?.role === "admin" && (
            <Link to="/admin" className="navlink navlink--text">
              Admin
            </Link>
          )}

          {user?.role === "student" && (
            <Link to="/student" className="navlink navlink--text">
              Dashboard
            </Link>
          )}

          {user && (
            <button type="button" onClick={logout} className="navlink navlink--pill navlink--danger">
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
