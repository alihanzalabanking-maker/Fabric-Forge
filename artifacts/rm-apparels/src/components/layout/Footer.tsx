import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-secondary-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <span className="font-display font-bold text-2xl tracking-tight text-primary mb-4 block">RM APPARELS</span>
            </Link>
            <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
              Premium clothing manufacturing based in Pakistan. Supplying top-tier apparel for international and local brands with precision and speed.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Categories</h4>
            <ul className="space-y-3">
              <li><Link href="/collections/summer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Summer Collection</Link></li>
              <li><Link href="/collections/winter" className="text-muted-foreground hover:text-primary transition-colors text-sm">Winter Collection</Link></li>
              <li><Link href="/collections/sports" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sports Wear</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/fabrics" className="text-muted-foreground hover:text-primary transition-colors text-sm">Fabric Technology</Link></li>
              <li><Link href="/process" className="text-muted-foreground hover:text-primary transition-colors text-sm">Manufacturing Process</Link></li>
              <li><Link href="/quote" className="text-muted-foreground hover:text-primary transition-colors text-sm">Request Quote</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Industrial Area, Sialkot, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+{WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>sales@rmapparels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-border/50 text-center md:flex md:justify-between md:text-left text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RM Apparels. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
