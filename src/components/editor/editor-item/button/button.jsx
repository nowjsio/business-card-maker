import React from 'react';
import styles from './button.module.css';

const Button = ({ name, onClick }) => {
  const getColor = buttonName => {
    const buttonNameLower = buttonName.toLowerCase();
    switch (buttonNameLower) {
      case 'edit':
        return styles.edit;
      case 'delete':
        return styles.delete;
      case 'submit':
        return styles.submit;
      default:
        throw new Error(`unknown theme: ${buttonNameLower}`);
    }
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${getColor(name)}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
