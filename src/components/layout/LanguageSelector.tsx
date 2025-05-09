
import React, { useState } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'it', name: 'Italiano' },
    { code: 'ru', name: 'Русский' },
    { code: 'zh', name: '中文' },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center space-x-2 text-white hover:text-primary transition-colors">
          <Globe className="h-5 w-5" />
          <span className="text-sm hidden sm:inline">
            {languages.find(lang => lang.code === language)?.name || 'English'}
          </span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2 neo-blur border-white/10">
        <div className="space-y-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center justify-between w-full px-3 py-2 text-sm text-white hover:bg-white/5 rounded-md transition-colors"
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
            >
              <span>{lang.name}</span>
              {language === lang.code && <Check className="h-4 w-4 text-primary" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
