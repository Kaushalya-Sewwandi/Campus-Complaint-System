import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

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
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/complaints/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComplaints(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/complaints/status/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchComplaints();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComplaint = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/complaints/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchComplaints();
    } catch (err) {
      console.log(err);
    }
  };

  
  if (!user || user.role !== "admin") {
    return <h2>Access Denied</h2>;
  }
return (
  <div className="container">
    <h2>Admin Dashboard</h2>

    <button className="logout" onClick={() => logout(navigate)}>
      Logout
    </button>

    {complaints.map((c) => (
      <div key={c._id} className="card">
        <h3>{c.title}</h3>
        <p>{c.description}</p>
        <p><b>Category:</b> {c.category}</p>
        <p><b>Status:</b> {c.status}</p>

        <div>
          <button className="pending" onClick={() => updateStatus(c._id, "pending")}>
            Pending
          </button>

          <button className="progress" onClick={() => updateStatus(c._id, "in-progress")}>
            In Progress
          </button>

          <button className="resolved" onClick={() => updateStatus(c._id, "resolved")}>
            Resolved
          </button>
        </div>

        <button className="delete" onClick={() => deleteComplaint(c._id)}>
          Delete
        </button>
      </div>
    ))}
  </div>
);
 
}

export default AdminDashboard;