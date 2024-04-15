import './About.css'
import DuoControllers from '../../assets/duocontrollers.mp4'


function About() {
  return (
    <div className="about-page">
      <video className="about-banner-video" src={DuoControllers} autoPlay loop muted />
      <h1 className="about-page-header">Meet the DuoQ Team</h1>

      <div className="team-container">

        <div className="luke-container">
          <img className="team-img" src="https://media.licdn.com/dms/image/D5603AQHi1ORJLP9ahQ/profile-displayphoto-shrink_800_800/0/1709065165192?e=2147483647&v=beta&t=CIIYpZn7HXQdEk59owTmTI8BKx8Ijcdr5mcRQY0K4Nw"/>
          <h3>Luke Bandeen</h3>
          <p className="team-role">Back End Engineer</p>
          <p className="team-role-two">Route King</p>
          <p className="fav-mg">Favorite Multiplayer Games:</p>
          <p className="fave-game-name">Valorant</p>
          <p className="fave-game-name">League of Legends</p>

        </div>
        <div className="jenn-container">
          <img className="team-img" src="https://avatars.githubusercontent.com/u/156385243?v=4"/>
          <h3>Jenn Bourke</h3>
          <p className="team-role">Front End Engineer</p>
          <p className="team-role-two">CSS Killer</p>
          <p className="fav-mg">Favorite Multiplayer Games:</p>
          <p className="fave-game-name">Baldur's Gate 3</p>
          <p className="fave-game-name">Super Smash Bros</p>

        </div>
        <div className="noshin-container">
          <img className="team-img" src="https://i.imgur.com/NQe6OSN.jpg"/>
          <h3>Noshin Chowdhury</h3>
          <p className="team-role">Front End Engineer</p>
          <p className="team-role-two">CSS Queen</p>
          <p className="fav-mg">Favorite Multiplayer Games:</p>
          <p className="fave-game-name">Valorant</p>
          <p className="fave-game-name"></p>

        </div>
        <div className="niles-container">
          <img className="team-img" src="https://ca.slack-edge.com/T0351JZQ0-U06CT3V177X-b8ebe0b3e22d-512"/>
          <h3>Niles Toomer</h3>
          <p className="team-role">Back End Engineer</p>
          <p className="team-role-two"></p>
          <p className="fav-mg">Favorite Multiplayer Games: </p>
          <p className="fave-game-name">League of Legends</p>
          <p className="fave-game-name"></p>
        </div>
      </div>
    </div>
  )
}

export default About