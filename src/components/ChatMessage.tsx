// ChatMessage.tsx

import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';

// Import the necessary markdown libraries
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For tables, task lists, etc.

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Display AM/PM
    });
  };

  return (
    <div className={`flex gap-2 ${message.isUser ? 'justify-end' : 'justify-start'} `}>
      
      {/* Bot Avatar */}
      {!message.isUser && (
        <Avatar className="w-8 h-8 flex-shrink-0">
          <AvatarFallback>
            <Bot className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={`flex flex-col ${message.isUser ? 'items-end' : 'items-start'} max-w-[80%]`}>
        
        {/* The Badge/Bubble containing the message content */}
        <div 
          className={`px-3 py-2 rounded-xl text-sm whitespace-pre-wrap break-all shadow-md ${
            message.isUser 
              ? 'bg-primary text-primary-foreground rounded-br-none' // User bubble styling
              : 'bg-muted text-foreground rounded-tl-none' // Bot bubble styling
          }`}
          // We apply the styling directly to the <div> wrapper 
          // instead of the Badge to better control the markdown output.
        >
          {/* --- THE FIX IS HERE --- 
            ReactMarkdown replaces the plain span
          */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            // The 'components' prop allows you to override default HTML elements with your custom components
            components={{
              // Make lists compact to fit inside the chat bubble
              ul: ({ node, ...props }) => <ul className="list-disc ml-4 my-1.5 space-y-1" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal ml-4 my-1.5 space-y-1" {...props} />,
              p: ({ node, ...props }) => <p className="mb-0 mt-0" {...props} />, // Remove margin from paragraphs
            }}
          >
            {message.text}
          </ReactMarkdown>
        </div>

        {/* Timestamp */}
        <span className="text-xs text-muted-foreground mt-1 px-1">
          {formatTime(message.timestamp)}
        </span>
      </div>

      {/* User Avatar */}
      {message.isUser && (
        <Avatar className="w-8 h-8 flex-shrink-0">
          <AvatarFallback>
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}