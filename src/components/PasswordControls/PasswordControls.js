import { useState, useEffect, useContext } from 'react';
import PasswordContext from '../../contexts/Password/PasswordContext';
import './PasswordControls.css';
import { controls } from './passwordoptions';

function PasswordControls() {
  const context = useContext(PasswordContext);
  const defaultChecked = controls.filter((control) => control.checked === true);
  const initialOptions = defaultChecked.flatMap((item) => [item.pattern]);
  const initialChecks = controls.flatMap((item) => [item.checked]);

  const [checkedControls, setCheckedControls] = useState(initialChecks);
  const [passwordOptions, setPasswordOptions] = useState(initialOptions);

  function handleCheck(event, position) {
    const {value, checked} = event.target; 
    const updatedCheckedState = checkedControls.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedControls(updatedCheckedState);
    
    if(checked) {
      setPasswordOptions([...passwordOptions, value]);
      context.updatePattern(passwordOptions);
    } else {
      setPasswordOptions(passwordOptions.filter((e) => e !== value));
      context.updatePattern(passwordOptions);
    }
  }

  useEffect(() => {
    setPasswordOptions(passwordOptions);
    context.updatePattern(passwordOptions);
  },[passwordOptions, context]);

  return(
    <>
      <svg className="checkbox-icon">
        <symbol id="check" viewBox="0 0 15 13">
          <path d="M2 6.60659L5.39341 10L13.3934 2" stroke="#18171F" strokeWidth="3"/>
        </symbol>
      </svg>
      
      <ul className="password-options">
        {controls.map(
          ({ name, label, pattern, checked }, index) => {
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
