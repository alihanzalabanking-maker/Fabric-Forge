import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Select Product & Specs",
      desc: "Browse our catalog to select your base styles. Determine your quantity (minimum 30 pieces per style/color) and target price point."
    },
    {
      num: "02",
      title: "Choose Fabric",
      desc: "Based on your requirements, we'll recommend the ideal fabric—whether it's premium imported Chinese textiles or durable local Pakistani options."
    },
    {
      num: "03",
      title: "Customize & Brand",
      desc: "Provide your logos, tech packs, or reference images. We handle screen printing, embroidery, custom tags, and bespoke packaging to make it yours."
    },
    {
      num: "04",
      title: "Sampling & Approval",
      desc: "Before mass production, we create a physical sample. Once you review and approve the fit, fabric, and finish, we proceed to bulk."
    },
    {
      num: "05",
      title: "Bulk Production",
      desc: "Our factory floors go to work. We maintain strict quality control throughout the cutting, sewing, and finishing processes."
    },
    {
      num: "06",
      title: "Delivery",
      desc: "Finished goods are carefully packed and shipped via fast, reliable logistics partners directly to your warehouse or doorstep."
    }
  ];

  return (
    <Layout>
      <div className="bg-secondary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How We Work</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            A streamlined manufacturing process designed for brand owners. From concept to delivery, we make bulk production seamless.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
                <div className="flex-shrink-0 font-display text-5xl md:text-7xl font-bold text-muted/50 group-hover:text-primary transition-colors duration-500">
                  {step.num}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-primary rounded-3xl text-center text-primary-foreground">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to start step one?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">Our team is ready to review your requirements and provide a detailed quotation.</p>
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg">Start Your Order</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
