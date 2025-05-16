import React, { Fragment, useState, useEffect } from "react";
import Profilepic from "../../assets/profile.png";
import EditDrawer from "../../common-component/editdrawer/EditDrawer";
import "../../component/insert-profile/Profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editField, setEditField] = useState(null);

  // Simulate backend fetch
  useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      const response = await fetch("/api/get-profile"); // Replace with real endpoint
      const data = await response.json();
      setProfileData(data);
    };

    // Mocking backend
    const timeout = setTimeout(() => {
      setProfileData({
        name: "Aditya Singh",
        phone: "8700105214",
        email: "princeyadav1402002@gmail.com",
        state: "Uttar Pradesh",
        profileImage: Profilepic,
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleEditClick = (field) => {
    setEditField(field);
    setDrawerOpen(true);
  };

  const handleSave = (field, newValue) => {
    setProfileData((prev) => ({ ...prev, [field]: newValue }));
    setDrawerOpen(false);

    // Optional: Send PATCH/PUT request to update on backend
    // await fetch("/api/update-profile", {
    //   method: "PATCH",
    //   body: JSON.stringify({ [field]: newValue }),
    //   headers: { "Content-Type": "application/json" },
    // });
  };

  if (!profileData) return <p>Loading...</p>;

  return (
    <Fragment>
      {/* Profile Section */}
      <div className="profile-dashboard-container container">
        <div className="profile-pic-image-container">
          <img className="ppfpic" src={profileData.profileImage} alt="" />
        </div>
        <div className="profile-inner-container">
          <div className="proile-inner-content">
            <p>
              <b>Name :</b>
            </p>
            <p>{profileData.name}</p>
          </div>
          <div className="proile-inner-content">
            <p>
              <b>Mobile No :</b>
            </p>
            <p>{profileData.phone}</p>
          </div>
          <div className="proile-inner-content">
            <p>
              <b>Email Id :</b>
            </p>
            <p>{profileData.email}</p>
          </div>
          <div className="proile-inner-content">
            <p>
              <b>Address:</b>
            </p>
            <p>{profileData.state}</p>
          </div>
        </div>
      </div>

      {/* Edit Section */}
      <div className="container edit-profile-container">
        <h1>Edit Profile</h1>
        <div className="edit-profile-tiles-wrapper">
          <div className="profile-tile">
            <div className="profile-img-contain">
              <img src={profileData.profileImage} alt="" />
            </div>
            <button
              className="edit-profile-btn"
              onClick={() => handleEditClick("profileImage")}
            >
              Edit Profile Image
            </button>
          </div>
          <hr className="profile-content" />

          <div className="profile-tile">
            <div className="profile-img-container-content">
              <p className="profile-label">
                <b>Name</b>
              </p>
              <p>{profileData.name}</p>
            </div>
            <button
              className="edit-profile-btn"
              onClick={() => handleEditClick("name")}
            >
              Edit Name
            </button>
          </div>
          <hr className="profile-content" />

          <div className="profile-tile">
            <div className="profile-img-container-content">
              <p className="profile-label">
                <b>Mobile No.</b>
              </p>
              <p>{profileData.phone}</p>
            </div>
            <button
              className="edit-profile-btn"
              onClick={() => handleEditClick("phone")}
            >
              Edit Phone
            </button>
          </div>
          <hr className="profile-content" />

          <div className="profile-tile">
            <div className="profile-img-container-content">
              <p className="profile-label">
                <b>Email</b>
              </p>
              <p>{profileData.email}</p>
            </div>
          </div>
          <hr className="profile-content" />

          <div className="profile-tile">
            <div className="profile-img-container-content">
              <p className="profile-label">
                <b>State of residence</b>
              </p>
              <p>{profileData.state}</p>
            </div>
            <button
              className="edit-profile-btn"
              onClick={() => handleEditClick("state")}
            >
              Edit State
            </button>
          </div>
          <hr className="profile-content" />

          <div className="save-profile-btn">
            <button className="save-btn-profile">Save</button>
          </div>
        </div>
      </div>

      {/* Edit Drawer */}
      {drawerOpen && (
        <EditDrawer
          field={editField}
          value={profileData[editField]}
          onSave={handleSave}
          onClose={() => setDrawerOpen(false)}
        />
      )}
    </Fragment>
  );
};

export default Profile;
