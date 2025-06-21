// ContactList.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("/api/contact");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Contact List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {contacts.map((contact) => (
          <li
            key={contact._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "12px",
              marginBottom: "10px",
              background: "#f9f9f9",
            }}
          >
            <Link
              to={`/admin/contacts/${contact._id}`}
              style={{ textDecoration: "none", color: "#333", fontSize: "18px" }}
            >
              <strong>{contact.name}</strong> — {contact.course}, {contact.email}
            </Link>
            <div>Mobile: {contact.mobile}</div>
            <div>Percentage: {contact.percentage}%</div>
            <div>Appeared in Exam: {contact.appearedInExam}</div>
            <div>
              Exam: {contact.examName} | Score: {contact.examPercentage}%
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;