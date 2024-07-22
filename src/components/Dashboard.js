import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Track if there are more pages to fetch
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/adminlogin");
    } else {
      const fetchEmails = async () => {
        try {
          const res = await fetch(
            `http://localhost:3001/submit_email?page=${currentPage}`
          );
          if (res.ok) {
            const result = await res.json();
            setEmails(result.emails);

            // Check if there are more pages
            if (result.emails.length < 8) {
              setHasMore(false); // No more pages to fetch
            } else {
              setHasMore(true);
            }
          } else {
            setError("Failed to fetch emails");
          }
        } catch (error) {
          setError("An error occurred while fetching emails.");
        }
      };
      fetchEmails();
    }
  }, [navigate, currentPage]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/delete_email/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Filter out the deleted email from the local state
        setEmails(emails.filter((email) => email.id !== id));
        // emails = emails.filter((email) => email.id !== id);
      } else {
        setError("Failed to delete email");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goAhead = () => {
    if (hasMore) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goBehind = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="dashboard-container" id="dashboard">
      <h2>Submitted Emails</h2>
      {error && <div className="error">{error}</div>}
      <table className="email-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emails.length > 0 ? (
            emails.map((email) => (
              <tr key={email.id}>
                <td>{email.id}</td>
                <td>{email.name}</td>
                <td>{email.email}</td>
                <td>{email.phone}</td>
                <td>{email.message}</td>
                <td>
                  <button onClick={() => handleDelete(email.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No emails to display</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={goBehind} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={goAhead} disabled={!hasMore}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
