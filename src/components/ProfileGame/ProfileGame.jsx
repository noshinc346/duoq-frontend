import React from "react";
import "./ProfileGame.css";

function ProfileGame({ game, onOpenModal, setGameForm}) {
  return (
    <div className="game-card">
      <img src={game?.game.image} />
      <button onClick={() => { 
        setGameForm({
          'status': game.status,
          'ign': game.ign, 
          'rank': game.rank
        })
        onOpenModal()
      }}>Edit</button>
    </div>
  );
}

export default ProfileGame;
