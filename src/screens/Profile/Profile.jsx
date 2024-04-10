import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProfile, updateProfile, addGameForProfile, removeGameFromProfile, updateGameForProfile, deleteProfile } from '../../services/profile';
import { getUserGame, addUserGame } from '../../services/usergame.js'

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [profileGames, setProfileGames] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [userGame, setUserGame] = useState({
    status: "None",
    ign: "",
    rank: ""
  });

  let { profileId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getProfile(profileId);
      const userGameData = await getUserGame(profileId);
      setUserProfile(profileData);
      setProfileGames(userGameData);
      console.log(profileData)
      console.log(userGameData)
    };
    fetchProfile();
  }, [profileId, toggle]);

  const handleDelete = async () => {
    await deleteProfile();
    navigate('/')
  }

  const handleAddGame = async (gameId) => {
    await addGameForProfile(profileId, gameId)
    setToggle(prev => !prev)
  }

  const handleRemoveGame = async (gameId) => {
    await removeGameFromProfile(profileId, gameId)
    setToggle(prev => !prev)
  }

  const handleStatusChange = (e) => {
    const { name, value } = e.target

    setUserGame((prevUserGame) => ({
      ...prevUserGame,
      [name]: value
    }))
  }

  const handleUserGameSubmit = async (e) => {
    e.preventDefault()
    
    const statusMap = {
      Playing: 'PG',
      Played: 'PG',
      Interested: 'I',
      None: 'NA'
    };
    
    const { status, ign, rank } = userGame
    
    const finalStatus = {
      status: statusMap[status],
      ign,
      rank
    }

    const createdUserGame = await addUserGame(profileId, finalStatus)

    if (createdUserGame) {
      setToggle(prev => !prev)
    }
  }

  return (
    <div>
      <img src={`${profileId?.profile?.profile_picture}`} />
    </div>
  )
}

export default Profile