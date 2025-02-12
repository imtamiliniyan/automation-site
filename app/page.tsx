"use client";

import { ArrowRight, Workflow, Zap, GitMerge, Clock, Users, Bot, Brain, Sparkles, MessageSquare, Cog, Target, UserCheck } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: ""
  });

  // Handle hash change to show form when #contact is in URL
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        setShowForm(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check hash on initial load
    if (window.location.hash === '#contact') {
      setShowForm(true);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Store the form data in localStorage
      localStorage.setItem('contactFormData', JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString()
      }));

      // You could also send this data to your backend API here
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Redirect to Calendly
      window.location.href = "https://calendly.com/iniyanai/free-consultation-with-tamil";
    } catch (error) {
      console.error('Error saving form data:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Transforming Business Through
              <span className="text-primary block mt-2">No-Code Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Streamlining workflows and boosting productivity with Automation & AI Agents.
            </p>
            <Button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-opacity hover:opacity-90 focus:opacity-90 active:opacity-90"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>

            {showForm && (
              <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
                <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
                  <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                      <Label htmlFor="name" className="text-up">Name</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                      <Label htmlFor="email" className="text-up">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="grid grid-cols-[100px_1fr] items-start gap-4">
                      <Label htmlFor="projectDetails" className="text-up pt-2">Project Details</Label>
                      <Textarea
                        id="projectDetails"
                        required
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Tell us about your project"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex gap-4 mt-6 pl-[100px]">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1">
                        Schedule Call
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Workflow, label: "Automations Built", value: "150+" },
              { icon: Clock, label: "Hours Saved", value: "2,500+" },
              { icon: Users, label: "Happy Clients", value: "50+" },
              { icon: GitMerge, label: "Integrations", value: "200+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Automation Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">{project.platform}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="ai-agents" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">AI Agents & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiAgents.map((agent, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <agent.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{agent.title}</h3>
                <p className="text-muted-foreground mb-4">{agent.description}</p>
                <ul className="space-y-2">
                  {agent.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how automation can transform your workflows and save valuable time
          </p>
          <Button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg transition-opacity hover:opacity-90 focus:opacity-90 active:opacity-90"
          >
            Get Started <Zap className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}

const projects = [
  {
    title: "E-commerce Order Processing",
    description: "Automated order fulfillment system connecting Shopify with multiple shipping providers",
    platform: "Make.com",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
    tags: ["Shopify", "Order Management", "Shipping", "Notifications"],
  },
  {
    title: "Lead Management System",
    description: "Streamlined lead capture and qualification process with CRM integration",
    platform: "n8n.io",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    tags: ["CRM", "Lead Generation", "Email Marketing"],
  },
  {
    title: "HR Onboarding Automation",
    description: "End-to-end employee onboarding process with document management",
    platform: "Make.com",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
    tags: ["HR", "Document Management", "Workflow"],
  },
  {
    title: "Social Media Management",
    description: "Automated content scheduling and engagement tracking across platforms",
    platform: "n8n.io",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    tags: ["Social Media", "Analytics", "Content Management"],
  },
  {
    title: "Invoice Processing",
    description: "Automated invoice generation, approval, and payment tracking system",
    platform: "Make.com",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
    tags: ["Finance", "Accounting", "Workflow"],
  },
  {
    title: "Customer Support Automation",
    description: "Intelligent ticket routing and response system with AI integration",
    platform: "n8n.io",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    tags: ["Customer Support", "AI", "Workflow"],
  },
];

const aiAgents = [
  {
    icon: MessageSquare,
    title: "Customer Service Agent",
    description: "Intelligent virtual agents that handle customer inquiries and support requests 24/7",
    features: [
      "Natural language processing",
      "Multi-channel support",
      "Automated ticket routing",
      "Real-time response generation"
    ]
  },
  {
    icon: Cog,
    title: "Process Automation Agent",
    description: "Smart automation agents that streamline and optimize business workflows",
    features: [
      "Workflow optimization",
      "Task automation",
      "Process monitoring",
      "Performance analytics"
    ]
  },
  {
    icon: Target,
    title: "Marketing Automation Agent",
    description: "AI-powered marketing automation for personalized customer engagement",
    features: [
      "Campaign automation",
      "Audience segmentation",
      "Content personalization",
      "Performance tracking"
    ]
  },
  {
    icon: UserCheck,
    title: "Lead Qualifying Agent",
    description: "Intelligent lead scoring and qualification system",
    features: [
      "Lead scoring",
      "Qualification criteria",
      "Follow-up automation",
      "Integration with CRM"
    ]
  }
];