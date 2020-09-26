import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn-medium', 'btn-large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({ children, type, onClick,
    buttonStyle, buttonSize, ButtonColor }) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const CheckButtonColor = COLOR.includes(ButtonColor) ? ButtonColor : null;
    
    
    
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} 
        ${CheckButtonColor}`} onClick={onClick} type={type}>{children} </button>
    )
}
