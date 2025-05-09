
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Brain, Sparkles } from 'lucide-react';
import AIChatPanel from './AIChatPanel';

const AIAssistantPanel = () => {
  const [open, setOpen] = useState(false);
  const [activeAssistant, setActiveAssistant] = useState<'lyra' | 'astra'>('lyra');
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-4 z-40">
        {!open && (
          <>
            <Button
              className="rounded-full h-12 w-12 bg-gradient-to-r from-astro-blue to-cyan-400 hover:opacity-90 shadow-lg"
              onClick={() => {
                setActiveAssistant('lyra');
                setOpen(true);
              }}
            >
              <Brain className="h-6 w-6 text-white" />
              <span className="sr-only">Chat with Lyra</span>
            </Button>
            
            <Button 
              className="rounded-full h-12 w-12 bg-gradient-to-r from-astro-purple to-pink-500 hover:opacity-90 shadow-lg"
              onClick={() => {
                setActiveAssistant('astra');
                setOpen(true);
              }}
            >
              <Sparkles className="h-6 w-6 text-white" />
              <span className="sr-only">Chat with Astra</span>
            </Button>
          </>
        )}
      </div>
      <SheetContent className="sm:max-w-[500px] p-0 border-astro-dark bg-transparent">
        <AIChatPanel 
          defaultAssistant={activeAssistant} 
          onClose={() => setOpen(false)} 
        />
      </SheetContent>
    </Sheet>
  );
};

export default AIAssistantPanel;
