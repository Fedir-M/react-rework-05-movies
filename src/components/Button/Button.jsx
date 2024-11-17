import s from './Button.module.css';

const Button = ({ onClick, label, type = 'button', className = '' }) => {
  return (
    <button
      className={`${s.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
