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
    pattern: DEFAULT_PATTERN
  })
  const [passwordLength, setPasswordLength] = useState(DEFAULT_LENGTH);
  const [passwordPattern, setPasswordPattern] = useState(DEFAULT_PATTERN);
  const [passwordValue, setPasswordValue] = useState('');
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  const handleLengthUpdate = (num) => {
    if(parseInt(num) < 1) {
      setbuttonDisabled(true);
    } else {
      setbuttonDisabled(false);
    }

    setPasswordData({...passwordData, length: parseInt(num)});
    generatePassword(passwordData.pattern, passwordData.length);
  }

  const handlePatternUpdate = (patternArray) =>  {
    const newPattern = patternArray.join('');
    if(!newPattern.length) {
      setbuttonDisabled(true);
    } else {
      setbuttonDisabled(false);
    }

    setPasswordData({...passwordData, pattern: newPattern});
    generatePassword(passwordData.pattern, passwordData.length);
  }

  const generatePassword = (passwordPattern, passwordLength) => {
    const pw = randomize(passwordPattern, passwordLength);
    setPasswordValue(pw);
  }

  useEffect(() => {
    if(passwordData.length === 0) {
      setbuttonDisabled(true);
    }
    generatePassword(passwordData.pattern, passwordData.length)
  }, [passwordData])

  return (
    <div className='wrap'>
      <header className='app-header'>
        <h1 className='app-title'>Password Generator</h1>
      </header>

      <PasswordContextProvider>
        <div className='password-box'>
          <PasswordInput value={passwordValue}></PasswordInput>
        </div>
        <div className='password-controls'>
          <Slider updateLength={handleLengthUpdate} length={passwordLength}></Slider>
          <PasswordControls patternData={passwordData.pattern} updatePattern={handlePatternUpdate}></PasswordControls>
          <StrengthIndicator patternData={passwordData.pattern}></StrengthIndicator>
          <Button text='Generate' icon='true' isDisabled={buttonDisabled} onClick={() => generatePassword(passwordData.pattern, passwordData.length)}></Button>
        </div>
      </PasswordContextProvider>
    </div>
  )
}

export default App;
