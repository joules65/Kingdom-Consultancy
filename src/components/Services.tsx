import { LineChart, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Business Strategy",
    description: "Develop winning strategies to outperform in your market through data-driven insights and proven methodologies.",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Operational Excellence",
    description: "Streamline processes and enhance efficiency with our comprehensive operational optimization framework.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Innovation Consulting",
    description: "Transform ideas into market-leading solutions with our innovation acceleration program.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive solutions tailored to elevate your business performance</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>
              <CardHeader className="relative">
                <div className="absolute -top-8 left-6 bg-white p-3 rounded-lg shadow-md">
                  <service.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};