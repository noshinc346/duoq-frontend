import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getProfile, updateGameForProfile } from "../../services/profile";
import { getUserGame, editUserGame } from "../../services/usergame.js";
import "./Profile.css";
import ProfileGame from "../../components/ProfileGame/ProfileGame.jsx";
import Modal from "../../components/Modals/EditGameModal.jsx";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [profileGames, setProfileGames] = useState([]);
  const [activeTab, setActiveTab] = useState("playing");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [gameForm, setGameForm] = useState({
    status: "",
    ign: "",
    rank: "",
    id: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getProfile();
        setProfile(profileData);

        const userGamesData = await getUserGame(profileData.id);
        setProfileGames(userGamesData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  const filterGamesByStatus = (status) => {
    return profileGames.filter((game) => game.status === status);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // console.log(profileGames);

  return (
    <div>
      {profile && (
        <>
          <div className="profile-banner-container">
            <img className="profile-banner" src={`${profile.banner}`} />
          </div>

          <div className="profile-picture-container">
            <img
              className="profile-picture"
              src={`${profile.profile_picture}`}
            />
          </div>

          <div className="profile-content">
            <div className="user-info-box">
              <div className="profile-name-container">
                <h1 className="profile-name">{profile.name}</h1>
              </div>

              <div className="profile-bio-container">
                <p className="profile-bio">{profile.bio}</p>
              </div>

              <div className="profile-dob-container">
                <p className="profile-dob">{profile.dob}</p>
              </div>

              <Link to="/profile/edit">
                <button>Edit Profile</button>
              </Link>
            </div>

            <div className="games-box">
              <div className="tabs">
                <button
                  className={`tab-button ${
                    activeTab === "played" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("played")}
                >
                  Played
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "playing" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("playing")}
                >
                  Playing
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "interested" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("interested")}
                >
                  Interested
                </button>
              </div>

              <div className="usergames">
                {activeTab === "played" &&
                  filterGamesByStatus("PD").map((game, idx) => (
                    <ProfileGame
                      key={idx}
                      game={game}
                      onOpenModal={toggleModal}
                      setGameForm={setGameForm}
                    />
                  ))}
                {activeTab === "playing" &&
                  filterGamesByStatus("PG").map((game, idx) => (
                    <ProfileGame
                      key={idx}
                      game={game}
                      onOpenModal={toggleModal}
                      setGameForm={setGameForm}
                    />
                  ))}
                {activeTab === "interested" &&
                  filterGamesByStatus("I").map((game, idx) => (
                    <ProfileGame
                      key={idx}
                      game={game}
                      onOpenModal={toggleModal}
                      setGameForm={setGameForm}
                    />
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        gameForm={gameForm}
        setGameForm={setGameForm}
      >
        {/* Content of the modal */}
      </Modal>
    </div>
  );
}

export default Profile;
