
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Atom, Brain, Sparkles } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import ExplosionEffect from '@/components/effects/ExplosionEffect';

interface AIAssistantProps {
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  fields: string[];
  icon: React.ReactNode;
  color: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({
  name,
  role,
  description,
  capabilities,
  fields,
  icon,
  color
}) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="astro-card p-8 h-full backdrop-blur-lg transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center mb-6">
          <div className={`h-16 w-16 rounded-full bg-gradient-to-r ${color} flex items-center justify-center p-0.5 mr-4 animate-float`}>
            <div className="h-full w-full rounded-full bg-astro-black/80 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gradient font-orbitron">{name}</h3>
            <p className="text-white/70 font-exo2">{role}</p>
          </div>
        </div>
        
        <p className="text-white/80 mb-6 font-exo2">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gradient mb-2 font-orbitron">Knowledge Fields</h4>
          <div className="flex flex-wrap gap-2">
            {fields.map((field, index) => (
              <span key={index} className="px-3 py-1 rounded-full bg-astro-blue/10 text-astro-blue text-xs font-exo2">
                {field}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gradient mb-2 font-orbitron">Capabilities</h4>
          <ul className="space-y-2 list-disc pl-5">
            {capabilities.map((capability, index) => (
              <li key={index} className="text-white/80 font-exo2">{capability}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8">
          <ExplosionEffect>
            <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90 w-full">
              Chat with {name}
            </Button>
          </ExplosionEffect>
        </div>
      </div>
    </div>
  );
};

const AIAssistantsSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative py-20 section-hidden"
      style={{
        marginTop: '-15vh',
        zIndex: 2,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/public/lovable-uploads/e186b35f-8cb4-4961-9222-3db32b7fa1c6.png')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-astro-black via-astro-black/70 to-astro-black"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 font-orbitron">
            {t('meet_lyra_astra')}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-exo2">
            Advanced AI assistants powered by cutting-edge language models from Groq and Google Gemini. Your personal guides through the Astroverse ecosystem.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap -mx-4">
          <AIAssistant
            name="Lyra"
            role="Knowledge Navigator"
            description="Lyra specializes in research, knowledge discovery, and complex problem solving. Powered by Groq's ultrafast LPU inference technology, Lyra provides instantaneous responses to even the most complex queries."
            capabilities={[
              "Real-time information retrieval and synthesis",
              "Advanced code generation and debugging",
              "Multi-modal content analysis and creation",
              "Personalized learning pathway generation"
            ]}
            fields={[
              "Science", "Technology", "Engineering", "Mathematics", "Finance", "Web3", "Data Analytics"
            ]}
            icon={<Brain className="h-8 w-8 text-white" />}
            color="from-astro-blue to-cyan-400"
          />
          
          <AIAssistant
            name="Astra"
            role="Creative Companion"
            description="Astra is your creative partner, specializing in content creation, design ideation, and artistic collaboration. Powered by Google's Gemini, Astra excels at understanding and generating visual, textual, and interactive content."
            capabilities={[
              "Multi-modal content creation (text, image, audio)",
              "Design assistance and feedback",
              "Storytelling and narrative development",
              "Interactive brainstorming and idea expansion"
            ]}
            fields={[
              "Art", "Design", "Creative Writing", "Music", "Marketing", "UX/UI", "Gaming"
            ]}
            icon={<Sparkles className="h-8 w-8 text-white" />}
            color="from-astro-purple to-pink-500"
          />
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 font-exo2">
            Our AI assistants are continually evolving, learning from interactions across the Astroverse ecosystem to provide increasingly personalized and valuable assistance.
          </p>
          <ExplosionEffect>
            <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
              <Atom className="mr-2 h-5 w-5" />
              Explore AI Capabilities
            </Button>
          </ExplosionEffect>
        </div>
      </div>
      
      {/* Overlap reveal effect for next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-astro-black to-transparent z-20"></div>
    </section>
  );
};

export default AIAssistantsSection;
