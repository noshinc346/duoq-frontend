// import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMatches } from '../../services/matched.js'
import Matched from '../../components/Matched/Matched.jsx'

function MatchedPage() {
  const [myMatches, setMyMatches] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchMatches = async () => {
      const matchedData = await getMatches();

      // filter out matches that are deleted
      const filteredMatches = matchedData.filter(match => {
        return !match.deleted && match.recipricated
      })

      setMyMatches(filteredMatches);
    };

    fetchMatches();
  }, [toggle]);

  return (
    <div className="matched-page">
      <h1 className="matched-page-header">Your Matches</h1>
      <div className="matched-container">
        <div className='matched-page-info'>
          {myMatches.map((match, idx) =>(
              <Matched key={idx} match={match} setToggle={setToggle}/>
          ))}
        </div>
        </div>
    </div>
  )
}

export default MatchedPage