import { getProfiles } from "../../services/profile.js";
import { addMatch, editMatch } from "../../services/matched.js";
import { useState, useEffect } from "react";
import MatchBackground from '../../assets/matchbackground.jpeg'
import "./MatchingPage.css";

const defaultProfilePicture = "https://i.imgur.com/agfEXRF.jpeg";
const defaultBanner = "https://www.colorhexa.com/ceffeb.png";

function MatchingPage({ profile, setProfile }) {
  const [profiles, setProfiles] = useState([]);
  const [index, setIndex] = useState(0);
  const [matchInitialized, setMatchInitialized] = useState(false);
  const [toggle, setToggle] = useState(false)

  const fetchProfiles = async () => {
    try {
      const profileGameData = await getProfiles();
      let filteredProfileGameData = profileGameData.filter(gameData => !profile.matches.includes(gameData.id));
      setProfiles(filteredProfileGameData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, [toggle]);

  const handleMatch = async () => {
    const targetProfile = profiles[index];

    // check if match already exists, if not, post; otherwise, patch
    const isExistingMatch = profile.matches.includes(targetProfile.id) || targetProfile.matches.includes(profile.id)

    if (isExistingMatch) {
      console.log("In here")
      // Match exists - update recipricated to true
      await editMatch(targetProfile.id, { recipricated: true });
      
      console.log("Match intitialized!");
      setMatchInitialized(true);
      setTimeout(() => setMatchInitialized(false), 3000);
    } else {
      console.log("In herrrrr")
      // Match does not exist - create initial match
      console.log("Create initial match");
      await addMatch({
        user1_profile: profile.id,
        user2_profile: targetProfile.id,
      });

      setProfile(prevProfile => ({
        ...prevProfile,
        matches: [...prevProfile.matches, targetProfile.id]
      }))
    }

    moveToNextProfile();
  };

  const moveToNextProfile = () => {
    setToggle(prev => !prev)
    const nextIndex = index + 1 < profiles.length ? index + 1 : 0;
    setIndex(nextIndex);
  };

  return (
    <div className="matching-page">
      <img className="background" src={MatchBackground} />
      <h1 className="matching-page-header">Meet Your DuQ Match</h1>
      {profiles.length > 0 ? (
        <>
        <div className="matched-message-container">
              {matchInitialized && (
                <p className="matched-message">You've found your DouQ match!</p>
              )}
        </div>
          <div className="profile-match-container">
            <div className="banner-container">
              <div className="banner-image">
                <img 
                className="banner-pic" 
                src={profiles[index].banner || defaultBanner}
                alt={profiles[index].name}
                />
              </div>
            </div>
            <img
              className="profile-pic"
              src={profiles[index].profile_picture || defaultProfilePicture}
              alt={profiles[index].name}
            />
            <h2 className="profile-name-header">{profiles[index].name}</h2>
            <div className="games-matching-container">
              <h3 className="games-headline">Games</h3>
              {profiles[index]?.user_games?.map((userGame) => (
                <p className="game-names" key={userGame.id}>{userGame.game.name}</p>
              ))}
            </div>
            <div className="bio-container">
              <h3 className="bio-header">Bio</h3>
              <p className="bio">{profiles[index].bio}</p>
            </div>
          </div>
          <div className="matching-page-btn-container">
            <button className="match-btn" onClick={handleMatch}>
              Match
            </button>
            <button className="skip-btn" onClick={moveToNextProfile}>
              Skip
            </button>
          </div>
        </>
      ) : (
        <p className="loading-msg">Looks like there's no profiles at the moment. Try again later!</p>
      )}
    </div>
  );
}

export default MatchingPage;
