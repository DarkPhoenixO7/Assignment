import React, { useState } from 'react';
import { FaTimes, FaChevronDown, FaChevronUp, FaComments } from 'react-icons/fa';

const ChatWindow = ({ selectedFriend, messages, onSendMessage, onClose }) => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Window Component */}
      {isOpen && (
        <div
          className={`fixed bottom-0 right-0 m-4 w-80 bg-white border rounded-lg shadow-lg transition-transform duration-300 `}
        >
          <div className="flex justify-between items-center p-4 border-b bg-gray-100">
            <h3 className="text-lg font-semibold">{selectedFriend ? selectedFriend.name : 'Chat'}</h3>
            <div className="flex items-center space-x-2">
              {selectedFriend && (
                <button onClick={() => setIsOpen(false)} className="text-gray-600">
                  <FaTimes />
                </button>
              )}
            </div>
          </div>
          {isOpen && selectedFriend && (
            <div className="flex flex-col h-60 overflow-y-auto p-4">
              <div className="flex-grow">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-2 p-2 rounded-lg ${
                      msg.from === 'Me' ? 'bg-blue-100 text-right' : 'bg-gray-100'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex border-t mt-2 pt-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full p-2 border rounded-lg"
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Minimized Chat Button */}
      {!isOpen && (
        <div
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-blue-600 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <FaComments size={24} />
        </div>
      )}
    </>
  );
};

export default ChatWindow;