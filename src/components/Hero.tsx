import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-32">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Professional workspace"
          className="w-full h-full object-cover opacity-15 mix-blend-overlay"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-up space-y-8">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Transform Your <span className="text-accent">Business</span> Potential
          </h1>
          <p className="text-xl mb-8 text-gray-100 leading-relaxed">
            Kingdom Consultancy partners with SMEs to unlock growth, optimize operations, and achieve sustainable success through proven strategies and dedicated expertise.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};