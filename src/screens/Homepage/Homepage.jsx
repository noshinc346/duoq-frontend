import React, { useState, useEffect } from 'react'
import './Homepage.css'
import { getGames } from '../../services/games.js';
import { getUserId } from '../../services/user.js';
import { getUserGame } from '../../services/usergame.js';
import Carousel from 'react-hot-carousel'

function Homepage() {

	const [id, setId] = useState(null);
	const [userGame, setUserGame] = useState([]);

	useEffect(() => {
		const fetchUserGames = async () => {
			const userid = await getUserId();
			setId(userid);
			const usergames = await getUserGame(userid);
			setUserGame(usergames);

		}
		
		fetchUserGames();
	},[]);

			
	//console.log(id)


  return (
    <div className="homepage">
	<div className="hp-container">
		<div className="hp-container-one">
          		<p className="intro">
          			 Welcome Back to DuoQ
          		</p>
        	</div>
        	<div className="intro-statement-container">
          		<p className="intro-statement">
          			DuoQ is your go-to app for finding your gaming soulmate.
           			<br/>
           			You: {userGame[0]?.profile?.bio}	
          		</p>
        	</div>
		<div className="hp-container-three">
				<h1 className="games-header">
	  				Your Games
	  			</h1>
        		<div className = "img-gallery">
	  			{userGame.map((usergame, idx) => {
					return (
						<img key={idx} className="gallery-imgs" src={usergame.game.image}/>
					)
				})
				}
         		</div>
        	</div>
      	</div>
    </div>
  )
}

export default Homepage
