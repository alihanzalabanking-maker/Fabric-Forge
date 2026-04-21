import React from "react";
import { Link, useParams } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProductsByCategory, Category } from "@/data/products";

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  
  if (!category || !['summer', 'winter', 'sports'].includes(category)) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Category Not Found</h1>
          <Link href="/collections">
            <Button>Back to Collections</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const products = getProductsByCategory(category as Category);
  const titles: Record<Category, string> = {
    summer: "Summer Collection",
    winter: "Winter Collection",
    sports: "Sports & Performance"
  };

  return (
    <Layout>
      <div className="bg-secondary py-16 px-4">
        <div className="container mx-auto">
          <Link href="/collections" className="inline-flex items-center text-secondary-foreground/60 hover:text-white mb-6 text-sm transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Collections
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 capitalize">{titles[category as Category]}</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl">
            Showing {products.length} products available for bulk manufacturing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group block">
              <div className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">MOQ: {product.moq} Pcs</div>
                  <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">{product.shortDescription}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-foreground">
                    View Details <ArrowRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
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
