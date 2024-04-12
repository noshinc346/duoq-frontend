import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProfile, updateProfile, addGameForProfile, removeGameFromProfile, updateGameForProfile, deleteProfile, getProfileById } from '../../services/profile';
import { getUserGame, addUserGame } from '../../services/usergame.js'
import './Profile.css'
import { getGameById } from '../../services/games.js'; 
import ProfileGame from '../../components/ProfileGame/ProfileGame.jsx';

function Profile() {
  const [myProfile, setMyProfile] = useState(null)
  const [userProfile, setUserProfile] = useState(null);
  const [profileGames, setProfileGames] = useState([]);
  const [toggle, setToggle] = useState(false);

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      const myProfileData = await getProfile();
      const profileData = await getProfileById(id);

      setMyProfile(myProfileData)
      setUserProfile(profileData)
    };

    const fetchUserGames = async () => {
      const userGamesTest = await getUserGame(id);
      setProfileGames(userGamesTest);
    };

    fetchUserGames()
    fetchProfiles();
  }, []);

  // const handleDelete = async () => {
  //   await deleteProfile();
  //   navigate('/')
  // }

  // const handleAddGame = async (gameId) => {
  //   await addGameForProfile(id, gameId)
  //   setToggle(prev => !prev)
  // }

  // const handleRemoveGame = async (gameId) => {
  //   await removeGameFromProfile(id, gameId)
  //   setToggle(prev => !prev)
  // }

  // const handleStatusChange = (e) => {
  //   const { name, value } = e.target

  //   setUserGame((prevUserGame) => ({
  //     ...prevUserGame,
  //     [name]: value
  //   }))
  // }

  // const handleUserGameSubmit = async (e) => {
  //   e.preventDefault()
    
  //   const statusMap = {
  //     Playing: 'PG',
  //     Played: 'PG',
  //     Interested: 'I',
  //     None: 'NA'
  //   };
    
  //   const { status, ign, rank } = userGame
    
  //   const finalStatus = {
  //     status: statusMap[status],
  //     ign,
  //     rank
  //   }

  //   const createdUserGame = await addUserGame(id, finalStatus)

  //   if (createdUserGame) {
  //     setToggle(prev => !prev)
  //   }
  // }

  return (
    <div>
      <img src={`${userProfile?.profile_picture}`} />
      <h1>{`${userProfile?.name}`}</h1>
      <p>{`${userProfile?.bio}`}</p>
      <p>{`${userProfile?.dob}`}</p>

      <div>
        {profileGames.map((game, idx) =>(
          <ProfileGame key={idx} game={game} />
       ))}
      </div>
    </div>
  )
}


export default Profile