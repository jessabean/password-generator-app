import { useState, useEffect } from 'react';
import randomize from 'randomatic';
import PasswordContext from './PasswordContext';

function PasswordContextProvider({children}) {
  const DEFAULT_LENGTH = 10;
  const DEFAULT_PATTERN = 'a';
  const [passwordLength, setPasswordLength] = useState(DEFAULT_LENGTH);
  const [passwordPattern, setPasswordPattern] = useState(DEFAULT_PATTERN);
  const [passwordValue, setPasswordValue] = useState('');
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  const updateLength = num => {
    if(parseInt(num) < 1) {
      setbuttonDisabled(true);
    } else {
      setbuttonDisabled(false);
    }
    
    setPasswordLength(parseInt(num));
  };

  const updatePattern = array =>  {
    const pattern = array.join('');
    if(!array.length) {
      setbuttonDisabled(true);
    } else {
      setbuttonDisabled(false);
    }

    setPasswordPattern(pattern);
  }

  const handleButtonClick = () => {
    generatePassword(passwordLength, passwordPattern)
  }

  const handleSliderChange = (event) => {
    const value = event.target.value;
    updateLength(value);
  }

  const generatePassword = (passwordLength, passwordPattern) => {
    const pw = randomize(passwordPattern, passwordLength);
    setPasswordValue(pw);
  }

  const updateButtonState = (state) => {
    setbuttonDisabled(state);
  }

  const passwordSettings = {
    length: passwordLength,
    pattern: passwordPattern,
    passwordValue: passwordValue,
    buttonDisabled: buttonDisabled,
    updateLength,
    updatePattern,
    generatePassword,
    updateButtonState,
  };

    useEffect(() => {
      if(passwordLength === 0 || passwordPattern.length === 0) {
        setbuttonDisabled(true);
      }
    }, [buttonDisabled, passwordLength, passwordPattern])

  return (
    <PasswordContext.Provider
      value={{ 
        passwordLength, setPasswordLength, 
        passwordPattern, setPasswordPattern,
        passwordValue, setPasswordValue,
        buttonDisabled, setbuttonDisabled,
        updateLength,
        updatePattern,
        handleButtonClick,
        handleSliderChange,
        generatePassword,
        updateButtonState,
        passwordSettings }}>
      {children}
    </PasswordContext.Provider>
  );
}

export default PasswordContextProvider;