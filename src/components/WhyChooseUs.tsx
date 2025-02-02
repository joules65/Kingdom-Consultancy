import { Check } from "lucide-react";

const reasons = [
  "15+ years of industry expertise",
  "Tailored solutions for SMEs",
  "Proven track record of success",
  "Dedicated support team",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Why Choose Kingdom Consultancy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div 
                key={reason} 
                className="flex items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <Check className="h-6 w-6 text-secondary flex-shrink-0" />
                </div>
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};