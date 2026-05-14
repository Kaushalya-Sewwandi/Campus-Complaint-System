import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { logout } from "../utils/auth";

function StudentDashboard() {
  const navigate = useNavigate();
  const user = useMemo(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  }, []);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("general");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (user.role !== "student") {
      navigate(user.role === "admin" ? "/admin" : "/login");
      return;
    }
    fetchMyComplaints();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMyComplaints = async () => {
    try {
      const res = await api.get("/api/complaints/my");
      setComplaints(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to load complaints");
    }
  };

  const submitComplaint = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/complaints", { title, description, category });
      setTitle("");
      setCategory("general");
      setDescription("");
      await fetchMyComplaints();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to submit complaint");
    } finally {
      setLoading(false);
    }
  };

  if (!user || user.role !== "student") return null;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>Student Dashboard</h2>
          <p className="muted">Submit complaints and track their status.</p>
        </div>

        <button className="btn btn-danger" onClick={() => logout(navigate)}>
          Logout
        </button>
      </div>

      <div className="two-col">
        <div className="panel">
          <h3 className="panel-title">New complaint</h3>
          <form onSubmit={submitComplaint} className="form">
            <label className="field">
              <span>Title</span>
              <input
                value={title}
                placeholder="Short summary"
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <label className="field">
              <span>Category</span>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="general">General</option>
                <option value="hostel">Hostel</option>
                <option value="canteen">Canteen</option>
                <option value="academics">Academics</option>
                <option value="transport">Transport</option>
                <option value="facilities">Facilities</option>
              </select>
            </label>

            <label className="field">
              <span>Description</span>
              <textarea
                value={description}
                placeholder="Describe the issue in detail..."
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
              />
            </label>

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit complaint"}
            </button>
          </form>
        </div>

        <div className="panel">
          <div className="panel-top">
            <h3 className="panel-title">My complaints</h3>
            <button className="btn btn-ghost" onClick={fetchMyComplaints}>
              Refresh
            </button>
          </div>

          <div className="list">
            {complaints.length === 0 ? (
              <p className="muted">No complaints yet. Submit one to get started.</p>
            ) : (
              complaints.map((c) => (
                <div className="list-item" key={c._id}>
                  <div className="list-item-top">
                    <div>
                      <div className="list-title">{c.title}</div>
                      <div className="chips">
                        <span className="chip">{c.category}</span>
                        <span className={`chip chip-${c.status}`}>{c.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="list-body">{c.description}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;

