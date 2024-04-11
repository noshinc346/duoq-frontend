import Carousel from 'react-hot-carousel'
import Valorant from '../../assets/valorant.jpg'
import League from '../../assets/leagueoflegends.jpg'
import BG3 from '../../assets/bg3.jpg'
import Minecraft from '../../assets/minecraft.jpg'
import DuoControllers from '../../assets/duocontrollers.mp4'
import './LandingPage.css'

function LandingPage() {
  return (
  <div className="landing-page">
    <div className="lp-content">
      <div className="lp-container">
      <video className="lp-video" src={DuoControllers} type="video/mp4" autoPlay loop muted />
        <div className="lp-container-one">
          <p className="intro">
           Welcome to DuoQ
          </p>
        </div>
        <div className="lp-container-two">
          <p className="intro-statement">
           DuoQ is your go-to app for finding your gaming soulmate.
           <br/>
           Say goodbye to the frustration of unreliable teammates and hello to coordinated victories.
           With DuoQ, you'll find the perfect partner to dominate the digital realm together.
           <br/>
           Join now and elevate your gaming experience to new heights!
          </p>
        </div>
        <div className="lp-container-three">
        <Carousel autoplay={true} autoPlayInterval={5}>
           <img className="carousel-img" src={Valorant}/>
           <img className="carousel-img" src={League}/>
           <img className="carousel-img" src={BG3}/>
           <img className="carousel-img" src={Minecraft}/>
         </Carousel>
        
        </div>

      </div>
      
    </div>

  </div>
  )
}

export default LandingPage