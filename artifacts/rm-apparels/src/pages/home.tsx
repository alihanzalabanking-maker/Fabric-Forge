import React from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Clothing Manufacturing Factory" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-32 md:py-48 flex flex-col items-start">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Premium Manufacturing Partner
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white max-w-3xl leading-tight tracking-tight mb-6">
            Precision Apparel.<br />
            <span className="text-primary">Engineered in Bulk.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            High-end clothing manufacturing for international brands. Low MOQs, premium imported & local fabrics, and rapid production cycles. Built for performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/collections">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold group">
                Explore Catalog
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-white/20 text-white hover:bg-white/10" onClick={() => openWhatsApp("Hi, I want to discuss a bulk order.")}>
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Brands Choose Us</h2>
            <p className="text-muted-foreground text-lg">We bridge the gap between premium quality and accessible manufacturing, giving emerging and established brands a competitive edge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle2, title: "Low MOQ (30 Pcs)", desc: "Start small, scale fast. We support emerging brands with accessible minimums per design/color." },
              { icon: Factory, title: "Fabric Variety", desc: "Choose from premium imported Chinese fabrics or cost-effective local Pakistani textiles." },
              { icon: ShieldCheck, title: "Custom Branding", desc: "Full white-label service: custom tags, embroidery, screen printing, and packaging." },
              { icon: Zap, title: "Fast Production", desc: "Streamlined processes mean shorter lead times from sampling to final delivery." }
            ].map((prop, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <prop.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Production Categories</h2>
              <p className="text-muted-foreground text-lg">Browse our manufacturing capabilities.</p>
            </div>
            <Link href="/collections" className="hidden md:flex items-center text-primary font-semibold hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'sports', name: 'Sports Wear', img: '/sports-tracksuit.png', desc: 'Technical fabrics, dry-fit mesh, high mobility.' },
              { id: 'winter', name: 'Winter Collection', img: '/hoodie.png', desc: 'Heavyweight fleece, puffers, layered warmth.' },
              { id: 'summer', name: 'Summer Collection', img: '/terry-shorts.png', desc: 'Breathable cottons, lightweight terry, casual fits.' }
            ].map((cat) => (
              <Link key={cat.id} href={`/collections/${cat.id}`} className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-card flex flex-col border shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="relative z-20 mt-auto p-8 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{cat.name}</h3>
                  <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{cat.desc}</p>
                  <span className="inline-flex items-center text-primary font-semibold">
                    View Catalog <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/collections">
              <Button variant="outline" className="w-full">View All Categories</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Ready to elevate your brand's apparel line?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get a detailed quote within 24 hours. Share your tech packs, reference images, or general ideas to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                Request a Quote
              </Button>
            </Link>
            <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto bg-black text-white hover:bg-black/80" onClick={() => openWhatsApp("Hi, I want to start production.")}>
              WhatsApp Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
