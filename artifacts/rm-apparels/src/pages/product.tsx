import React from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Check, Ruler, Factory, Package, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProductBySlug } from "@/data/products";
import { openWhatsApp } from "@/lib/whatsapp";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Product Not Found</h1>
          <Link href="/collections">
            <Button>View Collections</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleWhatsApp = () => {
    openWhatsApp(`Hi RM Apparels, I am interested in manufacturing ${product.name} in bulk. Can we discuss pricing and specs?`);
  };

  return (
    <Layout>
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/collections" className="hover:text-foreground transition-colors">Collections</Link>
            <span className="mx-2">/</span>
            <Link href={`/collections/${product.category}`} className="hover:text-foreground transition-colors capitalize">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted border">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Thumbnail grid could go here if we had multiple images */}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <Badge variant="outline" className="w-fit mb-4 bg-primary/5 text-primary border-primary/20">
              MOQ: {product.moq} Pieces
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              {product.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="space-y-8 mb-10 flex-1">
              {/* Fabric Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 border-b pb-2">
                  <Factory className="h-5 w-5 text-primary" /> Fabric Options
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.fabricOptions.map((fabric, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-lg border bg-card">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{fabric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GSM Options */}
              {product.gsmOptions && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 border-b pb-2">
                    <Ruler className="h-5 w-5 text-primary" /> Available GSM Weights
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.gsmOptions.map((gsm, i) => (
                      <Badge key={i} variant="secondary" className="px-4 py-2 text-sm">
                        {gsm} GSM
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Customization Note */}
              <div className="p-4 rounded-xl bg-muted/50 border border-border/50 text-sm text-muted-foreground flex gap-3">
                <Package className="h-5 w-5 text-primary shrink-0" />
                <p>Fully customizable. Add your brand labels, custom embroidery, screen printing, and bespoke packaging.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
              <Button size="lg" className="flex-1 h-14 text-lg font-semibold" onClick={handleWhatsApp}>
                WhatsApp Now
              </Button>
              <Link href={`/quote?product=${product.slug}`} className="flex-1">
                <Button size="lg" variant="outline" className="w-full h-14 text-lg font-semibold">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
