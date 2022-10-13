import { useState, useEffect } from 'react';
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

  function handleOptions(options) {
    const pattern = options.join('');
    setPasswordPattern(pattern);
  }

  const updateLength = event => {
    const num = event.target.value;
    setPasswordLength(parseInt(num));
  };

  const updatePattern = array =>  {
    const pattern = array.join('');
    setPasswordPattern(pattern);
  }

  const passwordSettings = {
    length: passwordLength,
    pattern: passwordPattern,
    updateLength,
    updatePattern,
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
          <PasswordControls handleOptions={handleOptions}></PasswordControls>
          <StrengthIndicator options={passwordPattern.length}></StrengthIndicator>
          <Button text='Generate' icon='true'></Button>
        </div>
      </div>
    </PasswordContext.Provider>
  );
}

export default App;
