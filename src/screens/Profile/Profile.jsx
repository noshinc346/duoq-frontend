import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProfile, updateProfile, addGameForProfile, removeGameFromProfile, updateGameForProfile, deleteProfile, getProfileById } from '../../services/profile';
import { getUserGame, addUserGame } from '../../services/usergame.js'
import './Profile.css'

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [profileGames, setProfileGames] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [userGame, setUserGame] = useState({
    status: "None",
    ign: "",
    rank: ""
  });

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getProfileById(id);
      // const profileData = await getProfile();
      const userGameData = await getUserGame(id);
      setUserProfile(profileData);
      setProfileGames(userGameData);
      console.log(profileData)
      console.log(userGameData)
      // console.log(userGameData)
    };
    fetchProfile();
  }, [id, toggle]);

  const handleDelete = async () => {
    await deleteProfile();
    navigate('/')
  }

  const handleAddGame = async (gameId) => {
    await addGameForProfile(id, gameId)
    setToggle(prev => !prev)
  }

  const handleRemoveGame = async (gameId) => {
    await removeGameFromProfile(id, gameId)
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

    const createdUserGame = await addUserGame(id, finalStatus)

    if (createdUserGame) {
      setToggle(prev => !prev)
    }
  }

  return (
    <div>
      <img src={`${userProfile?.profile_picture}`} />
      <h1>{`${userProfile?.name}`}</h1>
      <p>{`${userProfile?.bio}`}</p>
      <p>{`${userProfile?.dob}`}</p>
      <p>{`${profileGames[0]?.ign}`}</p>
    </div>
  )
}

export default Profile