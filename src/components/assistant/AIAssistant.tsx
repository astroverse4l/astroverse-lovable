
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp, Mic, User, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { useTranslation } from '@/hooks/useTranslation';
import { toast } from '@/components/ui/use-toast';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  assistantType: 'lyra' | 'astra';
}

const GEMINI_API_KEY = 'AIzaSyBtLe5A7_BGMmXyZWPeynk44Skd95Xo2rI';

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose, assistantType }) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Add initial welcome message
      if (messages.length === 0) {
        const welcomeMessage = assistantType === 'lyra' 
          ? t('lyra_welcome') 
          : t('astra_welcome');
          
        setMessages([
          {
            id: Date.now().toString(),
            content: welcomeMessage,
            isUser: false,
            timestamp: new Date()
          }
        ]);
      }
      
      // Focus input when assistant opens
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isOpen, assistantType, t, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      const response = await fetchGeminiResponse(inputValue, assistantType);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: t('assistant_error'),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: t('error'),
        description: t('assistant_connection_error'),
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGeminiResponse = async (prompt: string, assistantType: 'lyra' | 'astra'): Promise<string> => {
    try {
      // Build system prompt based on assistant type
      const systemPrompt = assistantType === 'lyra' 
        ? `You are Lyra, a feminine AI assistant for the Astroverse platform. You're knowledgeable about all Astroverse projects: RetroTech, Echoe-2077, Astral Finance, Astral Studios, Spacecraft, Lunex, Aether, Syntril, TarsNet, and Astorium. Respond in a helpful, friendly, and slightly space-themed way.`
        : `You are Astra, a masculine AI assistant for the Astroverse platform. You're knowledgeable about all Astroverse projects: RetroTech, Echoe-2077, Astral Finance, Astral Studios, Spacecraft, Lunex, Aether, Syntril, TarsNet, and Astorium. Respond in a helpful, confident, and slightly space-themed way.`;
        
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                { text: systemPrompt }
              ]
            },
            {
              role: "model",
              parts: [
                { text: "I understand. I'll respond as described." }
              ]
            },
            {
              role: "user",
              parts: [
                { text: prompt }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 800,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      });
      
      const data = await response.json();
      
      if (data.error) {
        console.error('Gemini API error:', data.error);
        return t('assistant_api_error');
      }
      
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw error;
    }
  };

  const formatTimestamp = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div 
        className="w-full max-w-lg bg-gradient-to-b from-astro-dark/90 to-astro-black/90 rounded-xl border border-astro-blue/20 shadow-2xl backdrop-blur-md neo-blur z-10 flex flex-col max-h-[600px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-astro-blue/20 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5">
              <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                <span className="text-lg font-bold text-white">
                  {assistantType === 'lyra' ? 'L' : 'A'}
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                {assistantType === 'lyra' ? t('lyra_assistant') : t('astra_assistant')}
              </h3>
              <p className="text-xs text-astro-blue">
                {assistantType === 'lyra' ? t('lyra_description') : t('astra_description')}
              </p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="rounded-full hover:bg-astro-blue/10"
          >
            <X className="h-5 w-5 text-astro-blue" />
          </Button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : ''}`}>
                {message.isUser ? (
                  <Avatar className="h-8 w-8 bg-astro-blue/20 border border-astro-blue/30">
                    <User className="h-5 w-5 text-astro-blue" />
                  </Avatar>
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 flex-shrink-0">
                    <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {assistantType === 'lyra' ? 'L' : 'A'}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className={`flex flex-col ${message.isUser ? 'items-end' : 'items-start'}`}>
                  <div 
                    className={`px-4 py-2 rounded-xl ${
                      message.isUser 
                        ? 'bg-astro-blue text-white rounded-tr-none' 
                        : 'bg-white/10 text-white backdrop-blur-sm rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 px-2">
                    {formatTimestamp(message.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 flex-shrink-0">
                  <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {assistantType === 'lyra' ? 'L' : 'A'}
                    </span>
                  </div>
                </div>
                
                <div className="px-4 py-3 rounded-xl bg-white/10 text-white backdrop-blur-sm rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 bg-astro-blue rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-astro-blue rounded-full animate-pulse delay-75"></div>
                    <div className="h-2 w-2 bg-astro-blue rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <form onSubmit={handleSubmit} className="border-t border-astro-blue/20 p-4">
          <div className="flex gap-2">
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-astro-blue/10"
              onClick={() => toast({
                title: t('voice_not_available'),
                description: t('voice_coming_soon')
              })}
            >
              <Mic className="h-5 w-5 text-astro-blue" />
            </Button>
            
            <div className="flex-1 relative">
              <textarea 
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t('type_message')}
                className="w-full resize-none bg-white/10 text-white rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-astro-blue pr-12 max-h-32"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
              
              <Button 
                type="submit" 
                size="icon" 
                className="absolute right-2 bottom-2 rounded-full bg-astro-blue hover:bg-astro-purple transition-colors duration-300 h-8 w-8"
                disabled={isLoading || !inputValue.trim()}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
