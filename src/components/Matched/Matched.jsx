import { editMatch } from '../../services/matched'
import '../../screens/MatchedPage/MatchedPage.css'

function Matched({ match, setToggle, profile }) {
    const handleDeleteMatch = async () => {

        if (match.user1_profile.id === profile.id) {
            await editMatch(match.user2_profile.id, {deleted: true})
            setToggle(prev => !prev)
        } else {
            await editMatch(match.user1_profile.id, {deleted: true})
            setToggle(prev => !prev)
        }
    }

    function checkCurrentMatch() {
        if (match?.user1_profile?.id === profile?.id) {
            return match?.user2_profile.name
        } else {
            return match?.user1_profile.name
        }
    }

    return (
        <div className='matched-info'>
            <h1 className='matched-name'>{checkCurrentMatch()}</h1>
            <button className='matched-button' onClick={handleDeleteMatch}>Delete</button>
        </div>
  )
}

export default Matched