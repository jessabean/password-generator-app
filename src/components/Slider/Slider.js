import { useContext } from 'react';
import PasswordContext from '../../contexts/Password/PasswordContext';
import './Slider.css';

function Slider() {
  const context = useContext(PasswordContext);
  const MIN_VALUE = 0;
  const MAX_VALUE = 20;

  return(
      <div className='slider'>
        <label className='slider-label'>Character length</label>
        <span className='slider-value'>{context.length}</span>
        <input 
          className='slider-input' 
          type='range' 
          min={MIN_VALUE} 
          max={MAX_VALUE} 
          value={context.length} 
          onChange={context.updateLength} />
      </div>
  )
}
export default Slider;
