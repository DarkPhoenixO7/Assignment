import React from 'react';
import MenuItem from './MenuItem';

const NotificationsDropdown = () => {
  return (
    <div>
      <MenuItem onClick={() => alert('Clicked on new comment')} label="New comment on your post" />
      <MenuItem onClick={() => alert('Clicked on friend request')} label="New friend request" />
      <MenuItem onClick={() => alert('Clicked on profile update')} label="Your profile was updated" />
    </div>
  );
};

export default NotificationsDropdown;
