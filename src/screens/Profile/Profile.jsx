import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getProfile, updateGameForProfile, getProfileById } from "../../services/profile.js";
import { getUserGame, editUserGame } from "../../services/usergame.js";
import "./Profile.css";
import ProfileGame from "../../components/ProfileGame/ProfileGame.jsx";
import Modal from "../../components/Modals/EditGameModal.jsx";

const defaultProfilePicture = "https://i.imgur.com/agfEXRF.jpeg";
const defaultBanner = "https://www.colorhexa.com/ceffeb.png";

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

  const {id} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        let profileData;

        if (id) {
          profileData = await getProfileById(id);
        } else {
          profileData = await getProfile();
        }

        // Add default values if properties are missing
        if (!profileData.banner) {
          profileData.banner = defaultBanner;
        }
        if (!profileData.profile_picture) {
          profileData.profile_picture = defaultProfilePicture;
        }

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
  // console.log("Profile Data:", profile);

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

              <div className="bio-dob-container">
                <div className="profile-bio-container">
                  <p className="profile-bio">{profile.bio}</p>
                </div>

                <div className="profile-dob-container">
                  <p className="profile-dob">{profile.dob}</p>
                </div>
              </div>

              <Link className="edit-button-link" to="/profile/edit">
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
