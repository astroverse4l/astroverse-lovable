
import React from 'react';
import { CreditCard, TrendingUp, BarChart, ShieldCheck } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';

const AstralFinance = () => {
  return (
    <ProjectDetailTemplate
      title="Astral Finance"
      subtitle="Next-generation financial education and tools"
      description="Astral Finance is revolutionizing the way people understand and interact with money through innovative educational resources and cutting-edge financial tools. Our platform combines advanced data analytics with intuitive design to empower users from all backgrounds."
      coverImage="/public/lovable-uploads/093a8651-c02b-44a0-8ece-ac3587ac90ec.png"
      icon={<CreditCard className="h-8 w-8 text-white" />}
      features={[
        "Personalized financial education pathways tailored to individual learning styles and goals",
        "AI-powered investment advisory that adapts to market conditions and personal risk tolerance",
        "Decentralized finance integration for access to global investment opportunities",
        "Real-time portfolio analytics with predictive modeling and scenario testing",
        "Community-driven financial literacy initiatives targeting underserved populations",
        "Quantum-secure transaction systems for next-level asset protection"
      ]}
      vision={[
        "Create a financial ecosystem where education and practical tools work in harmony to empower users",
        "Democratize access to sophisticated financial instruments for investors of all levels",
        "Develop AI systems that can predict market trends with unprecedented accuracy",
        "Establish new standards for financial transparency and security in digital transactions",
        "Build a global community of financially literate individuals who can navigate economic uncertainty"
      ]}
      team={[
        { name: "Dr. Olivia Chen", role: "Financial Systems Architect" },
        { name: "Marcus Wellington", role: "Educational Content Director" },
        { name: "Aisha Patel", role: "AI Analytics Lead" },
        { name: "Jordan Lee", role: "DeFi Integration Specialist" },
        { name: "Sofia Mendez", role: "Security Protocol Developer" },
        { name: "Kwame Osei", role: "Community Outreach Coordinator" },
        { name: "Natasha Ivanova", role: "Behavioral Economics Advisor" },
        { name: "David Park", role: "UI/UX Design Lead" }
      ]}
      roadmap={[
        {
          year: "2024-2025",
          milestones: [
            "Launch Astral Finance Academy with 50+ educational modules",
            "Release beta version of AI investment advisory system",
            "Establish partnerships with 20 global financial institutions"
          ]
        },
        {
          year: "2026-2027",
          milestones: [
            "Expand educational content to cover advanced financial concepts and niche markets",
            "Integrate comprehensive DeFi platform with traditional finance instruments",
            "Launch financial literacy programs in 100+ underserved communities globally"
          ]
        },
        {
          year: "2028-2030",
          milestones: [
            "Develop quantum-computing based market prediction systems",
            "Create unified global financial marketplace accessible to all users",
            "Establish Astral Finance as the leading standard for financial education and tools"
          ]
        }
      ]}
      stats={[
        { label: "Active Users", value: "3.8M+" },
        { label: "Educational Modules", value: "240+" },
        { label: "Success Rate", value: "94%" },
        { label: "Global Reach", value: "128 Countries" }
      ]}
    />
  );
};

export default AstralFinance;
