import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// Hardcoded friends list
const friends = [
  { id: 1, name: 'Rahul' },
  { id: 2, name: 'Cleo' },
  { id: 3, name: 'Raman' },
  { id: 4, name: 'Ram' },
  { id: 5, name: 'Tom' },
  { id: 6, name: 'Tony' },
  { id: 7, name: 'Hayley' },
];

const FriendsList = ({ onSelectFriend }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-80 bg-white border rounded-lg shadow-lg max-h-screen overflow-y-auto">
      <div className="p-4 border-b bg-gray-100 flex items-center">
        <FaSearch className="text-gray-500 ml-2" />
        <input
          type="text"
          placeholder="Search friends..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 bg-transparent border-none outline-none"
        />
      </div>
      <div className="p-4">
        {filteredFriends.map(friend => (
          <div
            key={friend.id}
            className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg"
            onClick={() => onSelectFriend(friend)}
          >
            {friend.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;