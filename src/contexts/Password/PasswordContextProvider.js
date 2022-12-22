import { useState, useEffect } from 'react';
import randomize from 'randomatic';
import PasswordContext from './PasswordContext';

function PasswordContextProvider({children}) {
  const DEFAULT_PATTERN = 'a';
  const [passwordPattern, setPasswordPattern] = useState(DEFAULT_PATTERN);
  const [passwordValue, setPasswordValue] = useState('');
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  const generatePassword = (passwordLength, passwordPattern) => {
    const pw = randomize(passwordPattern, passwordLength);
    setPasswordValue(pw);
  }

  const updateButtonState = (state) => {
    setbuttonDisabled(state);
  }

  const passwordSettings = {
    pattern: passwordPattern,
    passwordValue: passwordValue,
    buttonDisabled: buttonDisabled,
    generatePassword,
    updateButtonState,
  };

    useEffect(() => {
    }, [])

  return (
    <PasswordContext.Provider
      value={{ 
        passwordPattern, setPasswordPattern,
        passwordValue, setPasswordValue,
        buttonDisabled, setbuttonDisabled,
        generatePassword,
        updateButtonState,
        passwordSettings }}>
      {children}
    </PasswordContext.Provider>
  );
}

export default PasswordContextProvider;