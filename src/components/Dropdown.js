import React, { useEffect, useRef } from 'react';

const Dropdown = ({ isOpen, onClose, children, className }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`absolute top-full rounded-xl right-0 mt-2 bg-white shadow-lg rounded-lg${className}`} ref={dropdownRef}>
      <div className="p-4 w-[400px] ">
        {children}
      </div>
    </div>
  );
};

export default Dropdown;