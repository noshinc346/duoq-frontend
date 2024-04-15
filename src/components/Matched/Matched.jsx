import { editMatch } from '../../services/matched'
import { Link } from 'react-router-dom'; // Import Link
import '../../screens/MatchedPage/MatchedPage.css'

function Matched({ match, setToggle, profile }) {
    const handleDeleteMatch = async () => {
        const targetUserId = match.user1_profile.id === profile.id ? match.user2_profile.id : match.user1_profile.id;
        await editMatch(targetUserId, {deleted: true})
        setToggle(prev => !prev)
    }

    function checkCurrentMatch() {
        // Return the name of the match
        if (match?.user1_profile?.id === profile?.id) {
            return match?.user2_profile.name;
        } else {
            return match?.user1_profile.name;
        }
    }

    function getProfileLink() {
        // Correctly generate the link to navigate to the matched user's profile
        if (match?.user1_profile?.id === profile?.id) {
            return `/profile/${match.user2_profile.id}`;
        } else {
            return `/profile/${match.user1_profile.id}`;
        }
    }

    return (
        <div className='matched-info-container'>
            <h1 className='matched-name'>
                <img className="matched-profile-pic" src={match.user2_profile.profile_picture}/>
                <h2 className="matched-profile-name">{match.user2_profile.name}</h2>
                {/* <Link className="matched-link"to={getProfileLink()}>{checkCurrentMatch()}</Link> */}
            </h1>
            <button className='matched-button' onClick={handleDeleteMatch}>Delete</button>
        </div>
    )
}

export default Matched;



// import { editMatch } from '../../services/matched'
// import '../../screens/MatchedPage/MatchedPage.css'

// function Matched({ match, setToggle, profile }) {
//     const handleDeleteMatch = async () => {

//         if (match.user1_profile.id === profile.id) {
//             await editMatch(match.user2_profile.id, {deleted: true})
//             setToggle(prev => !prev)
//         } else {
//             await editMatch(match.user1_profile.id, {deleted: true})
//             setToggle(prev => !prev)
//         }
//     }

//     function checkCurrentMatch() {
//         if (match?.user1_profile?.id === profile?.id) {
//             return match?.user2_profile.name
//         } else {
//             return match?.user1_profile.name
//         }
//     }

//     return (
//         <div className='matched-info'>
//             <h1 className='matched-name'>{checkCurrentMatch()}</h1>
//             <button className='matched-button' onClick={handleDeleteMatch}>Delete</button>
//         </div>
//   )
// }

// export default Matched