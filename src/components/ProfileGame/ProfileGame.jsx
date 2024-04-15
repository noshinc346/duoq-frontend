import React from "react";
import "./ProfileGame.css";

function ProfileGame({ game, onOpenModal, setGameForm}) {

  console.log(game)
  return (
    <div className="main">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={game?.game.image} />
          </div>
          <div className="card-back">
            <p className="ign-info">{game.ign}</p>
            <p className="rank-info">{game.rank}</p>
            <p className="comp-info">{game.competitive ? "Competitive" : "Socially"}</p>
          </div>
        </div>
      </div>

        <div className="edit-container">
          <button className="edit-button" onClick={() => { 
            setGameForm({
              'status': game.status,
              'ign': game.ign, 
              'rank': game.rank,
              'id' : game.id
            })
            onOpenModal()
          }}>Edit</button>
        </div>

    </div>
  );
}

export default ProfileGame;
