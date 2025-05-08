// This file will be used to create placeholder components for the remaining project pages
// We'll import this in each project page to keep the code DRY

import { Layers, Triangle, Star, Atom, Satellite, Rocket } from 'lucide-react';

export const AstralStudiosProps = {
  title: "Astral Studios",
  subtitle: "3D design and architectural visualization services",
  description: "Astral Studios pushes the boundaries of spatial design through advanced 3D modeling, rendering, and visualization technologies. Our interdisciplinary team combines artistic vision with technical expertise to create breathtaking digital environments and architectural concepts.",
  coverImage: "/public/lovable-uploads/0081bfec-f662-43e2-a11c-7dd04c52474e.png",
  icon: Layers,
  features: [
    "Real-time rendering engine that simulates physics with zero latency",
    "Virtual reality architectural walkthroughs for immersive client presentations",
    "Digital twin technology for precise real-world environment replication",
    "AI-assisted design systems that optimize for both aesthetics and functionality",
    "Collaborative design platforms enabling real-time multi-user editing",
    "Advanced material simulation for accurate representation of textures and surfaces"
  ],
  vision: [
    "Pioneer new ways of experiencing and interacting with designed spaces before they're built",
    "Bridge the gap between imagination and visualization through intuitive design tools",
    "Create digital environments that evoke emotional responses equivalent to physical spaces",
    "Establish new paradigms for collaborative design across distributed teams",
    "Develop systems where AI and human creativity work in perfect harmony"
  ],
  team: [
    { name: "Isabella Chen", role: "Creative Director" },
    { name: "Raj Patel", role: "Lead 3D Modeler" },
    { name: "Emma Rodriguez", role: "Architectural Visualization Specialist" },
    { name: "Tyler Washington", role: "Physics Engine Developer" },
    { name: "Mia Tanaka", role: "UI/UX Experience Designer" },
    { name: "Carlos Mendez", role: "Material Simulation Engineer" },
    { name: "Leila Karim", role: "VR Integration Specialist" },
    { name: "Ben Foster", role: "Client Relations Manager" }
  ],
  roadmap: [
    {
      year: "2024-2025",
      milestones: [
        "Launch next-generation rendering engine with physically accurate lighting",
        "Develop collaborative editing platform for distributed design teams",
        "Release Astral ViewPort for immersive architectural presentations"
      ]
    },
    {
      year: "2026-2027",
      milestones: [
        "Introduce AI-assisted design tools that learn from user preferences",
        "Expand material library to include over 10,000 accurately simulated surfaces",
        "Create seamless VR/AR integration for real-time space modification"
      ]
    },
    {
      year: "2028-2030",
      milestones: [
        "Pioneer sensory feedback systems for texture and environmental factors",
        "Develop city-scale digital twins with real-time data integration",
        "Establish new industry standards for architectural visualization and design"
      ]
    }
  ],
  stats: [
    { label: "Projects Completed", value: "1,450+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Render Quality", value: "12K Ultra" },
    { label: "Design Awards", value: "86" }
  ]
};

