import React from 'react';
import { formatRelativeTime } from '../../../../../utils/dates';
import { Chat } from '../../../../../types/chat';

interface ChatListProps {
  chats: Chat[];
  selectedChatId?: string;
  onSelectChat: (chat: Chat) => void;
}

export default function ChatList({ chats, selectedChatId, onSelectChat }: ChatListProps) {
  const activeChats = chats.filter(chat => chat.status === 'active');
  const closedChats = chats.filter(chat => chat.status === 'closed');

  return (
    <div className="h-[600px] flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Active Conversations</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {activeChats.length === 0 && (
          <p className="text-center text-gray-500 py-4">No active chats</p>
        )}
        
        {activeChats.map(chat => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors
              ${selectedChatId === chat.id ? 'bg-orange-50' : ''}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">{chat.customer.name}</h4>
                <p className="text-sm text-gray-500">{chat.customer.email}</p>
              </div>
              <span className="text-xs text-gray-400">
                {formatRelativeTime(chat.messages[chat.messages.length - 1].timestamp)}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-600 truncate">
              {chat.messages[chat.messages.length - 1].content}
            </p>
          </button>
        ))}

        {closedChats.length > 0 && (
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-900">Closed Conversations</h3>
          </div>
        )}

        {closedChats.map(chat => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors opacity-75
              ${selectedChatId === chat.id ? 'bg-orange-50' : ''}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">{chat.customer.name}</h4>
                <p className="text-sm text-gray-500">{chat.customer.email}</p>
              </div>
              <span className="text-xs text-gray-400">
                {formatRelativeTime(chat.messages[chat.messages.length - 1].timestamp)}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-600 truncate">
              {chat.messages[chat.messages.length - 1].content}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}