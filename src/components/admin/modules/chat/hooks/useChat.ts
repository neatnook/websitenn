import { useState } from 'react';
import { Chat, Message } from '../../../../../types/chat';

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

export function useChat() {
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  const sendMessage = (chatId: string, content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'admin',
      timestamp: new Date().toISOString()
    };

    setChats(chats.map(chat => 
      chat.id === chatId 
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    ));
  };

  const closeChat = (chatId: string) => {
    setChats(chats.map(chat =>
      chat.id === chatId
        ? { ...chat, status: 'closed' as const }
        : chat
    ));
    setSelectedChat(null);
  };

  return {
    chats,
    selectedChat,
    setSelectedChat,
    sendMessage,
    closeChat
  };
}