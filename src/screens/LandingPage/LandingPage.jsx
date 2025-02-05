import Valorant from '../../assets/valorant.jpg'
import League from '../../assets/leagueoflegends.jpg'
import BG3 from '../../assets/bg3.jpg'
import Minecraft from '../../assets/minecraft.jpg'
import DuoControllers from '../../assets/duocontrollers.mp4'
import Footer from '../../components/Footer/Footer.jsx'

import './LandingPage.css'

function LandingPage() {

  const images = [Valorant, League, BG3, Minecraft];

  return (
  <div className="landing-page">
    <div className="lp-container">
    <video className="lp-video" src={DuoControllers} autoPlay loop muted />
    <h1 className="intro">Welcome to DuoQ</h1>
    <div className="intro-statement-container">
    <p className="intro-statement">
          DuoQ is your go-to app for finding your gaming soulmate.
          <br/>
          Say goodbye to the frustration of unreliable teammates and hello to coordinated victories.
          <br/>
          With DuoQ, you'll find the perfect partner to dominate the digital realm together.
          <br/>
          Join now and elevate your gaming experience to new heights!
         </p>
    </div>
    <h3 className="games-header-one">Games</h3>
     <div className="img-gallery">
      {images.map((image, index) => (
        <img className="gallery-imgs" key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
     </div>
     <Footer />
    </div>
  </div>
  )
}

export default LandingPage;
