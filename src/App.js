import { useState, useEffect } from 'react';
import randomize from 'randomatic';
import './App.css';
import PasswordInput from './components/PasswordInput/PasswordInput.js';
import Slider from './components/Slider/Slider.js';
import PasswordControls from './components/PasswordControls/PasswordControls.js';
import StrengthIndicator from './components/StrengthIndicator/StrengthIndicator';
import Button from './components/Button/Button';
import PasswordContextProvider from './contexts/Password/PasswordContextProvider';

function App() {
  const DEFAULT_LENGTH = 10;
  const DEFAULT_PATTERN = 'a';
  const [passwordData, setPasswordData] = useState({
    length: DEFAULT_LENGTH,
    pattern: DEFAULT_PATTERN,
    value: '',
    valid: true
  })

  const handleLengthUpdate = (num) => {
    let isValid = parseInt(num) < 1 ? false : true;

    setPasswordData({
      ...passwordData, 
      length: parseInt(num),
      valid: isValid,
      value: generatePassword(passwordData.pattern, parseInt(num))
    });
  }

  const handlePatternUpdate = (patternArray) =>  {
    const newPattern = patternArray.join('');
    let isValid = !newPattern.length ? false : true;

    setPasswordData({
      ...passwordData, 
      valid: isValid,
      pattern: newPattern,
      value: generatePassword(newPattern, passwordData.length)
    });
  }

  const generatePassword = (passwordPattern, passwordLength) => {
    return randomize(passwordPattern, passwordLength);
  }

  return (
    <div className='wrap'>
      <header className='app-header'>
        <h1 className='app-title'>Password Generator</h1>
      </header>

      <PasswordContextProvider>
        <div className='password-box'>
          <PasswordInput data={passwordData}></PasswordInput>
        </div>
        <div className='password-controls'>
          <Slider updateLength={handleLengthUpdate} length={passwordData.length}></Slider>
          <PasswordControls patternData={passwordData.pattern} updatePattern={handlePatternUpdate}></PasswordControls>
          <StrengthIndicator patternData={passwordData.pattern}></StrengthIndicator>
          <Button text='Generate' icon='true' isDisabled={!passwordData.valid} onClick={() => generatePassword(passwordData.pattern, passwordData.length)}></Button>
        </div>
      </PasswordContextProvider>
    </div>
  )
}

export default App;
