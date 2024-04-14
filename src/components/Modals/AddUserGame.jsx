import React from 'react'
import "./Modals.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGames } from "../../services/games.js";
import { addUserGame } from "../../services/usergame.js";
import { getUserId } from "../../services/user.js";

function AddUserGame(props) {

	let navigate = useNavigate();

	const [modal, setModal] = useState(false);
	const [games, setGames] = useState([]);
	let id = 0;

	const toggleModal = () => {
		setModal(!modal);
	}

	if (modal) {
   		 document.body.classList.add("active-modal");
  	} else {
  		document.body.classList.remove("active-modal");
  	}

	useEffect(() => {
		const fetchGames = async () => {
			const thegames = await getGames();
			//id = await getUserId();
			//console.log(pid)
			//console.log(thegames)
			//setId(pid);
			//console.log(id)
			setGames(thegames);
		}
		fetchGames();
	}, []);
	//console.log(props.id);


	const handleChange = (e) => {
    		const { name, value } = e.target;
		//console.log(name);
		//console.log(value);
		if(name != "games"){
    			setUsergame({
      				...usergame,
      				[name]: value,
				["profile_id"]: props.id,
    			});
		}
		else {
			//console.log(name);
			games.map((game) => {
				if(game.name === value){
					setUsergame({
						...usergame,
						["game_id"]: game.id,
					});
				}
			})
		}
  	};

	const handleSubmit = async (e) => {
    		e.preventDefault();
		console.log(usergame)
    		await addUserGame(usergame);
		navigate("/home");
  	};

	const [usergame, setUsergame] = useState({
		profile_id: props.id,
		game_id: 1,
		ign: "",
		rank: "",
		competitive: false,
	});

  	return (
    		<>
      			<button onClick={toggleModal} className="add-btn-modal">
        			Add a game!
      			</button>

      			{modal && (
        			<div className="modal">
          				<div onClick={toggleModal} className="overlay"></div>
          				<div className="add-modal-content">
            					<h2 className="add-instruct"> Add Game </h2>
            					<form
              						className="create-game"
              						onSubmit={handleSubmit}
              						action=""
              						method="post"
            					>
							<label for="games">Choose a Game:</label>
							<select name="games" id="games" onChange={handleChange}>
								{games.map((game, index) => {
									return(
  										<option name="game_id" value={game.name} key={index} >{game.name}</option>
									)
								})}
							</select>
              						<input
          							type="text"
          							placeholder="IGN"
          							name="ign"
          							value={usergame.ign}
          							required
          							onChange={handleChange}
          							className="circular-input"
        						/>
              						<input
          							type="text"
          							placeholder="rank"
          							name="rank"
          							value={usergame.rank}
          							required
          							onChange={handleChange}
          							className="circular-input"
        						/>
							<input 
								type="checkbox" 
								id="competitive" 
								onChange={handleChange}
								name="competitive" 
								value={usergame.competitive}
							/>
							<label for="competitive"> Are you competitive at this game?</label>
              						<button
                						className="add-close-modal"
                						onClick={handleSubmit}
                						type="submit"
                						value="Submit"
              						>
                						Submit Game
              						</button>
            					</form>
          				</div>
        			</div>
      			)}
    		</>
  	);
}

export default AddUserGame
