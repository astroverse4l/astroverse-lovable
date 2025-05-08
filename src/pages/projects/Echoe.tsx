
import React from 'react';
import { Globe, Gamepad, Users, Code } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';

const Echoe = () => {
  return (
    <ProjectDetailTemplate
      title="Echoe-2077"
      subtitle="Immersive gaming experiences powered by advanced technology"
      description="Echoe-2077 is a revolutionary gaming platform that combines cutting-edge technology with immersive storytelling. Our virtual reality environments create experiences that blur the line between reality and fiction, allowing players to fully immerse themselves in new worlds."
      coverImage="/public/lovable-uploads/912d57fb-fe1b-40c8-bc43-d6ca85898211.png"
      icon={<Globe className="h-8 w-8 text-white" />}
      features={[
        "Neural Feedback System that creates realistic sensory experiences for players",
        "Procedurally generated worlds that evolve based on player interactions and choices",
        "Cross-platform multiplayer functionality allowing seamless integration across devices",
        "Advanced AI NPCs with realistic behavior patterns and evolving personalities",
        "Immersive storylines that adapt to player decisions creating unique gameplay experiences",
        "Blockchain-based in-game economy with real-world value exchange possibilities"
      ]}
      vision={[
        "Create gaming experiences that blur the lines between virtual and physical reality",
        "Develop a global gaming community built on shared experiences and collaborative storytelling",
        "Pioneer neural interface gaming technology that responds to player emotions and thoughts",
        "Establish new standards for immersive storytelling in interactive entertainment",
        "Build a platform where players can monetize their in-game achievements and creations"
      ]}
      team={[
        { name: "Kira Nakamura", role: "Creative Director" },
        { name: "Devon Clarke", role: "Lead Game Designer" },
        { name: "Maya Rodriguez", role: "Neural Interface Specialist" },
        { name: "Li Wei", role: "World Building Architect" },
        { name: "Sam Jackson", role: "AI Behavior Systems" },
        { name: "Elena Petrov", role: "Narrative Designer" },
        { name: "Omar Farouk", role: "Blockchain Integration Lead" },
        { name: "Taylor Kim", role: "Community Experience Manager" }
      ]}
      roadmap={[
        {
          year: "2024-2025",
          milestones: [
            "Launch Echoe-2077 base platform with three inaugural game worlds",
            "Release beta version of Neural Feedback System for early adopters",
            "Establish global gaming tournaments with substantial prize pools"
          ]
        },
        {
          year: "2026-2027",
          milestones: [
            "Expand to ten unique game worlds with interconnected storylines",
            "Launch Echoe Marketplace for player-created content and assets",
            "Integrate full blockchain economy with real-world value exchange"
          ]
        },
        {
          year: "2028-2030",
          milestones: [
            "Release next-generation neural interface technology for enhanced immersion",
            "Create the first fully persistent virtual world with real-world economic impact",
            "Pioneer seamless transition between physical and digital realities in gameplay"
          ]
        }
      ]}
      stats={[
        { label: "Active Players", value: "2.5M+" },
        { label: "Virtual Worlds", value: "7" },
        { label: "Daily Transactions", value: "14M" },
        { label: "Community Size", value: "8.3M" }
      ]}
    />
  );
};

export default Echoe;
