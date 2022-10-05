import { useState } from 'react';
import './Slider.css';

function Slider({handleUpdate, defaultValue}) {
  const MIN_VALUE = 0;
  const MAX_VALUE = 20;
  const [sliderValue, setSliderValue] = useState(defaultValue);

  function handleValueChange(event) {
    setSliderValue(event.target.value);
    handleUpdate(event.target.value);
  }

  return(
    <>
      <div className='slider'>
        <label className='slider-label'>Character length</label>
        <span className='slider-value'>{sliderValue}</span>
        <input 
          className='slider-input' 
          type='range' 
          min={MIN_VALUE} 
          max={MAX_VALUE} 
          value={sliderValue} 
          onChange={handleValueChange} />
      </div>
    </>
  )
}

export default Slider;
