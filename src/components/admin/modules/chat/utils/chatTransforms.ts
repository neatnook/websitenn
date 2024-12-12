import { Chat, Message } from '../../../../../types/chat';

export function createMessage(content: string, sender: 'admin' | 'customer'): Message {
  return {
    id: Date.now().toString(),
    content,
    sender,
    timestamp: new Date().toISOString()
  };
}

export function addMessageToChat(chat: Chat, message: Message): Chat {
  return {
    ...chat,
    messages: [...chat.messages, message]
  };
}