export const SpacecraftProps = {
  title: "Spacecraft",
  subtitle: "Futuristic fashion inspired by cosmic aesthetics",
  description: "Spacecraft merges cutting-edge textile technology with space-inspired design to create wearable art that transcends traditional fashion boundaries. Our adaptive fabrics and innovative manufacturing processes result in garments that respond to the wearer and their environment.",
  coverImage: "/public/lovable-uploads/8521ca11-d929-479f-aba7-92cb28897432.png",
  icon: Triangle,
  features: [
    "Adaptive fabrics that respond to environmental conditions and wearer preferences",
    "Programmable color-changing textiles using microscale light-reflecting elements",
    "Bio-responsive materials that enhance comfort and performance based on body data",
    "Solar charging capabilities integrated seamlessly into aesthetic design elements",
    "Digital twin technology allowing virtual try-on and customization before production",
    "Blockchain-verified sustainable supply chain for complete transparency"
  ],
  vision: [
    "Revolutionize the concept of clothing as a static element to dynamic, responsive wearable technology",
    "Pioneer manufacturing processes that eliminate waste and environmental impact",
    "Create fashion that adapts to individual needs while maintaining aesthetic excellence",
    "Establish new paradigms for the intersection of technology and personal expression",
    "Develop clothing that serves functional purposes beyond traditional expectations"
  ],
  team: [
    { name: "Zara Chen", role: "Creative Director" },
    { name: "Julian Walters", role: "Textile Technology Lead" },
    { name: "Nia Johnson", role: "Sustainable Manufacturing Head" },
    { name: "Gabriel Santos", role: "Wearable Tech Engineer" },
    { name: "Leila Kim", role: "Fashion Designer" },
    { name: "David Okafor", role: "Material Scientist" },
    { name: "Sophie Wilson", role: "Digital Experience Designer" },
    { name: "Marco Rossi", role: "Supply Chain Director" }
  ],
  roadmap: [
    {
      year: "2024-2025",
      milestones: [
        "Launch first collection of adaptive fabric garments",
        "Establish direct-to-consumer platform with digital twin try-on",
        "Open flagship experiential store in Neo Tokyo"
      ]
    },
    {
      year: "2026-2027",
      milestones: [
        "Introduce programmable color-changing clothing line",
        "Develop next-generation bio-responsive fabrics",
        "Expand to major fashion capitals with experiential retail concepts"
      ]
    },
    {
      year: "2028-2030",
      milestones: [
        "Pioneer fully customizable garments that adapt throughout the day",
        "Launch Spacecraft Labs for open innovation in wearable technology",
        "Achieve carbon-negative manufacturing across entire product line"
      ]
    }
  ],
  stats: [
    { label: "Material Technologies", value: "17" },
    { label: "Customers", value: "250K+" },
    { label: "Sustainability Score", value: "94/100" },
    { label: "Patents Filed", value: "72" }
  ]
};

export const LunexProps = {
  title: "Lunex",
  subtitle: "Secure cryptocurrency wallet and exchange services",
  description: "Lunex offers institutional-grade security with consumer-friendly interfaces for cryptocurrency management. Our platform provides seamless trading, staking, and portfolio management while maintaining absolute control over private keys and digital assets.",
  coverImage: "/public/lovable-uploads/64deced2-a936-4cd3-b3b7-fe15ecb1e467.png",
  logo: "/public/lovable-uploads/570f303b-d79c-4529-a73a-39e849d88dc4.png",
  icon: Star,
  features: [
    "Military-grade encryption and multi-signature security for all user assets",
    "Decentralized exchange with deep liquidity pools across multiple blockchains",
    "Fiat on/off ramps with banking integration in over 100 countries",
    "Advanced portfolio analytics with AI-powered investment suggestions",
    "Simplified staking and yield farming with automated optimization",
    "Cold storage solutions with biometric recovery options"
  ],
  vision: [
    "Create the most secure yet accessible platform for cryptocurrency management",
    "Bridge traditional finance and decentralized ecosystems seamlessly",
    "Democratize access to financial opportunities regardless of geography",
    "Pioneer new security standards that protect users without compromising convenience",
    "Develop interfaces that make complex crypto operations intuitive for all users"
  ],
  team: [
    { name: "Alexandra Kim", role: "Security Architecture Lead" },
    { name: "Mikhail Petrov", role: "Blockchain Integration Specialist" },
    { name: "Jamal Williams", role: "UI/UX Director" },
    { name: "Dr. Liu Wei", role: "Cryptography Researcher" },
    { name: "Sofia Garcia", role: "Compliance Officer" },
    { name: "Thomas Chen", role: "Exchange Operations Manager" },
    { name: "Priya Sharma", role: "Mobile Experience Lead" },
    { name: "Nathan Lee", role: "Customer Success Director" }
  ],
  roadmap: [
    {
      year: "2024-2025",
      milestones: [
        "Launch Lunex Vault for institutional-grade cold storage",
        "Expand fiat on/off ramps to cover 85% of global GDP",
        "Introduce cross-chain liquidity aggregation"
      ]
    },
    {
      year: "2026-2027",
      milestones: [
        "Develop AI-powered trading assistant with market insights",
        "Integrate with traditional banking infrastructure",
        "Launch Lunex Card for everyday crypto transactions"
      ]
    },
    {
      year: "2028-2030",
      milestones: [
        "Pioneer quantum-resistant security protocols",
        "Create unified interface for all financial assets (traditional and crypto)",
        "Establish Lunex as the global standard for digital asset management"
      ]
    }
  ],
  stats: [
    { label: "Active Users", value: "4.2M+" },
    { label: "Trading Volume", value: "$9.8B Daily" },
    { label: "Security Rating", value: "AAA+" },
    { label: "Supported Assets", value: "350+" }
  ]
};

