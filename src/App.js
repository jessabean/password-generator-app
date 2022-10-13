import { useState, useEffect } from 'react';
import randomize from 'randomatic';
import './App.css';
import PasswordInput from './components/PasswordInput/PasswordInput.js';
import Slider from './components/Slider/Slider.js';
import PasswordControls from './components/PasswordControls/PasswordControls.js';
import StrengthIndicator from './components/StrengthIndicator/StrengthIndicator';
import Button from './components/Button/Button';
import PasswordContext from './contexts/Password/PasswordContext';

function App() {
  const DEFAULT_LENGTH = 10;
  const DEFAULT_PATTERN = 'a';
  const [passwordLength, setPasswordLength] = useState(DEFAULT_LENGTH);
  const [passwordPattern, setPasswordPattern] = useState(DEFAULT_PATTERN);
  const [passwordValue, setPasswordValue] = useState('');

  const updateLength = event => {
    const num = event.target.value;
    setPasswordLength(parseInt(num));
  };

  const updatePattern = array =>  {
    const pattern = array.join('');
    setPasswordPattern(pattern);
  }

  const handleButtonClick = () => {
    generatePassword(passwordLength, passwordPattern)
  }

  const generatePassword = (passwordLength, passwordPattern) => {
    const pw = randomize(passwordPattern, passwordLength);
    setPasswordValue(pw);
  }

  const passwordSettings = {
    length: passwordLength,
    pattern: passwordPattern,
    passwordValue: passwordValue,
    updateLength,
    updatePattern,
    generatePassword,
  };

  return (
    <PasswordContext.Provider value={passwordSettings}>
      <div className='wrap'>
        <header className='app-header'>
          <h1 className='app-title'>Password Generator</h1>
        </header>
        <div className='password-box'>
          <PasswordInput passwordLength={passwordLength} passwordPattern={passwordPattern}></PasswordInput>
        </div>
        <div className='password-controls'>
          <Slider></Slider>
          <PasswordControls></PasswordControls>
          <StrengthIndicator options={passwordPattern.length}></StrengthIndicator>
          <Button text='Generate' icon='true' onClick={handleButtonClick}></Button>
        </div>
      </div>
    </PasswordContext.Provider>
  );
}

export default App;
