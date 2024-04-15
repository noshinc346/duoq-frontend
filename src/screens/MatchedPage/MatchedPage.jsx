// import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMatches } from '../../services/matched.js'
import Matched from '../../components/Matched/Matched.jsx'
import TwoControllers from '../../assets/twocontrollermatch.jpeg'

function MatchedPage({profile}) {
  const [myMatches, setMyMatches] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchMatches = async () => {
      const matchedData = await getMatches();
      const filteredMatches = matchedData.filter(match => !match.deleted && match.recipricated);
      setMyMatches(filteredMatches);
    };
    fetchMatches();
  }, [toggle]);

  return (
    <div className="matched-page">
      <img className="matched-page-img" src={TwoControllers} />
      <h1 className="matched-page-header">Your Matches</h1>
      <div className="matched-container">
        <div className='matched-page-info'>
          {myMatches.map((match, idx) =>(
              <Matched key={idx} match={match} setToggle={setToggle} profile={profile}/>
          ))}
        </div>
        </div>
    </div>
  )
}

export default MatchedPage