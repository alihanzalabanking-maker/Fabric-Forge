import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function Collections() {
  const categories = [
    {
      id: 'summer',
      title: 'Summer Collection',
      description: 'Lightweight, breathable fabrics designed for heat and mobility. Featuring premium cottons and technical dry-fits.',
      image: '/terry-shorts.png'
    },
    {
      id: 'winter',
      title: 'Winter Collection',
      description: 'Heavyweight insulation, premium fleece, and weather-resistant outer shells built for the cold.',
      image: '/hoodie.png'
    },
    {
      id: 'sports',
      title: 'Sports & Performance',
      description: 'Technical tracksuits and moisture-wicking activewear engineered for professional athletes.',
      image: '/sports-tracksuit.png'
    }
  ];

  return (
    <Layout>
      <div className="bg-secondary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Collections</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Explore our manufacturing capabilities across different seasonal and performance categories.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/collections/${cat.id}`} className="group block">
              <div className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-2xl font-display font-bold mb-3">{cat.title}</h2>
                  <p className="text-muted-foreground mb-6 flex-1">{cat.description}</p>
                  <span className="inline-flex items-center text-primary font-semibold group-hover:underline">
                    View Catalog <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
