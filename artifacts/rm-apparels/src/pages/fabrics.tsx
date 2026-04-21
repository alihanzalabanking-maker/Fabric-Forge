import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Fabrics() {
  return (
    <Layout>
      <div className="bg-secondary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Fabric Technology</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            We source the best raw materials globally to meet your brand's specific requirements, balancing quality, durability, and cost.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Imported */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
              Premium Tier
            </div>
            <h2 className="text-3xl font-display font-bold">Imported Fabrics (China)</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our imported Chinese fabrics are renowned for their exceptional smooth finish, technical properties, and high-end feel. Ideal for premium brands looking for retail-ready perfection.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <span className="font-semibold block text-foreground">Ultra-Smooth Finish</span>
                  <span className="text-muted-foreground text-sm">Silky handfeel that mimics high-end retail brands.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <span className="font-semibold block text-foreground">Advanced Technical Properties</span>
                  <span className="text-muted-foreground text-sm">Better moisture-wicking, stretch recovery, and color retention.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <span className="font-semibold block text-foreground">Premium Positioning</span>
                  <span className="text-muted-foreground text-sm">Higher cost per unit, allowing for higher retail markups.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Local */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
              Value Tier
            </div>
            <h2 className="text-3xl font-display font-bold">Local Fabrics (Pakistan)</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Locally sourced Pakistani textiles offer unbeatable value without compromising on durability. Perfect for high-volume basics and robust athletic wear.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <span className="font-semibold block text-foreground">Extreme Durability</span>
                  <span className="text-muted-foreground text-sm">Heavyweight cottons and fleeces built to withstand heavy wear.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <span className="font-semibold block text-foreground">Cost-Effective</span>
                  <span className="text-muted-foreground text-sm">Lower material costs maximizing your profit margins on bulk orders.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <span className="font-semibold block text-foreground">Faster Turnaround</span>
                  <span className="text-muted-foreground text-sm">Locally available fabrics mean shorter lead times for production.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Sports & Performance Materials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Trinda", desc: "Classic shiny tracksuit material, available in various GSMs for durability." },
              { name: "Polyester Fleece", desc: "Warm, lightweight, and perfect for winter training gear." },
              { name: "Scuba", desc: "Smooth, structured fabric with excellent stretch, ideal for modern technical hoodies." },
              { name: "Nylon Crush", desc: "Textured, lightweight woven fabric for windbreakers and shell jackets." },
              { name: "Popcorn Spandex", desc: "Highly textured, extreme stretch fabric for tight-fitting performance wear." },
              { name: "Micro Twill", desc: "Durable woven polyester for coaches jackets and sideline gear." }
            ].map((fabric, i) => (
              <div key={i} className="p-6 bg-card border rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{fabric.name}</h3>
                <p className="text-sm text-muted-foreground">{fabric.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/quote">
            <Button size="lg" className="h-14 px-8 text-lg">Discuss Fabric Options for Your Brand</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
