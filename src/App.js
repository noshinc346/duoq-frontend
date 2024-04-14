import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { verifyUser } from './services/user.js'
import Nav from './components/Nav/Nav.jsx'
import Game from './components/Game/Game.jsx'
import Register from './screens/Register/Register.jsx'
import SignOut from './screens/SignOut/SignOut.jsx'
import Login from './screens/Login/Login.jsx'
import MatchedPage from './screens/MatchedPage/MatchedPage.jsx'
import MatchingPage from './screens/MatchingPage/MatchingPage.jsx'
import Profile from './screens/Profile/Profile.jsx'
import ProfileEdit from './screens/ProfileEdit/ProfileEdit.jsx'
import LandingPage from './screens/LandingPage/LandingPage.jsx'
import Homepage from './screens/Homepage/Homepage.jsx'
import About from './screens/About/About.jsx'
import './App.css'
import { getProfile } from './services/profile.js'


function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await verifyUser();
      
      if (userData) {
        const profileData = await getProfile()
        setUser(userData)
        setProfile(profileData)
      } else { 
        setUser(null)
        setProfile(null)
      }
    };

    fetchUser();
  }, []);


  return (
    <div className="App">
      <Nav user={user}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Register setUser={setUser} />}/>
        <Route path="/login" element={<Login setUser={setUser} setProfile={setProfile}/>} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} setProfile={setProfile}/>} />
        <Route path="/profile/:id?" element={<Profile setUser={setUser}/>} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/profile/edit" element={<ProfileEdit setUser={setUser}/>} />
        <Route path="/matched-page" element={<MatchedPage profile={profile}/>} />
        {profile && <Route path="/matching-page" element={<MatchingPage profile={profile} setProfile={setProfile}/>} />}
        <Route path="/about" element={<About user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
