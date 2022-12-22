import { useState, useEffect, useRef } from 'react';
import './PasswordControls.css';
import { controls } from './passwordoptions';

function PasswordControls({patternData, updatePattern}) {
  const initialChecks = controls.flatMap((item) => [item.checked]);

  // convert patternData string to an array so we can filter
  const [pattern, setPattern] = useState([patternData]);
  const [checkedControls, setCheckedControls] = useState(initialChecks);
  const patternValue = useRef(patternData);
  
  const handleCheck = (event, position) => {
    const {value, checked} = event.target; 
    const updatedCheckedState = checkedControls.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedControls(updatedCheckedState);
    
    if(checked) {
      setPattern([...pattern, value])
      patternValue.current = [...pattern, value];
      updatePattern(patternValue.current);
    } else {
      setPattern(pattern.filter((patternCode) => patternCode !== value))
      patternValue.current = pattern.filter((patternCode) => patternCode !== value);
      updatePattern(patternValue.current);
    }
  };

  useEffect(() => {
    patternValue.current = pattern;
  },[pattern]);

  return(
    <>
      <svg className="checkbox-icon">
        <symbol id="check" viewBox="0 0 15 13">
          <path d="M2 6.60659L5.39341 10L13.3934 2" stroke="#18171F" strokeWidth="3"/>
        </symbol>
      </svg>
      
      <ul className="password-options">
        {controls.map(
          ({ name, label, pattern }, index) => {
            return (
              <li key={index} className="option">
                <label className="option-label">
                  <div className="checkbox-container">
                    <input onChange={(e) => handleCheck(e, index)}
                      id={`checkbox-${name}`} 
                      type="checkbox" 
                      className="option-checkbox"
                      value={pattern}
                      checked={checkedControls[index]} />
                    <svg><use href="#check"></use></svg>
                  </div>
                  <span className="option-text">{label}</span>
                </label>
              </li>
            )
          }
        )}
      </ul>
    </>
  )
}

export default PasswordControls;
