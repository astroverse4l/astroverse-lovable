
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Brain, Sparkles } from 'lucide-react';
import { aiService } from '@/services/ai/aiService';
import { toast } from '@/components/ui/use-toast';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  assistantType?: 'lyra' | 'astra';
  timestamp: Date;
}

interface AIChatPanelProps {
  defaultAssistant?: 'lyra' | 'astra';
  onClose?: () => void;
}

const AIChatPanel: React.FC<AIChatPanelProps> = ({ 
  defaultAssistant = 'lyra',
  onClose 
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeAssistant, setActiveAssistant] = useState<'lyra' | 'astra'>(defaultAssistant);
  const [apiKeysSet, setApiKeysSet] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [groqApiKey, setGroqApiKey] = useState<string>('');
  const [geminiApiKey, setGeminiApiKey] = useState<string>('AIzaSyBtLe5A7_BGMmXyZWPeynk44Skd95Xo2rI'); // Use the provided key

  useEffect(() => {
    // Add welcome message based on active assistant
    const welcomeMessage = {
      id: '0',
      role: 'assistant' as const,
      assistantType: activeAssistant,
      content: activeAssistant === 'lyra' 
        ? 'Hello! I\'m Lyra, your knowledge navigator. I specialize in research, problem-solving, and providing accurate information. How can I assist you today?'
        : 'Hi there! I\'m Astra, your creative companion. I\'m here to help with content creation, design ideas, and creative projects. What would you like to create together?',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [activeAssistant]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    if (!apiKeysSet && !geminiApiKey) {
      toast({
        title: "API Keys Required",
        description: "Please enter the required API keys to use the AI assistants.",
        variant: "destructive"
      });
      return;
    }
    
    // Set API keys if not already set
    if (!apiKeysSet && geminiApiKey) {
      aiService.setApiKeys(groqApiKey || '', geminiApiKey);
      setApiKeysSet(true);
    }
    
    const userMessage: Message = {
      id: Math.random().toString(36).substring(2, 15),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Convert messages to format expected by AI service
      const messageHistory = messages
        .filter(msg => msg.role !== 'system')
        .map(msg => ({
          role: msg.role,
          content: msg.content
        }));
      
      // Add the new user message
      messageHistory.push({
        role: 'user',
        content: input
      });
      
      let response;
      if (activeAssistant === 'lyra') {
        response = await aiService.askLyra(messageHistory);
      } else {
        response = await aiService.askAstra(messageHistory);
      }
      
      if (response) {
        const assistantMessage: Message = {
          id: response.id || Math.random().toString(36).substring(2, 15),
          role: 'assistant',
          assistantType: activeAssistant,
          content: response.message.content,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        // Fallback message if API call fails
        const fallbackMessage: Message = {
          id: Math.random().toString(36).substring(2, 15),
          role: 'assistant',
          assistantType: activeAssistant,
          content: "I'm sorry, I couldn't process your request at the moment. Please try again later.",
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, fallbackMessage]);
      }
    } catch (error) {
      console.error('Error processing AI request:', error);
      
      // Error message
      const errorMessage: Message = {
        id: Math.random().toString(36).substring(2, 15),
        role: 'assistant',
        assistantType: activeAssistant,
        content: "An error occurred while processing your request. Please try again.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-astro-dark/50 backdrop-blur-lg rounded-lg border border-white/10">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className={`h-10 w-10 rounded-full bg-gradient-to-r ${
            activeAssistant === 'lyra' 
              ? 'from-astro-blue to-cyan-400' 
              : 'from-astro-purple to-pink-500'
          } flex items-center justify-center p-0.5`}>
            <div className="h-full w-full rounded-full bg-astro-black/80 flex items-center justify-center">
              {activeAssistant === 'lyra' 
                ? <Brain className="h-5 w-5 text-white" />
                : <Sparkles className="h-5 w-5 text-white" />
              }
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gradient font-orbitron">
              {activeAssistant === 'lyra' ? 'Lyra' : 'Astra'}
            </h3>
            <p className="text-xs text-white/60 font-exo2">
              {activeAssistant === 'lyra' 
                ? 'Knowledge Navigator' 
                : 'Creative Companion'}
            </p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`${activeAssistant === 'lyra' ? 'text-astro-blue bg-astro-blue/10' : 'text-white/70'}`}
            onClick={() => setActiveAssistant('lyra')}
          >
            <Brain className="h-4 w-4 mr-1" />
            Lyra
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`${activeAssistant === 'astra' ? 'text-astro-purple bg-astro-purple/10' : 'text-white/70'}`}
            onClick={() => setActiveAssistant('astra')}
          >
            <Sparkles className="h-4 w-4 mr-1" />
            Astra
          </Button>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          )}
        </div>
      </div>
      
      {/* API Key Input if not set */}
      {!apiKeysSet && (
        <div className="p-4 bg-astro-blue/10 border-b border-white/10">
          <p className="text-sm text-white mb-2 font-exo2">Enter API keys to activate AI assistants:</p>
          <div className="space-y-2">
            <div className="flex flex-col">
              <label className="text-xs text-white/70 mb-1 font-exo2">Groq API Key (optional for Lyra)</label>
              <input 
                type="password" 
                value={groqApiKey} 
                onChange={(e) => setGroqApiKey(e.target.value)} 
                className="bg-astro-dark border border-white/10 rounded px-3 py-1 text-sm"
                placeholder="Enter Groq API key"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-white/70 mb-1 font-exo2">Gemini API Key (pre-filled for Astra)</label>
              <input 
                type="password" 
                value={geminiApiKey} 
                onChange={(e) => setGeminiApiKey(e.target.value)} 
                className="bg-astro-dark border border-white/10 rounded px-3 py-1 text-sm"
              />
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90 w-full"
              onClick={() => {
                aiService.setApiKeys(groqApiKey || '', geminiApiKey);
                setApiKeysSet(true);
                toast({
                  title: "API Keys Set",
                  description: "You can now chat with the AI assistants.",
                });
              }}
            >
              Save Keys & Activate
            </Button>
          </div>
        </div>
      )}
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] flex ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-2 ${message.role === 'user' ? 'space-x-reverse' : ''}`}>
              {message.role === 'assistant' && (
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarFallback className={`${message.assistantType === 'lyra' ? 'bg-astro-blue' : 'bg-astro-purple'} text-white`}>
                    {message.assistantType === 'lyra' ? 'L' : 'A'}
                  </AvatarFallback>
                </Avatar>
              )}
              
              <div 
                className={`rounded-lg p-3 ${
                  message.role === 'user' 
                    ? 'bg-astro-purple/20 text-white' 
                    : message.assistantType === 'lyra'
                      ? 'bg-astro-blue/20 text-white' 
                      : 'bg-astro-purple/20 text-white'
                } font-exo2`}
              >
                {message.content}
                <div className="text-xs opacity-50 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
              
              {message.role === 'user' && (
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarFallback className="bg-astro-dark text-white">
                    U
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className={`${activeAssistant === 'lyra' ? 'bg-astro-blue' : 'bg-astro-purple'} text-white`}>
                  {activeAssistant === 'lyra' ? 'L' : 'A'}
                </AvatarFallback>
              </Avatar>
              <div className="bg-astro-dark/50 rounded-lg p-4 flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce animation-delay-500"></div>
                <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce animation-delay-1000"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="p-4 border-t border-white/10">
        <div className="flex space-x-2">
          <Textarea 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={handleKeyPress}
            placeholder={`Ask ${activeAssistant === 'lyra' ? 'Lyra' : 'Astra'} anything...`}
            className="bg-astro-dark/50 border-white/10 resize-none font-exo2"
            rows={3}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={isLoading || !input.trim()}
            className={`self-end ${
              activeAssistant === 'lyra' 
                ? 'bg-astro-blue hover:bg-astro-blue/90' 
                : 'bg-astro-purple hover:bg-astro-purple/90'
            }`}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChatPanel;
