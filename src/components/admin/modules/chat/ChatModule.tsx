import React from 'react';
import { useChat } from './hooks/useChat';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import { MessageSquare } from 'lucide-react';

export default function ChatModule() {
  const {
    chats,
    selectedChat,
    setSelectedChat,
    sendMessage,
    closeChat
  } = useChat();

  const activeChats = chats.filter(chat => chat.status === 'active').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5 text-orange-600" />
          <span className="text-sm font-medium text-gray-600">
            {activeChats} Active Chats
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-lg shadow-md overflow-hidden">
          <ChatList
            chats={chats}
            selectedChatId={selectedChat?.id}
            onSelectChat={setSelectedChat}
          />
        </div>
        
        <div className="lg:col-span-2">
          {selectedChat ? (
            <ChatWindow
              chat={selectedChat}
              onSendMessage={sendMessage}
              onClose={closeChat}
            />
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}