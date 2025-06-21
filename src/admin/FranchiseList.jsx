import React, { useState, useEffect } from "react";
import axios from "axios";

const FranchiseList = () => {
  const [franchises, setFranchises] = useState([]);

  useEffect(() => {
    const fetchFranchises = async () => {
      try {
        const response = await axios.get("/api/franchise");
        setFranchises(response.data);
      } catch (error) {
        console.error("Error fetching franchises:", error);
      }
    };

    fetchFranchises();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Franchise List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {franchises.map((franchise) => (
          <li
            key={franchise._id}
            >
            <p><strong>Organization:</strong> {franchise.orgizationname}</p>
            <p><strong>Contact Person:</strong> {franchise.contactperson}</p>
            <p><strong>Mobile:</strong> {franchise.mobile}</p>
            <p><strong>Email:</strong> {franchise.email}</p>
            <p><strong>Description:</strong> {franchise.description}</p>
            <p><strong>Website:</strong> <a href={franchise.websiteurl} target="_blank" rel="noopener noreferrer">{franchise.websiteurl}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FranchiseList;