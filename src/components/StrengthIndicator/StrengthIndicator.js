import { useState, useEffect } from 'react';
import './StrengthIndicator.css';

function StrengthIndicator({options}) {
  const optionsMap = [
    {
      options: 0,
      label: 'Too weak!',
    },
    {
      options: 1,
      label: 'Too weak!',
    },
    {
      options: 2,
      label: 'Weak',
    },
    {
      options: 3,
      label: 'Medium',
    },
    {
      options: 4,
      label: 'Strong',
    }
  ];

  const [strength, setStrength] = useState(
    {
      options: 3,
      label: 'medium'
    }
  );
  
  function measureStrength(options) {
    return optionsMap.find(element => element.options === options);
  }

  useEffect(() => {
    setStrength(measureStrength(options));
  }, [options])

  const meterClasses = `strength-meter strength-meter--${options}`;
  
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