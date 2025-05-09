
import React from 'react';
import { Rocket, Cpu, Server, Shield } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';

const RetroTech = () => {
  // Create sections from vision data
  const sections = [
    {
      title: "Quantum Computing",
      content: "Our quantum processors achieve computational speeds 200x faster than traditional systems, enabling breakthrough research in fields previously limited by computing power."
    },
    {
      title: "Neural Network Architecture",
      content: "RetroTech neural networks can adapt to new data patterns without retraining, representing a significant advancement in machine learning efficiency."
    },
    {
      title: "Security Protocols",
      content: "Our RetroSafe™ security protocol implements quantum-resistant encryption that has never been breached in independent testing."
    }
  ];

  return (
    <ProjectDetailTemplate
      title="RetroTech"
      description="Cutting-edge technology solutions for modern challenges, pioneering the fusion of retro-inspired design with futuristic technology."
      logo="/public/lovable-uploads/e7bedbc5-9dc9-4797-a6cd-5feb5319b5f0.png"
      coverImage="/public/lovable-uploads/c9cd2b0a-6a28-486d-9845-6491ffd2f47a.png"
      externalUrl="https://retro-tech-ast.vercel.app"
      icon={<Rocket className="h-8 w-8 text-white" />}
      sections={sections}
      features={[
        "Quantum Computational Systems that process complex algorithms at unprecedented speeds",
        "Specialized Neural Networks designed for specific industry applications and customizable for client needs",
        "RetroSafe™ Security Protocol implementing quantum-resistant encryption for future-proof data protection",
        "Edge Computing Solutions optimized for IoT devices and remote connectivity challenges",
        "Blockchain Infrastructure Service providing secure and scalable solutions for Web3 applications",
        "AI-Enhanced Development Tools that accelerate coding and debugging processes by up to 300%"
      ]}
    />
  );
};

export default RetroTech;
