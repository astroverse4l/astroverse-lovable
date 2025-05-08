
import React from 'react';
import { Rocket, Cpu, Server, Shield } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';

const RetroTech = () => {
  return (
    <ProjectDetailTemplate
      title="RetroTech"
      subtitle="Cutting-edge technology solutions for modern challenges"
      description="RetroTech is pioneering the fusion of retro-inspired design with futuristic technology. Our solutions span quantum computing, AI development, and secure blockchain infrastructure, all wrapped in a nostalgic yet forward-thinking aesthetic."
      logo="/public/lovable-uploads/e7bedbc5-9dc9-4797-a6cd-5feb5319b5f0.png"
      coverImage="/public/lovable-uploads/c9cd2b0a-6a28-486d-9845-6491ffd2f47a.png"
      externalUrl="https://retro-tech-ast.vercel.app"
      icon={<Rocket className="h-8 w-8 text-white" />}
      features={[
        "Quantum Computational Systems that process complex algorithms at unprecedented speeds",
        "Specialized Neural Networks designed for specific industry applications and customizable for client needs",
        "RetroSafe™ Security Protocol implementing quantum-resistant encryption for future-proof data protection",
        "Edge Computing Solutions optimized for IoT devices and remote connectivity challenges",
        "Blockchain Infrastructure Service providing secure and scalable solutions for Web3 applications",
        "AI-Enhanced Development Tools that accelerate coding and debugging processes by up to 300%"
      ]}
      vision={[
        "Pioneer accessible quantum computing technology that transforms research capabilities across industries by 2030",
        "Develop neural interfaces that seamlessly blend human creativity with computational power",
        "Create the foundation for a post-scarcity economy through advanced automation and resource optimization",
        "Establish RetroTech as the cornerstone of secure, ethical AI development within the Astroverse ecosystem",
        "Build a global network of innovation hubs that democratize access to cutting-edge tech resources"
      ]}
      team={[
        { name: "Dr. Elara Chen", role: "Quantum Systems Director" },
        { name: "Marcus Wells", role: "Neural Architecture Lead" },
        { name: "Sonia Kapoor", role: "Security Protocol Developer" },
        { name: "Jaime Rodriguez", role: "Edge Computing Specialist" },
        { name: "Zara Williams", role: "Blockchain Infrastructure Engineer" },
        { name: "Leo Chang", role: "AI Research Coordinator" },
        { name: "Nia Johnson", role: "UX/UI Design Lead" },
        { name: "Alex Khouri", role: "Ethics & Compliance Officer" }
      ]}
      roadmap={[
        {
          year: "2024-2025",
          milestones: [
            "Launch RetroTech Quantum Sandbox for developers and researchers",
            "Release beta version of RetroSafe™ Security Protocol",
            "Establish the first RetroTech Innovation Hub in Singapore"
          ]
        },
        {
          year: "2026-2027",
          milestones: [
            "Scale quantum computing access through cloud-based interface",
            "Integrate neural networks with blockchain for decentralized AI operations",
            "Expand Innovation Hubs to 5 additional global locations"
          ]
        },
        {
          year: "2028-2030",
          milestones: [
            "Achieve quantum supremacy in practical applications across 10+ industries",
            "Pioneer neural interface prototypes for enhanced human-computer interaction",
            "Develop resource optimization AI for climate and sustainability challenges"
          ]
        }
      ]}
      stats={[
        { label: "Quantum Computations per Second", value: "10⁴²" },
        { label: "Neural Networks Deployed", value: "1,240+" },
        { label: "Security Protocols", value: "RetroSafe™" },
        { label: "Developer Community", value: "24,500" }
      ]}
    />
  );
};

export default RetroTech;
