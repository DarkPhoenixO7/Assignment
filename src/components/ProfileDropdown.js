import React from 'react';
import MenuItem from './MenuItem';

const ProfileDropdown = () => {
  return (
    <div>
      <MenuItem onClick={() => alert('Clicked on view profile')} label="View Profile" />
      <MenuItem onClick={() => alert('Clicked on settings')} label="Settings" />
      <MenuItem onClick={() => alert('Clicked on logout')} label="Logout" />
    </div>
  );
};

export default ProfileDropdown;