import React, { useState, useEffect } from 'react'
import './Homepage.css'
import { getGames } from '../../services/games.js';
import { getUserId } from '../../services/user.js';
import { getUserGame } from '../../services/usergame.js';
import AddUserGame from '../../components/Modals/AddUserGame.jsx';
import HPControllers from '../../assets/hpcontrollers.jpeg'

function Homepage() {

	const [id, setId] = useState(null);
	const [userGame, setUserGame] = useState([]);

	const fetchUserGames = async () => {
		const userid = await getUserId();
		setId(userid);
		const usergames = await getUserGame(userid);
		setUserGame(usergames);
	}
		

	useEffect(() => {
		fetchUserGames();
	},[]);

			
	//console.log(id)


  return (
    <div className="homepage">
	<div className="hp-container">
	<img className="hp-img" src={HPControllers} />
		<div className="hp-container-one">
          		<h1 className="intro">
          			 Welcome Back to DuoQ, {userGame[0]?.profile?.name}
          		</h1>
        	</div>
		<div className="hp-container-three">
				<h1 className="games-header-hp">
	  				Your Games
	  			</h1>
        		<div className="hp-img-gallery">
	  			{userGame.map((usergame, idx) => {
					return (
						<img key={idx} className="gallery-imgs" src={usergame.game.image}/>
					)
				})
				}
         		</div>
	  		<AddUserGame id={id} />
        	</div>
      	</div>
    </div>
  )
}

export default Homepage
