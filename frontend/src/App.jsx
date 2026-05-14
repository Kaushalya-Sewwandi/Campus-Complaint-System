import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppRoutes() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      {!isLanding && <Navbar />}
      <main className={isLanding ? "main main--landing" : "main"}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/login"
            element={
              <div className="container">
                <Login />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="container">
                <Register />
              </div>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <div className="container">
                <ForgotPassword />
              </div>
            }
          />
          <Route
            path="/admin"
            element={
              <div className="container">
                <AdminDashboard />
              </div>
            }
          />
          <Route
            path="/student"
            element={
              <div className="container">
                <StudentDashboard />
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
