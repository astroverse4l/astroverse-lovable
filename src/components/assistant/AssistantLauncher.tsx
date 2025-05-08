
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, UserRound } from 'lucide-react';
import AIAssistant from './AIAssistant';
import { useTranslation } from '@/hooks/useTranslation';

const AssistantLauncher = () => {
  const { t } = useTranslation();
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantType, setAssistantType] = useState<'lyra' | 'astra'>('lyra');

  const openAssistant = (type: 'lyra' | 'astra') => {
    setAssistantType(type);
    setAssistantOpen(true);
  };

  return (
    <>
      <div className="fixed right-6 bottom-6 z-40 flex flex-col space-y-2">
        <Button
          size="icon"
          className="h-12 w-12 rounded-full bg-gradient-to-r from-astro-cyan to-astro-blue hover:opacity-90 text-white shadow-lg shadow-astro-blue/20 border border-white/10"
          onClick={() => openAssistant('astra')}
          title={t('astra_assistant')}
        >
          <UserRound className="h-6 w-6" />
        </Button>
        
        <Button
          size="icon"
          className="h-12 w-12 rounded-full bg-gradient-to-r from-astro-purple to-astro-violet hover:opacity-90 text-white shadow-lg shadow-astro-purple/20 border border-white/10"
          onClick={() => openAssistant('lyra')}
          title={t('lyra_assistant')}
        >
          <User className="h-6 w-6" />
        </Button>
      </div>

      <AIAssistant
        isOpen={assistantOpen}
        onClose={() => setAssistantOpen(false)}
        assistantType={assistantType}
      />
    </>
  );
};

export default AssistantLauncher;
