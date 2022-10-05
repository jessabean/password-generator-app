import { useState, useEffect, useRef } from 'react';
import './PasswordControls.css';

function PasswordControls({handleUpdate, defaultValue}) {
  return(
    <>
      <svg className='checkbox-icon'>
        <symbol id='check' viewBox='0 0 15 13'>
          <path d='M2 6.60659L5.39341 10L13.3934 2' stroke='#18171F' strokeWidth='3'/>
        </symbol>
      </svg>
      
      <ul className='password-options'>
        <li className='option'>
          <label className='option-label'>
            <div className='checkbox-container'>
              <input type='checkbox' className='option-checkbox' />
              <svg><use href="#check"></use></svg>
            </div>
            <span className='option-text'>Include Uppercase Letters</span>
          </label>
        </li>
        <li className='option'>
          <label className='option-label'>
            <div className='checkbox-container'>
              <input type='checkbox' className='option-checkbox' />
              <svg><use href="#check"></use></svg>
            </div>
            <span className='option-text'>Include Lowercase Letters</span>
          </label>
        </li>
        <li className='option'>
          <label className='option-label'>
            <div className='checkbox-container'>
              <input type='checkbox' className='option-checkbox' />
              <svg><use href="#check"></use></svg>
            </div>
            <span className='option-text'>Include Numbers</span>
          </label>
        </li>
        <li className='option'>
          <label className='option-label'>
            <div className='checkbox-container'>
              <input type='checkbox' className='option-checkbox' />
              <svg><use href="#check"></use></svg>
            </div>
            <span className='option-text'>Include Symbols</span>
          </label>
        </li>
      </ul>
    </>
  )
}

export default PasswordControls;
