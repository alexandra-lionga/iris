import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero__slider">
            <input type='radio' name='radio-btn' id='radio1'></input>
            <input type='radio' name='radio-btn' id='radio2'></input>
            <input type='radio' name='radio-btn' id='radio3'></input>
            <input type='radio' name='radio-btn' id='radio4'></input>
            <input type='radio' name='radio-btn' id='radio5'></input>
        </div>
    </div>
  )
}

export default Hero;