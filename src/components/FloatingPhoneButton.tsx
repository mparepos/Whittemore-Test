"use client";

import { useState } from "react";
import { Phone, MessageSquare, X } from "lucide-react";

const FloatingPhoneButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 lg:hidden flex flex-col items-center gap-3">
      {/* Options */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="tel:978-681-8833"
          className="flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl transition-shadow"
          onClick={() => setOpen(false)}
        >
          <Phone className="w-5 h-5 text-accent" />
          <span className="font-display font-semibold text-sm">Call</span>
        </a>
        <a
          href="sms:978-681-8833"
          className="flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl transition-shadow"
          onClick={() => setOpen(false)}
        >
          <MessageSquare className="w-5 h-5 text-accent" />
          <span className="font-display font-semibold text-sm">Text</span>
        </a>
      </div>

      {/* Main button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-background text-accent shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 active:scale-95 border border-border"
        aria-label="Contact options"
      >
        {open ? (
          <X className="w-6 h-6 transition-transform duration-200" />
        ) : (
          <Phone className="w-6 h-6 transition-transform duration-200" />
        )}
      </button>
    </div>
  );
};

export default FloatingPhoneButton;
