import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Workflow, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Automation Portfolio | No-Code Solutions',
  description: 'Professional automation solutions using Make.com and n8n.io',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2 font-semibold text-xl">
                <Workflow className="w-6 h-6" />
                <span>AutomationPro</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="hover:text-primary transition-colors">Home</a>
                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors">
                    AI Agents <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <a href="#customer-service">Customer Service Agent</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#process-automation">Process Automation Agent</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#marketing-automation">Marketing Automation Agent</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#lead-qualifying">Lead Qualifying Agent</a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </div>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-card py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 font-semibold text-xl mb-4">
                  <Workflow className="w-6 h-6" />
                  <span>AutomationPro</span>
                </div>
                <p className="text-muted-foreground">
                  Transforming businesses through intelligent automation solutions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
                  <a href="#ai-agents" className="text-muted-foreground hover:text-primary transition-colors">AI Agents</a>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="flex flex-col gap-2">
                  <a href="https://linkedin.com/in/imtamiliniyan" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                  <a href="https://facebook.com/imtamiliniyan" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
                  <a href="mailto:tamil@iniyan.pro" className="text-muted-foreground hover:text-primary transition-colors">Email</a>
                </div>
              </div>
            </div>
            <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
              © {new Date().getFullYear()} AutomationPro. Tamil Iniyan. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
