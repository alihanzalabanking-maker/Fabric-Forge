import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <Layout>
      <div className="bg-secondary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contact Us</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Get in touch with our team to discuss your manufacturing needs or schedule a factory visit.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Factory Headquarters</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    RM Apparels Manufacturing<br />
                    Industrial Estate, Sialkot<br />
                    Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Phone & WhatsApp</h3>
                  <p className="text-muted-foreground mb-2">+{WHATSAPP_NUMBER}</p>
                  <Button variant="outline" size="sm" onClick={() => openWhatsApp("Hi, I want to connect with RM Apparels.")}>
                    Message on WhatsApp
                  </Button>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Email</h3>
                  <p className="text-muted-foreground">sales@rmapparels.com</p>
                  <p className="text-muted-foreground">info@rmapparels.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM (PKT)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
            
            {isSent ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent</h4>
                <p className="text-muted-foreground">We'll get back to you shortly.</p>
                <Button variant="outline" className="mt-6" onClick={() => setIsSent(false)}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required placeholder="General Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required className="min-h-[150px]" placeholder="How can we help you?" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
}
