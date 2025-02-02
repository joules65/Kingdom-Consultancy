import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">Contact Us</h2>
          <p className="text-lg text-gray-600">Ready to transform your business? Get in touch with our expert team.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+250 788 123 456</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">contact@kingdomconsultancy.rw</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">KN 5 Road, Kigali Heights<br />Kigali, Rwanda</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};