import React from "react";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export function WhatsAppFab() {
  return (
    <button
      onClick={() => openWhatsApp("Hi RM Apparels, I would like to inquire about manufacturing.")}
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-full mr-4 bg-foreground text-background px-3 py-1.5 rounded-md text-sm font-medium opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </button>
  );
}
