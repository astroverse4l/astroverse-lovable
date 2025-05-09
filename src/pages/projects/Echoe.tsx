
import React from 'react';
import { Globe, Gamepad, Users, Code } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';

const Echoe = () => {
  // Create sections from vision data
  const sections = [
    {
      title: "Neural Interface Technology",
      content: "Our cutting-edge neural feedback system creates realistic sensory experiences that 92% of users describe as indistinguishable from reality."
    },
    {
      title: "Immersive Worlds",
      content: "Echoe-2077 environments continue to evolve even when players are offline, creating truly living digital ecosystems."
    },
    {
      title: "Social Experience",
      content: "Connect with others in ways that transcend traditional gaming, forming genuine relationships and shared experiences across our digital universe."
    }
  ];

  return (
    <ProjectDetailTemplate
      title="Echoe-2077"
      description="Immersive gaming experiences powered by advanced technology that combines cutting-edge neural interfaces with dynamic world-building."
      icon={<Globe className="h-8 w-8 text-white" />}
      coverImage="/public/lovable-uploads/912d57fb-fe1b-40c8-bc43-d6ca85898211.png"
      sections={sections}
      features={[
        "Neural Feedback System that creates realistic sensory experiences for players",
        "Procedurally generated worlds that evolve based on player interactions and choices",
        "Cross-platform multiplayer functionality allowing seamless integration across devices",
        "Advanced AI NPCs with realistic behavior patterns and evolving personalities",
        "Immersive storylines that adapt to player decisions creating unique gameplay experiences",
        "Blockchain-based in-game economy with real-world value exchange possibilities"
      ]}
    />
  );
};

export default Echoe;
