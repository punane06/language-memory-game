import React, { ReactNode } from 'react'

const Button = ({
    title,
    iconRight,
    iconLeft,
    onlyIcon,
    ariaLabel,
    onClick,
}: {
    title?: string;
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
    onlyIcon?: ReactNode;
    ariaLabel?: string;
    onClick?: () => void;
}) => {

    return (
        <button
            type="button"
            className={`button ${onlyIcon ? 'button-only-icon' : ''}`}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {onlyIcon && <div className='button-only-icon'>{onlyIcon}</div>}
            {iconLeft && <div className='button-icon-left'>{iconLeft}</div>}
            {title && <div className='button-text'>{title}</div>}
            {iconRight && <div className='button-icon-right'>{iconRight}</div>}
        </button>
    )
}

export default Button
