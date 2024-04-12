import React from 'react'

function ProfileGame({ game }) {


    return (
        <div>
            <img src={game?.game.image} />
        </div>
  )
}

export default ProfileGame