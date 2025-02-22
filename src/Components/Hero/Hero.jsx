import './hero.css';
import hand_icon from '../Assets/hand_icon.png';
import hero_img from '../Assets/hero_image.png';
import arrow_icon from '../Assets/arrow.png';
export default function Hero() {
  return (
    <div className='hero'>
          <div className='hero_left'>
              <h2>NEEW ARRIVALS</h2>
              <div>
                  <div className='hero_hand_icon'>
                        <p>new</p>
                        <img src={hand_icon} alt='' />
                  </div>
                   <p>Collection</p>
                    <p>for every one</p>
                   {/* <button>Lastest Collection</button> */}
              </div>
              <div className='hero_lastest_collection'>
                <div>Lastest Collection</div>
                  <img src={arrow_icon} alt='' />
              </div> 
          </div>
          <div className='hero_right'>
             <img src={hero_img} alt='' />
          </div>


    </div>
  )
}
