import { getProfiles } from "../../services/profile.js";
import { addMatch, editMatch } from "../../services/matched.js";
import { useState, useEffect } from "react";
import "./MatchingPage.css";

function MatchingPage({ profile, games }) {
  const [profiles, setProfiles] = useState([]);
  const [index, setIndex] = useState(0);
  const [matchInitialized, setMatchInitialized] = useState(false);
  const [matchesCache, setMatchesCache] = useState({});

  const fetchProfiles = async () => {
    try {
      const profileGameData = await getProfiles();
      setProfiles(profileGameData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleMatch = async () => {
    const targetProfile = profiles[index];

    // check if match already exists, if not, post; otherwise, patch
    const isExisintMatch = profile.matches.includes(targetProfile.id);

    if (isExisintMatch) {
      // Match exists - update recipricated to true
      await editMatch(targetProfile.id, { recipricated: true });

      console.log("Match intitialized!");
      setMatchInitialized(true);
      setTimeout(() => setMatchInitialized(false), 5000);
    } else {
      // Match does not exist - create initial match
      console.log("Create initial match");
      await addMatch({
        user1_profile: profile.id,
        user2_profile: targetProfile.id,
      });
    }

    moveToNextProfile();
  };

  const moveToNextProfile = () => {
    const nextIndex = index + 1 < profiles.length ? index + 1 : 0;
    setIndex(nextIndex);
  };

  return (
    <div className="matching-page">
      <h1 className="matching-page-header">Meet Your DuQ Match</h1>
      {profiles.length > 0 ? (
        <>
        <div className="matched-message-container">
              {matchInitialized && (
                <p className="matched-message">You've found your DouQ match!</p>
              )}
        </div>
          <div className="profile-match-container">
            <img
              className="profile-pic"
              src={profiles[index].profile_picture}
              alt={profiles[index].name}
            />
            <h2 className="profile-name-header">{profiles[index].name}</h2>
            <div className="games-matching-container">
              <h3 className="games-headline">Games</h3>
              {profiles[index].user_games.map((userGame) => (
                <p key={userGame.id}>{userGame.game.name}</p>
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
        <p>Loading profiles</p>
      )}
    </div>
  );
}

export default MatchingPage;
