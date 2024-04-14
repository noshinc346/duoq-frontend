import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProfile, updateProfile, addGameForProfile, removeGameFromProfile, updateGameForProfile, deleteProfile, getProfileById } from '../../services/profile';
import { getUserGame, addUserGame } from '../../services/usergame.js'
import './Profile.css'
import ProfileGame from '../../components/ProfileGame/ProfileGame.jsx';


function Profile() {
  const [profile, setProfile] = useState(null);
  const [profileGames, setProfileGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the logged-in user's profile
        const profileData = await getProfile();
        setProfile(profileData);

        // Fetch the logged-in user's games
        const userGamesData = await getUserGame(profileData.id);
        setProfileGames(userGamesData);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

      <Link to="/profile/edit">
        <button>Edit Profile</button>
      </Link>


      {profile && (
        <>
          <img className='profile-banner' src={`${profile?.banner}`} />
          <h1 className='profile-name'>{profile.name}</h1>
          <img className='profile-picture' src={`${profile?.profile_picture}`} />
          <p className='profile-bio'>{`${profile?.bio}`}</p>
          <p className='profile-dob'>{`${profile?.dob}`}</p>
        </>
      )}


      {profileGames.map((game, idx) => (
        <ProfileGame key={idx} game={game} />
      ))}

      
    </div>
  );
}

export default Profile;