export const AetherProps = {
  title: "Aether",
  subtitle: "Advanced cryptocurrency management system",
  description: "Aether is a next-generation cryptocurrency wallet designed for maximum security and usability. Built on quantum-resistant cryptography with intuitive interfaces, Aether makes managing digital assets simple while providing institutional-grade protection.",
  coverImage: "/public/lovable-uploads/064deced2-a936-4cd3-b3b7-fe15ecb1e467.png",
  icon: Atom,
  features: [
    "Quantum-resistant encryption protecting against future computational threats",
    "Biometric multi-factor authentication with behavioral analysis",
    "Seamless multi-chain support for all major blockchain ecosystems",
    "Social recovery system with trusted guardian network",
    "Hardware security module integration for enterprise-grade protection",
    "Intuitive portfolio visualization and management tools"
  ],
  vision: [
    "Create the most secure yet user-friendly system for digital asset management",
    "Develop cryptographic standards that will remain secure in the post-quantum era",
    "Build interfaces that make complex crypto operations accessible to everyone",
    "Establish new paradigms for digital identity and authentication",
    "Protect users' financial sovereignty through cutting-edge security"
  ],
  team: [
    { name: "Dr. Nathan Park", role: "Cryptography Director" },
    { name: "Elena Rodriguez", role: "Product Design Lead" },
    { name: "Hiroshi Tanaka", role: "Security Engineer" },
    { name: "Maya Johnson", role: "Blockchain Architect" },
    { name: "Raj Patel", role: "UX Research Lead" },
    { name: "Sarah Kim", role: "Mobile Development Director" },
    { name: "Omar Hassan", role: "Hardware Security Specialist" },
    { name: "Zoe Williams", role: "Customer Success Manager" }
  ],
  roadmap: [
    {
      year: "2024-2025",
      milestones: [
        "Release Aether Core wallet with quantum-resistant security",
        "Launch social recovery system for foolproof backup solutions",
        "Integrate with top 25 blockchains by market capitalization"
      ]
    },
    {
      year: "2026-2027",
      milestones: [
        "Introduce Aether Card hardware wallet with biometric verification",
        "Develop secure DeFi interface with risk assessment tools",
        "Expand business solutions for institutional clients"
      ]
    },
    {
      year: "2028-2030",
      milestones: [
        "Pioneer decentralized identity system built on Aether security protocols",
        "Create unified digital asset management framework for all value types",
        "Establish Aether security protocols as industry standard"
      ]
    }
  ],
  stats: [
    { label: "User Base", value: "3.7M+" },
    { label: "Assets Protected", value: "$14.2B" },
    { label: "Blockchains Supported", value: "37" },
    { label: "Security Rating", value: "10/10" }
  ]
};

