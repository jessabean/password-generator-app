import { useRef } from 'react';
import './Slider.css';

function Slider({updateLength, passwordLength}) {
  const MIN_VALUE = 0;
  const MAX_VALUE = 20;
  const sliderEl = useRef(null);

  const handleChange = () => {
    const value = sliderEl.current.value;
    updateLength(value);
  }

  return(
      <div className='slider'>
        <label className='slider-label'>Character length</label>
        <span className='slider-value'>{passwordLength}</span>
        <input 
          className='slider-input' 
          type='range' 
          min={MIN_VALUE} 
          max={MAX_VALUE} 
          value={passwordLength} 
          ref={sliderEl}
          onChange={handleChange} />
      </div>
  )
}
export default Slider;
