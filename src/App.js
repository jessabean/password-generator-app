import './App.css';
import PasswordInput from './components/PasswordInput/PasswordInput.js';

function App() {
  return (
    <div className='wrap'>
      <header className='app-header'>
        <h1 className='app-title'>Password Generator</h1>
      </header>
      <div className='password-box'>
        <PasswordInput></PasswordInput>
      </div>
      <div className='password-controls'>
        controls go here
      </div>
    </div>
  );
}

export default App;