export const SyntrilProps = {
  title: "Syntril",
  subtitle: "Global connectivity solutions with innovative eSIM technology",
  description: "Syntril revolutionizes global connectivity through advanced eSIM technology and satellite integration. Our platform provides seamless internet access anywhere on the planet with innovative pricing models that make global connectivity affordable for everyone.",
  coverImage: "/public/lovable-uploads/b0f8e6a2-414c-49c9-b973-11e3f6c93df5.png",
  logo: "/public/lovable-uploads/176de78f-b8be-402e-b1cf-72707a84b25a.png",
  icon: Satellite,
  features: [
    "Instant activation eSIM profiles for 195+ countries and territories",
    "Satellite connectivity fallback in remote and underserved regions",
    "AI bandwidth optimization reducing data usage without compromising quality",
    "Secure encrypted connections with built-in VPN functionality",
    "Dynamic pricing model that automatically selects the most cost-effective service",
    "Multi-device synchronization across all connected hardware"
  ],
  vision: [
    "Create a world where connectivity is universal, affordable, and reliable",
    "Eliminate roaming charges and complex telecommunications contracts",
    "Provide internet access to previously underserved communities worldwide",
    "Develop infrastructure that adapts to user needs and local conditions",
    "Build technology that makes global telecommunications simple and transparent"
  ],
  team: [
    { name: "Dr. Sarah Chen", role: "Telecommunications Director" },
    { name: "Miguel Rodriguez", role: "Satellite Systems Engineer" },
    { name: "Aisha Okonkwo", role: "eSIM Technology Lead" },
    { name: "David Kim", role: "Global Partnerships Manager" },
    { name: "Elena Petrov", role: "AI Optimization Specialist" },
    { name: "Jun Wei", role: "Security Architecture Lead" },
    { name: "Sophia Williams", role: "User Experience Director" },
    { name: "Omar Al-Farsi", role: "Regional Deployment Coordinator" }
  ],
  roadmap: [
    {
      year: "2024-2025",
      milestones: [
        "Expand eSIM coverage to 200+ countries and territories",
        "Launch low-orbit satellite connectivity in remote regions",
        "Introduce Syntril Connect app with automated travel profiles"
      ]
    },
    {
      year: "2026-2027",
      milestones: [
        "Deploy AI bandwidth optimization technology for all connections",
        "Establish direct partnerships with 50+ global carriers",
        "Launch Syntril for Business with enterprise management tools"
      ]
    },
    {
      year: "2028-2030",
      milestones: [
        "Achieve 99.9% global connectivity coverage including oceans and polar regions",
        "Pioneer new telecommunication protocols for improved efficiency",
        "Create unified global communication standard with Syntril technology"
      ]
    }
  ],
  stats: [
    { label: "Countries Covered", value: "195+" },
    { label: "Active Connections", value: "12.4M" },
    { label: "Data Transferred", value: "147 PB Monthly" },
    { label: "Satellite Network", value: "86 Nodes" }
  ]
};

export const TarsNetProps = {
  title: "TarsNet",
  subtitle: "High-speed connectivity services for the digital age",
  description: "TarsNet delivers next-generation connectivity through a revolutionary combination of ground-based infrastructure and low-orbit satellites. Our technology provides lightning-fast internet with minimal latency anywhere on Earth, enabling new possibilities for remote work, gaming, and IoT applications.",
  coverImage: "/public/lovable-uploads/071bde78-c428-4001-a95e-b9ec132f9119.png",
  logo: "/public/lovable-uploads/f2adb176-2cca-441e-855f-ffab4caf920f.png",
  icon: Satellite,
  features: [
    "Sub-20ms latency through optimized routing and low-orbit satellite constellation",
    "Edge computing integration for local processing of time-sensitive applications",
    "Adaptive bandwidth allocation prioritizing critical services automatically",
    "Mesh network infrastructure with self-healing capabilities in case of outages",
    "Military-grade encryption and privacy through quantum key distribution",
    "Seamless handoff between satellite and ground-based infrastructure"
  ],
  vision: [
    "Create a global network with zero perceptible latency for all applications",
    "Enable new classes of applications that were previously impossible due to connectivity limitations",
    "Bring high-speed internet to every region on Earth regardless of infrastructure challenges",
    "Develop networks that intelligently adapt to user needs and environmental conditions",
    "Establish new standards for connectivity security and reliability"
  ],
  team: [
    { name: "Dr. Jason Chen", role: "Network Architecture Lead" },
    { name: "Maria Rodriguez", role: "Satellite Systems Director" },
    { name: "Kwame Osei", role: "Edge Computing Specialist" },
    { name: "Sophia Petrov", role: "Security Protocol Engineer" },
    { name: "Hiroshi Tanaka", role: "Ground Infrastructure Manager" },
    { name: "Aisha Williams", role: "IoT Integration Lead" },
    { name: "David Singh", role: "User Experience Designer" },
    { name: "Elena Kim", role: "Business Development Director" }
  ],
  roadmap: [
    {
      year: "2024-2025",
      milestones: [
        "Launch initial constellation of 120 low-orbit satellites",
        "Deploy edge computing nodes in 50 major metropolitan areas",
        "Introduce TarsNet Gaming service with <10ms global latency"
      ]
    },
    {
      year: "2026-2027",
      milestones: [
        "Expand satellite constellation to achieve global coverage",
        "Implement quantum encryption across entire network infrastructure",
        "Launch TarsNet Enterprise with dedicated bandwidth guarantees"
      ]
    },
    {
      year: "2028-2030",
      milestones: [
        "Achieve sub-5ms latency globally through next-generation infrastructure",
        "Pioneer direct neural interface connectivity for instantaneous communication",
        "Establish TarsNet as the backbone for global AR/VR applications"
      ]
    }
  ],
  stats: [
    { label: "Global Coverage", value: "97.4%" },
    { label: "Average Latency", value: "18ms" },
    { label: "Active Connections", value: "8.6M" },
    { label: "Data Centers", value: "214" }
  ]
};

