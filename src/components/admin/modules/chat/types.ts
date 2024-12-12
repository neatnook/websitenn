import { Chat } from '../../../../types/chat';

export interface ChatListProps {
  chats: Chat[];
  selectedChatId?: string;
  onSelectChat: (chat: Chat) => void;
}

export interface ChatWindowProps {
  chat: Chat;
  onSendMessage: (chatId: string, content: string) => void;
  onClose: (chatId: string) => void;
}