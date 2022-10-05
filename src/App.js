import { useState } from 'react';
import './App.css';
import PasswordInput from './components/PasswordInput/PasswordInput.js';
import Slider from './components/Slider/Slider.js';

function App() {
  const DEFAULT_LENGTH = 10;
  const [passwordLength, setPasswordLength] = useState(DEFAULT_LENGTH);

  const handleUpdate = num => {
    setPasswordLength(num);
  };

  return (
    <div className='wrap'>
      <header className='app-header'>
        <h1 className='app-title'>Password Generator</h1>
      </header>
      <div className='password-box'>
        <PasswordInput></PasswordInput>
      </div>
      <div className='password-controls'>
        <Slider handleUpdate={handleUpdate} defaultValue={DEFAULT_LENGTH}></Slider>
      </div>
    </div>
  );
}

export default App;
