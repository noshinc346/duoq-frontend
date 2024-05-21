import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../../services/profile.js";
import "./ProfileEdit.css"

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    bio: "",
    name: "",
    dob: "",
    profile_picture: "",
    banner: "",
    gender: "",
    // Add other profile fields as needed
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profile = await getProfile();
        setProfileData(profile);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(profileData.id, profileData); // Assuming profileData contains an 'id' field

      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      console.log(error.response)
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="edit-profile-form-container">
      <h2 className="edit-profile-title">Edit Profile</h2>
      <form className="actual-form" onSubmit={handleSubmit}>

        <div className="flex-this-shit nameedit-container">
        <p>Name</p>
        <input
          type="text"
          placeholder="Display Name"
          name="name"
          value={profileData.name}
          onChange={handleChange}
        />
        </div>

        <div className="flex-this-shit bioedit-container">
        <p>Bio</p>
        <input
          type="text"
          placeholder="User Bio"
          name="bio"
          value={profileData.bio}
          onChange={handleChange}
        />
        </div>


        <div className="flex-this-shit dobedit-container">
        <p>D.O.B</p>
        <input
          type="date"
          placeholder="Date of Birth"
          name="dob"
          value={profileData.dob}
          onChange={handleChange}
        />
        </div>

        <div className="flex-this-shit pfpedit-container">
          <p>Profile Picture</p>
          <input
            type='text'
            placeholder="Add image url "
            name='profile_picture'
            value={profileData.profile_picture}
            onChange={handleChange}
          />
        </div>

        <div className="flex-this-shit banneredit-container">
        <p>Banner</p>
        <input
          type='text'
          placeholder="Add image url "
          name='banner'
          value={profileData.banner}
          onChange={handleChange}
        />
        </div>


        <div className="flex-this-shit genderedit-container">
        <p>Gender</p>
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={profileData.gender}
          onChange={handleChange}
        />
        </div>
        {/* Add other fields */}
        <button className="profile-edit-button" type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
