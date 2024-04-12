import React, { useState, useEffect } from 'react'
import './Homepage.css'
import { getGames } from '../../services/games.js';
import { getUserId } from '../../services/user.js';
import { getUserGame } from '../../services/usergame.js';
import Carousel from 'react-hot-carousel'

function Homepage() {

	const [id, setId] = useState([]);
	const [userGame, setUserGame] = useState([]);

	useEffect(() => {
		const fetchId = async () => {
			const userid = await getUserId();
			setId(userid);
		}
		fetchId();
	},[]);

	useEffect(() => {
		const fetchUserGames = async () => {
			const usergames = await getUserGame(userid);
			setGame(usergames);
		}
		fetchUserGames();
	},[]);

	const gameids = userGame.map((usergame) => {
		return usergame.game_id
	});



  return (
    <div className="homepage">
	<div className="hp-container">
		<div className="hp-container-three">
        		<Carousel autoplay={true} autoPlayInterval={5}>
	  			{gameids.map((idx) => {
					return (
						<img className="carousel-img" src={game[gameids-1].image}/>
					)
				})
				}
         		</Carousel>
        	</div>
        	<div className="hp-container-one">
          		<p className="intro">
          			 Welcome Back to DuoQ
          		</p>
        	</div>
        	<div className="hp-container-two">
          		<p className="intro-statement">
          			DuoQ is your go-to app for finding your gaming soulmate.
           			<br/>
           			Say goodbye to the frustration of unreliable teammates and hello to coordinated victories.
           			With DuoQ, you'll find the perfect partner to dominate the digital realm together.
           			<br/>
           			Join now and elevate your gaming experience to new heights!
          		</p>
        	</div>
        	

      	</div>
    </div>
  )
}

export default Homepage
