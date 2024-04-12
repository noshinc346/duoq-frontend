import { getProfile } from '../../services/profile.js'
import { getUserGame } from '../../services/usergame.js'
import { useState, useEffect } from 'react'


function MatchingPage() {

    const [ profiles, setProfiles ] = useState([]);
    const [ index, setIndex] = useState(0)
    const [ userGames, setUserGames ] = useState([]);

    useEffect(() => {
      const fetchUserGames = async () => {
        try {
          const userGameData = await getUserGame();
          setUserGame(userGameData);
        } catch (error) {

        }
      }
    } )

  return (
    <div className="matching-page">
      
    </div>
  )
}

export default MatchingPage