import React from 'react';

const MenuItem = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 text-black rounded-xl  hover:bg-gray-200 transition cursor-pointer font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;
