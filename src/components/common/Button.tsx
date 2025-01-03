import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ href, variant = 'primary', className = '', children, onClick }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700',
    secondary: 'bg-teal-100 text-teal-700 hover:bg-teal-200',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;