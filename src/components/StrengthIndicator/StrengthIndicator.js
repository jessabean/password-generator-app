import { useState, useEffect, useCallback } from 'react';
import './StrengthIndicator.css';
import { optionsMap } from './optionsmap';

function StrengthIndicator({options}) {
  const level = useCallback(() => {
    return optionsMap.find(element => element.options === options)
  }, [options]);

  const [strength, setStrength] = useState(
    {
      options: 3,
      label: 'medium'
    }
  );
  
  useEffect(() => {
    setStrength(level);
  }, [level])

  const meterClasses = `strength-meter strength-meter--${strength.options}`;
  
  return(
    <>
      <div className="strength">
        <p className="strength-title">Strength</p>

        <div className={meterClasses}>
          <p className="strength-label">{strength.label}</p>
          <div className="strength-meter-image" role="img">
            <svg className="strength-meter-increment" fill="none" viewBox="0 0 11 28" xmlns="http://www.w3.org/2000/svg">
              <path d="m1.5 1h8v26h-8z" />
            </svg>
            <svg className="strength-meter-increment" fill="none" viewBox="0 0 11 28" xmlns="http://www.w3.org/2000/svg">
              <path d="m1.5 1h8v26h-8z" />
            </svg>
            <svg className="strength-meter-increment" fill="none" viewBox="0 0 11 28" xmlns="http://www.w3.org/2000/svg">
              <path d="m1.5 1h8v26h-8z" />
            </svg>
            <svg className="strength-meter-increment" fill="none" viewBox="0 0 11 28" xmlns="http://www.w3.org/2000/svg">
              <path d="m1.5 1h8v26h-8z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default StrengthIndicator;