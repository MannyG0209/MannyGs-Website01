import { useState, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isAI: boolean;
  timestamp: number;
}

const conversations = [
  [
    { text: "Hello! How can I assist you today?", isAI: true },
    { text: "I need help with my order status", isAI: false },
    { text: "I'd be happy to help! Can you provide your order number?", isAI: true },
    { text: "Sure, it's #12345", isAI: false },
    { text: "Found it! Your order is being processed and will ship tomorrow.", isAI: true },
    { text: "Perfect, thank you!", isAI: false }
  ],
  [
    { text: "Hi there! What can I do for you?", isAI: true },
    { text: "Do you offer 24/7 support?", isAI: false },
    { text: "Yes! I'm available 24/7 to help with any questions.", isAI: true },
    { text: "That's amazing! What about technical issues?", isAI: false },
    { text: "I can handle most technical questions instantly!", isAI: true },
    { text: "Impressive AI capabilities!", isAI: false }
  ],
  [
    { text: "Welcome! How may I help you today?", isAI: true },
    { text: "I'm interested in your services", isAI: false },
    { text: "Great! We offer AI chatbots, lead generation, and more.", isAI: true },
    { text: "How quickly can you implement a chatbot?", isAI: false },
    { text: "Typically within 24-48 hours for basic setup!", isAI: true },
    { text: "That's fast! Let's schedule a call", isAI: false }
  ],
  [
    { text: "Good day! What brings you here?", isAI: true },
    { text: "I heard about your AI phone systems", isAI: false },
    { text: "Yes! Our AI can handle calls 24/7 with natural conversation.", isAI: true },
    { text: "Can it handle complex customer inquiries?", isAI: false },
    { text: "Absolutely! It learns from each interaction to improve.", isAI: true },
    { text: "This could revolutionize our customer service!", isAI: false }
  ]
];

export function LiveChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentConversation, setCurrentConversation] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const conversation = conversations[currentConversation];
    
    if (messageIndex < conversation.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        
        // Simulate typing delay
        setTimeout(() => {
          const newMessage: Message = {
            id: Date.now() + messageIndex,
            text: conversation[messageIndex].text,
            isAI: conversation[messageIndex].isAI,
            timestamp: Date.now()
          };
          
          setMessages(prev => [...prev, newMessage]);
          setIsTyping(false);
          setMessageIndex(prev => prev + 1);
        }, conversation[messageIndex].isAI ? 1000 : 800);
        
      }, messageIndex === 0 ? 500 : 2000);

      return () => clearTimeout(timer);
    } else {
      // Conversation finished, start new one after delay
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setMessageIndex(0);
        setCurrentConversation(prev => (prev + 1) % conversations.length);
      }, 3000);

      return () => clearTimeout(resetTimer);
    }
  }, [messageIndex, currentConversation]);

  return (
    <div className="absolute bottom-4 left-4 right-4">
      <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-2 animate-fade-in-up ${
              message.isAI ? '' : 'justify-end'
            }`}
          >
            {message.isAI && (
              <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-semibold">AI</span>
              </div>
            )}
            <div
              className={`rounded-lg p-3 text-sm text-white max-w-[80%] ${
                message.isAI
                  ? 'bg-neutral-800/90 backdrop-blur-sm'
                  : 'bg-white/20 backdrop-blur-sm'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-start gap-2 animate-fade-in-up">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-semibold">AI</span>
            </div>
            <div className="bg-neutral-800/90 backdrop-blur-sm rounded-lg p-3 text-sm text-white">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Live indicator */}
      <div className="absolute top-2 right-2 flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-green-400 text-xs font-medium">LIVE DEMO</span>
      </div>
    </div>
  );
}