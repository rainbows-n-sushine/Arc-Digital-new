import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import {} from "lucide-react";


export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Team", href: "#team" },

];


export const services = [
  {
    icon: <BotMessageSquare />,
    text: "Social Media Marketing",
    description:
    "We help a business boost brand awareness and expand its customer base. we strive to create content that consumers will want to share with their social networks.",
  },
  {
    icon: <Fingerprint />,
    text: "Branding and Graphics Design",
    description:
     "Our Branding and Graphics Design service is aimed at helping businesses create a strong, recognizable, and appealing image that resonates with their target audience.",
  },
  {
    icon: <ShieldHalf />,
    text: "Web Design",
    description:
      "We offer our clients unique websites powered by the newest, most advanced technologies such as E-commerce solutions and other unique customization.",  
    },
  {
    icon: <BatteryCharging />,
    text: "SEO(Search Engine Optimization)",
    description:
      "Our SEO service is designed to increase the visibility of your website in search engine results, driving more organic traffic and improving your search rankings. We provide our clients with the best search engine optimization services available",
  },
  {
    icon: <PlugZap />,
    text: "Influencer Marketing",
    description:
      "Through strategic campaigns, we enable influencers to engage with their audience,providing them with valuable content and opportunities to interact with your brand.",
      },
  {
    icon: <GlobeLock />,
    text: "Strategic Consultancy",
    description:
      "Our Strategic Consultancy service provides businesses with a comprehensive view of their current situation and helps identify improvements, risks, and opportunities.",
  },
  {
    icon: <GlobeLock />,
    text: "Content Marketing",
    description:
      "Developing and executeing content strategies to attract, engage, and convert our target audience. Content creation, including blog posts, articles, infographics, and videos.Content distribution and promotion across various channels",
  },
];



export const contactLinks = [
  { href: "#", text: "LinkedIn" },
  { href: "#", text: "Upwork" },
  { href: "#", text: "WhatsApp" },
  { href: "#", text: "Facebook" },
  { href: "#", text: "Gmail" },

];



export const teamMembers = [
  {
    name: "Biruk Tesfaye",
    position: "CEO/Founder",
  },
  {
    name: "Dawit Desalegn",
    position: "COO(Chief Operating Officer)",
  },
  {
    name: "Girum Teshale",
    position: "CFO(Chief Financial Officer)",
  },
  {
    name: "Liya Zewde",
    position: "Project Manager",
  },
  {
    name: "Dinku Tadele",
    position: "Account Manager",
  }
  // Add more...
];