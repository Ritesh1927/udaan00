import React, { useState, useEffect } from "react";
import "../editdrawer/EditDrawer.css";

const EditDrawer = ({ field, value, onSave, onClose }) => {
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    setNewValue(value || "");
  }, [value]);

  const getFieldLabel = () => {
    switch (field) {
      case "name":
        return "Name";
      case "phone":
        return "Phone Number";
      case "state":
        return "State of Residence";
      case "email":
        return "Email";
      case "profileImage":
        return "Profile Image";
      default:
        return "";
    }
  };

  const handleSave = () => {
    onSave(field, newValue);
  };

  return (
    <div className="drawer">
      <div className="drawer-header">
        <h3>Edit {getFieldLabel()}</h3>
        <button onClick={onClose}>X</button>
      </div>
      <div className="drawer-body">
        {field === "profileImage" ? (
          <input type="file" />
        ) : (
          <input
            type="text"
            placeholder={`Enter ${getFieldLabel()}`}
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
        )}
        <button className="drawer-save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditDrawer;
