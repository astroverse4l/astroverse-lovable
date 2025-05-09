
import React, { useState } from 'react';
import { Atom, Send, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  assistant?: 'lyra' | 'astra';
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: "Hello! I'm Lyra, your guide to the Astroverse. I can help you learn about our various projects and technologies. What would you like to know about?",
    sender: 'assistant',
    assistant: 'lyra',
    timestamp: new Date(),
  },
];

const AIAssistantPanel = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [activeAssistant, setActiveAssistant] = useState<'lyra' | 'astra'>('lyra');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const assistantResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getSimulatedResponse(input, activeAssistant),
        sender: 'assistant',
        assistant: activeAssistant,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantResponse]);
      setIsLoading(false);
    }, 1000);
    
    // TODO: Implement actual API call to Groq or Gemini here
    // In a real implementation, you would call an API here
  };
  
  const getSimulatedResponse = (question: string, assistant: 'lyra' | 'astra'): string => {
    const lowercaseQuestion = question.toLowerCase();
    
    if (assistant === 'lyra') {
      if (lowercaseQuestion.includes('retrotech') || lowercaseQuestion.includes('quantum')) {
        return "RetroTech is our quantum computing division. Their processors achieve computational speeds 200x faster than traditional systems, and their neural networks can adapt to new data patterns without retraining. By 2030, RetroTech aims to democratize quantum computing, making it accessible to researchers and businesses of all sizes.";
      } else if (lowercaseQuestion.includes('echoe') || lowercaseQuestion.includes('gaming') || lowercaseQuestion.includes('vr')) {
        return "Echoe-2077 is our cutting-edge gaming platform. Their neural feedback system creates sensations that 92% of users describe as 'indistinguishable from reality.' The virtual worlds continue to evolve even when players are offline, and the AI NPCs have passed modified Turing tests in controlled studies.";
      } else if (lowercaseQuestion.includes('finance') || lowercaseQuestion.includes('astral finance')) {
        return "Astral Finance provides next-generation financial tools and education. Users who complete our educational modules improve investment returns by an average of 32%. Our AI advisory system has outperformed traditional financial advisors in 7 consecutive quarters.";
      } else {
        return "I'd be happy to tell you more about any of our Astroverse projects. You can ask about RetroTech, Echoe-2077, Astral Finance, Astral Studios, Spacecraft, or any of our other initiatives.";
      }
    } else {
      if (lowercaseQuestion.includes('help') || lowercaseQuestion.includes('do')) {
        return "I'm Astra, specialized in technical details and deep analysis. I can provide in-depth explanations of our technologies, analyze market trends related to our projects, and help with complex technical questions. What specific area would you like me to explore?";
      } else if (lowercaseQuestion.includes('tech') || lowercaseQuestion.includes('technical')) {
        return "Our core technologies span quantum computing, neural interfaces, adaptive AI, decentralized systems, and programmable materials. Each project utilizes a unique combination of these technologies, integrated through our proprietary Quantum Neural Network architecture that enables unprecedented computational efficiency.";
      } else {
        return "I can provide deeper technical insights about any of our technologies. Would you like me to explain our quantum computing architecture, neural interface systems, or perhaps our approach to decentralized financial systems?";
      }
    }
  };
  
  const switchAssistant = () => {
    const newAssistant = activeAssistant === 'lyra' ? 'astra' : 'lyra';
    setActiveAssistant(newAssistant);
    
    const switchMessage: Message = {
      id: Date.now().toString(),
      text: newAssistant === 'lyra' 
        ? "Hi there! I'm Lyra, your friendly Astroverse guide. How can I help you today?" 
        : "Hello, I'm Astra. I specialize in technical details and deep analysis. How may I assist you?",
      sender: 'assistant',
      assistant: newAssistant,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, switchMessage]);
  };

  return (
    <>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button 
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90 shadow-lg flex items-center justify-center p-0"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[70vh] bg-astro-black text-white">
          <DrawerHeader>
            <DrawerTitle className="text-gradient font-orbitron">AI Assistants</DrawerTitle>
            <DrawerDescription className="text-white/70">
              Chat with Lyra and Astra, your AI guides to the Astroverse
            </DrawerDescription>
          </DrawerHeader>
          
          <div className="flex h-[calc(100%-200px)] flex-col px-4">
            <div className="flex justify-center mb-4 space-x-2">
              <Button
                variant={activeAssistant === 'lyra' ? 'default' : 'outline'}
                className={activeAssistant === 'lyra' ? 'bg-gradient-to-r from-astro-purple to-astro-blue' : 'border-white/20 text-white/70'}
                onClick={() => activeAssistant !== 'lyra' && switchAssistant()}
              >
                Lyra - Guide
              </Button>
              <Button
                variant={activeAssistant === 'astra' ? 'default' : 'outline'}
                className={activeAssistant === 'astra' ? 'bg-gradient-to-r from-astro-blue to-astro-cyan' : 'border-white/20 text-white/70'}
                onClick={() => activeAssistant !== 'astra' && switchAssistant()}
              >
                Astra - Technical Expert
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${
                    msg.sender === 'user' 
                      ? 'bg-astro-purple/20 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl' 
                      : msg.assistant === 'lyra'
                        ? 'bg-astro-purple/10 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl' 
                        : 'bg-astro-blue/10 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'
                  } p-4`}>
                    {msg.sender === 'assistant' && (
                      <div className="flex items-center mb-2">
                        <Avatar className="h-6 w-6 mr-2">
                          <AvatarFallback className={msg.assistant === 'lyra' ? 'bg-astro-purple text-white' : 'bg-astro-blue text-white'}>
                            {msg.assistant === 'lyra' ? 'L' : 'A'}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-bold text-sm">
                          {msg.assistant === 'lyra' ? 'Lyra' : 'Astra'}
                        </span>
                      </div>
                    )}
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`max-w-[80%] ${
                    activeAssistant === 'lyra'
                      ? 'bg-astro-purple/10 rounded-2xl' 
                      : 'bg-astro-blue/10 rounded-2xl'
                  } p-4`}>
                    <div className="flex items-center mb-2">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarFallback className={activeAssistant === 'lyra' ? 'bg-astro-purple text-white' : 'bg-astro-blue text-white'}>
                          {activeAssistant === 'lyra' ? 'L' : 'A'}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-bold text-sm">
                        {activeAssistant === 'lyra' ? 'Lyra' : 'Astra'}
                      </span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-white/70 animate-pulse"></div>
                      <div className="h-2 w-2 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 rounded-full bg-white/70 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2 mb-4">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Astroverse projects..."
                className="bg-astro-dark/50 border-white/10 focus:border-astro-blue"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className={`${
                  activeAssistant === 'lyra'
                    ? 'bg-gradient-to-r from-astro-purple to-astro-blue'
                    : 'bg-gradient-to-r from-astro-blue to-astro-cyan'
                } hover:opacity-90`}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="border-white/20 text-white/70">Close</Button>
            </DrawerClose>
            <p className="text-xs text-center text-white/50 mt-2">
              Powered by advanced AI models
            </p>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AIAssistantPanel;
