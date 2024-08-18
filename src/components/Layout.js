import { useState } from "react";
import FriendsList from "./FriendList";
import ChatWindow from "./ChatWindow";
import PostSection from "./PostSection";
import Header from "./Header";

const Layout = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [chatHistories, setChatHistories] = useState({});

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
  };

  const handleSendMessage = (message) => {
    setChatHistories((prevHistories) => {
      const newMessages = [...(prevHistories[selectedFriend.id] || []), { text: message, from: 'Me' }];
      return { ...prevHistories, [selectedFriend.id]: newMessages };
    });
  };

  const handleCloseChat = () => {
    setSelectedFriend(null);
  };

  return (
    <div className="relative h-screen flex flex-col">
      <Header />
      <main className="flex flex-grow">
        <aside className="w-80 p-4 bg-gray-50 border-r">
          <FriendsList onSelectFriend={handleSelectFriend} />
        </aside>
        <div className="flex-grow p-4">
          <PostSection />
        </div>
      </main>
      {selectedFriend && (
        <ChatWindow
          selectedFriend={selectedFriend}
          messages={chatHistories[selectedFriend.id] || []}
          onSendMessage={handleSendMessage}
          onClose={handleCloseChat}
        />
      )}
    </div>
  );
};

export default Layout;