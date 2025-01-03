import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  onItemClick?: () => void;
}

const Navigation = ({ items, className = '', onItemClick }: NavigationProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={className}>
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`${
            isActive(item.href)
              ? 'text-teal-600'
              : 'text-gray-700 hover:text-teal-600'
          } px-3 py-2 text-sm font-medium transition-colors duration-200`}
          onClick={onItemClick}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;