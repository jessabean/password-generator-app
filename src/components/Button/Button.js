import './Button.css';

function Button({text = '', icon, onClick}) {
  return(
    <button className="button" onClick={onClick}>
      {text}
      {!!icon &&
        <span className="button-icon">
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547V6.8946L7.68094 6.8946L3.84045 10.735L5.10547 12Z" />
          </svg>
        </span>
      }
    </button>
  );
}
export default Button;