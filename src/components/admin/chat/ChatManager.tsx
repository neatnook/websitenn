import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import { Chat } from '../../../types/chat';

const initialChats: Chat[] = [
  {
    id: '1',
    customer: {
      name: 'Sarah Thompson',
      email: 'sarah@example.com'
    },
    messages: [
      {
        id: '1',
        content: 'Hi, I need help with booking a cleaning service',
        sender: 'customer',
        timestamp: new Date().toISOString()
      }
    ],
    status: 'active',
    createdAt: new Date().toISOString()
  }
];

export default function ChatManager() {
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  const handleSendMessage = (chatId: string, content: string) => {
    const newMessage = {
      id: Date.now().toString(),
      content,
      sender: 'admin' as const,
      timestamp: new Date().toISOString()
    };

    setChats(chats.map(chat => 
      chat.id === chatId 
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    ));
  };

  const handleCloseChat = (chatId: string) => {
    setChats(chats.map(chat =>
      chat.id === chatId
        ? { ...chat, status: 'closed' as const }
        : chat
    ));
    setSelectedChat(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5 text-orange-600" />
          <span className="text-sm font-medium text-gray-600">
            {chats.filter(chat => chat.status === 'active').length} Active Chats
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
              onSendMessage={handleSendMessage}
              onClose={handleCloseChat}
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