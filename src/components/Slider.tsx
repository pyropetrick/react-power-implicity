import { SliderContent } from "./common/SliderContent"
import { SliderDots } from "./common/SliderDots"

export const Slider = () => {
  return (
    <div className='slider'>
      <div className="slider-container">
        <SliderContent/>
        <div className="slider__actions">
          <button className="slider__actions-btn">Learn</button>
          <SliderDots/>
        </div>
      </div>
    </div>
  )
}
