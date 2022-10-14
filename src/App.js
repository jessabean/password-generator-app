import './App.css';
import PasswordInput from './components/PasswordInput/PasswordInput.js';
import Slider from './components/Slider/Slider.js';
import PasswordControls from './components/PasswordControls/PasswordControls.js';
import StrengthIndicator from './components/StrengthIndicator/StrengthIndicator';
import Button from './components/Button/Button';
import PasswordContextProvider from './contexts/Password/PasswordContextProvider';

function App() {
  return (
    <div className='wrap'>
      <header className='app-header'>
        <h1 className='app-title'>Password Generator</h1>
      </header>

      <PasswordContextProvider>
        <div className='password-box'>
          <PasswordInput></PasswordInput>
        </div>
        <div className='password-controls'>
          <Slider></Slider>
          <PasswordControls></PasswordControls>
          <StrengthIndicator></StrengthIndicator>
          <Button text='Generate' icon='true'></Button>
        </div>
      </PasswordContextProvider>
    </div>
  )
}

export default App;
