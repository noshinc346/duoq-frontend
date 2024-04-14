import './About.css'
import DuoControllers from '../../assets/duocontrollers.mp4'

function About() {
  return (
    <div className="about-page">
      <video className="lp-video" src={DuoControllers} autoPlay loop muted />
      <h1 className="about-page-header">Meet the DuoQ Team</h1>

      <div className="team-container">

        <div className="luke-container">
          <img className="team-img" src=""/>
          <h3>Luke Bandeen</h3>
          <p className="team-role">Back End Engineer</p>
          <p className="team-tole-two">Route King</p>
          <p className="fav-mg">Favorite Multiplayer Game:</p>
          <p className="fave-game-name"></p>

        </div>
        <div className="jenn-container">
          <img className="team-img" src=""/>
          <h3>Jenn Bourke</h3>
          <p className="team-role">Front End Engineer</p>
          <p className="team-tole-two"></p>
          <p className="fav-mg">Favorite Multiplayer Game:</p>
          <p className="fave-game-name">Baldur's Gate 3</p>

        </div>
        <div className="noshin-container">
          <img className="team-img" src=""/>
          <h3>Noshin Chowdhury</h3>
          <p className="team-role">Front End Engineer</p>
          <p className="team-tole-two">CSS Queen</p>
          <p className="fav-mg">Favorite Multiplayer Game:</p>
          <p className="fave-game-name"></p>

        </div>
        <div className="niles-container">
          <img className="team-img" src=""/>
          <h3>Niles Toomer</h3>
          <p className="team-role">Back End Engineer</p>
          <p className="team-tole-two"></p>
          <p className="fav-mg">Favorite Multiplayer Game: </p>
          <p className="fave-game-name"></p>

        </div>
      </div>
    </div>
  )
}

export default About