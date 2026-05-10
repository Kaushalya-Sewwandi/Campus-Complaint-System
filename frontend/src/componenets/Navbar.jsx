import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: "#222",
      color: "white"
    }}>
      
      <div>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>
          Home
        </Link>
      </div>

      <div>
        {!user && (
          <>
            <Link to="/login" style={{ color: "white", marginRight: "10px" }}>
              Login
            </Link>

            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>
          </>
        )}

        {user?.role === "admin" && (
          <Link to="/admin" style={{ color: "white", marginRight: "10px" }}>
            Admin Dashboard
          </Link>
        )}

        {user?.role === "student" && (
          <Link to="/student" style={{ color: "white", marginRight: "10px" }}>
            Student Dashboard
          </Link>
        )}

        {user && (
          <button
            onClick={logout}
            style={{
              marginLeft: "10px",
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;