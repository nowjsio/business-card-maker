import React from 'react';
import styles from './button.module.css';

const Button = ({ id, onClick, formRef }) => {
  const getColor = inputId => {
    const lowerInputId = inputId.toLowerCase();
    switch (lowerInputId) {
      case 'edit':
        return styles.edit;
      case 'delete':
        return styles.delete;
      case 'submit':
        return styles.submit;
      default:
        throw new Error(`unknown theme: ${lowerInputId}`);
    }
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${getColor(id)}`}
      onClick={event => onClick(event, formRef)}
    >
      {id}
    </button>
  );
};

export default Button;
