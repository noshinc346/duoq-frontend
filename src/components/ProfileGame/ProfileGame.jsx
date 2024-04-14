import React from 'react'
import './ProfileGame.css'

function ProfileGame({ game }) {


    return (
        <div>
            <img src={game?.game.image} />
        </div>
  )
}

export default ProfileGame