import React, { useState } from 'react';

import ProfileDropdown from './ProfileDropdown';
import Dropdown from './Dropdown';
import NotificationsDropdown from './NotificationDropdown';


const Header = () => {
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
  
    return (
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center relative">
        <h1 className="text-xl font-bold">My Social App</h1>
        <div className="flex items-center space-x-4 relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative"
          >
            Notifications
          </button>
          <Dropdown
            isOpen={notificationsOpen}
            onClose={() => setNotificationsOpen(false)}
            className="w-64"
          >
            <NotificationsDropdown />
          </Dropdown>
  
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="relative"
          >
            Profile
          </button>
          <Dropdown
            isOpen={profileOpen}
            onClose={() => setProfileOpen(false)}
            className="w-48"
          >
            <ProfileDropdown />
          </Dropdown>
        </div>
      </header>
    );
  };
  
  export default Header;