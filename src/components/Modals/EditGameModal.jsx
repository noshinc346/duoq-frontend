import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {getUserGame, editUserGame } from "../../services/usergame.js";
import {getProfile} from "../../services/profile.js"

import './ModalGame.css';

function Modal({ isOpen, onClose, children, game, gameForm , setGameForm, onOpenModal }) {
  const navigate = useNavigate();


  const [profile, setProfile] = useState(null);

  const [profileGames, setProfileGames] = useState([]);


  


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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGameForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editUserGame(gameForm.id, gameForm); // Assuming profileData contains an 'id' field
      onClose()
      window.location.reload()
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error, show error message, etc.
    }
  };


  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="game-modal">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          <h2 className="form-header">Edit Game</h2>
          <form className="edit-game-form" onSubmit={handleSubmit}>
            <div className="status-container">
              <p className="form-titles">Play Status</p>
              <select
                className="text-input"
                value={gameForm.status}
                onChange={(e) =>
                  setGameForm({ ...gameForm, status: e.target.value })
                }
              >
                <option value="PD">Played</option>
                <option value="PG">Playing</option>
                <option value="I">Interested</option>
              </select>
            </div>

            <div className="IGN-container">
            <p className="form-titles">In Game Name</p>
            <input
              className="text-input"
              type="text"
              placeholder="IGN"
              name="ign"
              value={gameForm.ign}
              onChange={handleChange}
            />
            </div>

            <div className="rank-container">
            <p className="form-titles">Rank</p>
            <input
              className="text-input"
              type="text"
              placeholder="Rank"
              name="rank"
              value={gameForm.rank}
              onChange={handleChange}
            />
            </div>
            {/* Add other fields */}
            <button className="edit-game-button" type="submit">Save Changes</button>
          </form>
          {children}
        </div>
      </div>
    </div>
  );

}


export default Modal;


