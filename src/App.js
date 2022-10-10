import { useState, useEffect } from 'react';
import './App.css';
import PasswordInput from './components/PasswordInput/PasswordInput.js';
import Slider from './components/Slider/Slider.js';
import PasswordControls from './components/PasswordControls/PasswordControls.js';
import StrengthIndicator from './components/StrengthIndicator/StrengthIndicator';
import Button from './components/Button/Button';

function App() {
  const DEFAULT_LENGTH = 10;
  const [passwordLength, setPasswordLength] = useState(DEFAULT_LENGTH);
  const [passwordPattern, setPasswordPattern] = useState('a');

  const handleUpdate = num => {
    setPasswordLength(parseInt(num));
  };

  function handleOptions(options) {
    const pattern = options.join('');
    setPasswordPattern(pattern);
  }

  return (
    <div className='wrap'>
      <header className='app-header'>
        <h1 className='app-title'>Password Generator</h1>
      </header>
      <div className='password-box'>
        <PasswordInput passwordLength={passwordLength} passwordPattern={passwordPattern}></PasswordInput>
      </div>
      <div className='password-controls'>
        <Slider handleUpdate={handleUpdate} defaultValue={DEFAULT_LENGTH}></Slider>
        <PasswordControls handleOptions={handleOptions}></PasswordControls>
        <StrengthIndicator options={passwordPattern.length}></StrengthIndicator>
        <Button text='Generate' icon='true'></Button>
      </div>
    </div>
  );
}

export default App;
