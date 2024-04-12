import { getProfiles } from '../../services/profile.js'
import { addMatch, getMatches } from '../../services/matched.js'
import { useState, useEffect } from 'react'
import './MatchingPage.css'


function MatchingPage({profile, games}) {

    const [ profiles, setProfiles ] = useState([]);
    const [ index, setIndex] = useState(0)
    const [ matchInitialized, setMatchInitialized ] = useState(false);

    const fetchProfiles = async () => {
      try {
        const profileGameData = await getProfiles();
        setProfiles(profileGameData);
      } catch (error) {
        console.log(error)
      }
    };

    useEffect(() => {
      fetchProfiles();
    }, [])

    const handleMatch = async () => {
      const targetProfile = profiles[index];
      await addMatch(profile.id, targetProfile.id);
      const isMutual = await getMatches(profile.id, targetProfile.id);

      if (isMutual) {
        console.log('Match intitialized!');
        setMatchInitialized(true);
        setTimeout(() => setMatchInitialized(false), 3000);

      }
      moveToNextProfile();
    };

    const moveToNextProfile = () => {
      const nextIndex = index + 1 < profiles.length ? index + 1 : 0;
      setIndex(nextIndex);
    };

    const handleSkip = () => {
      moveToNextProfile();
  };

  return (
    <div className="matching-page">
      {profiles.length > 0 ? (
        <>
          <div className="profile-match-container">
            <img src={profiles[index].profile_picture} alt={profiles[index].name} />
            <h2 className="profile-name-header">{profiles[index].name}</h2>
            <p>{profiles[index].games}</p>
            <p className="bio">{profiles[index].bio}</p>
          </div>
          <button onClick={handleMatch}>Match</button>
          <button onClick={handleSkip}>Skip</button>
          {matchInitialized && <p>You've found your DouQ match!</p>}
        </>
      ) : (
        <p>Loading profiles</p>
      )}
      
    </div>
  )
}

export default MatchingPage