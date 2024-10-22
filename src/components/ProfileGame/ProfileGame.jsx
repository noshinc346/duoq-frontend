import React from "react";
import "./ProfileGame.css";

function ProfileGame({ game, onOpenModal, setGameForm}) {
// console.log("this is game", game.game.id)
  return (
    <div className="main">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={game?.game.image} />
          </div>
          <div className="card-back">
            <p className="comp-info">{game.competitive ? "Competitive" : "Socially"}</p>
            <hr />
            <p className="ign-info"><strong>IGN: </strong>{game.ign}</p>
            <p className="rank-info"><strong>RANK: </strong>{game.rank}</p>
          </div>
        </div>
      </div>

        <div className="edit-container">
          <button className="edit-button" onClick={() => { 
            setGameForm({
              'status': game.status,
              'ign': game.ign, 
              'rank': game.rank,
              'id' : game.game.id
            })
            onOpenModal()
          }}>Edit</button>
        </div>

    </div>
  );
}

export default ProfileGame;
