
import React from 'react';
import { CreditCard, TrendingUp, BarChart, ShieldCheck } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';

const AstralFinance = () => {
  // Create sections from vision data
  const sections = [
    {
      title: "Financial Education",
      content: "Astral Finance revolutionizes financial education through personalized learning pathways and interactive content that adapts to your knowledge level and goals."
    },
    {
      title: "Investment Tools",
      content: "Our AI-powered investment tools analyze market trends and provide recommendations tailored to your risk profile and financial objectives."
    },
    {
      title: "Global Accessibility",
      content: "We're committed to making sophisticated financial instruments accessible to everyone, regardless of their background or experience level."
    }
  ];

  return (
    <ProjectDetailTemplate
      title="Astral Finance"
      description="Next-generation financial education and tools designed to democratize wealth creation through innovative educational resources and cutting-edge financial tools."
      icon={<CreditCard className="h-8 w-8 text-white" />}
      coverImage="/public/lovable-uploads/093a8651-c02b-44a0-8ece-ac3587ac90ec.png"
      sections={sections}
      features={[
        "Personalized financial education pathways tailored to individual learning styles and goals",
        "AI-powered investment advisory that adapts to market conditions and personal risk tolerance",
        "Decentralized finance integration for access to global investment opportunities",
        "Real-time portfolio analytics with predictive modeling and scenario testing",
        "Community-driven financial literacy initiatives targeting underserved populations",
        "Quantum-secure transaction systems for next-level asset protection"
      ]}
    />
  );
};

export default AstralFinance;
