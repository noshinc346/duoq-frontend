import { editMatch } from '../../services/matched'
import '../../screens/MatchedPage/MatchedPage.css'

function Matched({ match, setToggle }) {
    const handleDeleteMatch = async () => {
        await editMatch(match.id, {deleted: true})
        setToggle(prev => !prev)
    }

    return (
        <div className='matched-info'>
            <h1 className='matched-name'>{match?.user2_profile.name}</h1>
            <button className='matched-button' onClick={handleDeleteMatch}>Delete</button>
        </div>
  )
}

export default Matched