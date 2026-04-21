import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFab } from "../WhatsAppFab";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