export const AstoriumProps = {
  title: "Astorium",
  subtitle: "The cryptocurrency powering the Astroverse ecosystem",
  description: "Astorium is the native digital currency of the Astroverse ecosystem, facilitating seamless value exchange across all platform services. Built on a unique consensus mechanism that combines security, scalability, and energy efficiency, Astorium enables microtransactions, governance, and rewards across the entire ecosystem.",
  coverImage: "/public/lovable-uploads/e77a0b26-350e-47c6-85f3-0be2da5f2593.png",
  logo: "/public/lovable-uploads/54c19d36-37f1-4702-b358-e73b4df0f8b9.png",
  icon: Rocket,
  features: [
    "Asynchronous Byzantine Fault Tolerance consensus mechanism for security and efficiency",
    "Cross-chain operability with all major blockchain ecosystems through atomic swaps",
    "Zero-knowledge proof transactions for optional privacy and compliance",
    "Quantum-resistant cryptography future-proofed against advanced computational attacks",
    "Tiered transaction validation prioritizing ecosystem operations",
    "Governance model balancing decentralization with operational efficiency"
  ],
  vision: [
    "Create a unified economic layer connecting all Astroverse services and platforms",
    "Establish a new standard for digital currency focused on utility and user experience",
    "Develop financial infrastructure that scales with global adoption without compromising security",
    "Pioneer governance mechanisms that evolve with community participation",
    "Build economic systems that fairly distribute value to all ecosystem participants"
  ],
  team: [
    { name: "Dr. Marcus Wei", role: "Cryptography Director" },
    { name: "Elena Johnson", role: "Consensus Mechanism Architect" },
    { name: "Jamal Osei", role: "Token Economics Lead" },
    { name: "Dr. Sophia Chen", role: "Security Protocols Engineer" },
    { name: "Diego Rodriguez", role: "Cross-chain Integration Specialist" },
    { name: "Aisha Patel", role: "Governance Systems Developer" },
    { name: "Thomas Kim", role: "Ecosystem Partnership Manager" },
    { name: "Leila Nakamura", role: "Regulatory Compliance Officer" }
  ],
  roadmap: [
    {
      year: "2024-2025",
      milestones: [
        "Launch Astorium mainnet with initial ecosystem integrations",
        "Establish liquidity pools on major exchanges and DEXs",
        "Implement cross-chain bridges to Ethereum, Solana, and Polkadot"
      ]
    },
    {
      year: "2026-2027",
      milestones: [
        "Upgrade to next-generation consensus mechanism with improved throughput",
        "Introduce zero-knowledge transactions for private operations",
        "Launch Astorium Governance Portal for decentralized decision-making"
      ]
    },
    {
      year: "2028-2030",
      milestones: [
        "Implement quantum-resistant cryptography across all protocol layers",
        "Achieve complete ecosystem integration with all Astroverse platforms",
        "Establish Astorium as a global standard for digital value exchange"
      ]
    }
  ],
  stats: [
    { label: "Market Cap", value: "$1.8B" },
    { label: "Daily Transactions", value: "4.2M+" },
    { label: "Validator Nodes", value: "1,240" },
    { label: "Holders", value: "580K+" }
  ]
};
