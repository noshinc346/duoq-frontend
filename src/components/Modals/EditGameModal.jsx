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
      <div className="modal">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
        <h2>Edit Game</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={game?.status}
          name="status"
          value={gameForm.status}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="IGN"
          name="ign"
          value={gameForm.ign}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Rank"
          name="rank"
          value={gameForm.rank}
          onChange={handleChange}
        />
        {/* Add other fields */}
        <button type="submit">Save Changes</button>
      </form>
          {children}
        </div>
      </div>
    </div>
  );

}


export default Modal;


