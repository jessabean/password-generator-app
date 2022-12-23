import { useState, useEffect } from 'react';
import './StrengthIndicator.css';
import { optionsMap } from './optionsmap';
import zxcvbn from 'zxcvbn';

function StrengthIndicator({password}) {
  const [strength, setStrength] = useState(optionsMap['2']);

  const calcPasswordScore = (password) => {
    let score = zxcvbn(password).score;
    if (score === 0) {
      return 1;
    }
    return score;
  }
  
  useEffect(() => {
    let strengthLevel = calcPasswordScore(password);;
    setStrength(optionsMap[strengthLevel]);
  }, [password])

  const meterClasses = `strength-meter strength-meter--${strength.level}`;
  
  return(
    <>
      <div className="strength">
        <p className="strength-title">Strength</p>

        <div className={meterClasses} key={password}>
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