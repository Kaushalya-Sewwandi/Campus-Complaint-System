import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
import api from "../utils/api";

function AdminDashboard() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user?.role === "admin") {
      fetchComplaints();
    }
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await api.get("/api/complaints/all");

      setComplaints(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/api/complaints/${id}`, { status });

      fetchComplaints();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComplaint = async (id) => {
    try {
      await api.delete(`/api/complaints/${id}`);

      fetchComplaints();
    } catch (err) {
      console.log(err);
    }
  };

  
  if (!user || user.role !== "admin") {
    return <h2>Access Denied</h2>;
  }
return (
  <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>Admin Dashboard</h2>
          <p className="muted">Manage and resolve student complaints.</p>
        </div>

        <button className="btn btn-danger" onClick={() => logout(navigate)}>
          Logout
        </button>
      </div>

      <div className="grid">
        {complaints.map((c) => (
          <div key={c._id} className="panel">
            <div className="panel-top">
              <div>
                <h3 className="panel-title">{c.title}</h3>
                <div className="chips">
                  <span className="chip">{c.category}</span>
                  <span className={`chip chip-${c.status}`}>{c.status}</span>
                </div>
              </div>
            </div>

            <p className="panel-body">{c.description}</p>

            <div className="panel-actions">
              <div className="btn-row">
                <button className="btn btn-ghost" onClick={() => updateStatus(c._id, "pending")}>
                  Pending
                </button>
                <button className="btn btn-ghost" onClick={() => updateStatus(c._id, "in-progress")}>
                  In progress
                </button>
                <button className="btn btn-ghost" onClick={() => updateStatus(c._id, "resolved")}>
                  Resolved
                </button>
              </div>

              <button className="btn btn-danger" onClick={() => deleteComplaint(c._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
);
 
}

export default AdminDashboard;