import logo from './logo.svg';
import './App.css';
import './components/PasswordInput.js'
import PasswordInput from './components/PasswordInput.js';

function App() {
  return (
    <div className='wrap'>
      <header className='app-header'>
        <h1 className='app-title'>Password Generator</h1>
      </header>
      <PasswordInput></PasswordInput>
    </div>
  );
}

export default App;
