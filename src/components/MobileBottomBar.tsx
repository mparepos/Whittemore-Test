"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, X, CircleHelp, Headset } from "lucide-react";

const MobileBottomBar = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Contact options popover */}
      <div
        className={`flex flex-col items-start gap-2 pb-3 px-4 transition-all duration-300 ${
          contactOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="tel:978-681-8833"
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-accent text-accent-foreground shadow-lg transition-all hover:bg-accent/80 hover:shadow-xl active:scale-95"
          onClick={() => setContactOpen(false)}
        >
          <Phone className="w-5 h-5 shrink-0 text-accent-foreground" />
          <span className="font-display font-semibold text-sm">Call</span>
        </a>
        <a
          href="mailto:sales@whittemoreco.com"
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-accent text-accent-foreground shadow-lg transition-all hover:bg-accent/80 hover:shadow-xl active:scale-95"
          onClick={() => setContactOpen(false)}
        >
          <Mail className="w-5 h-5 shrink-0 text-accent-foreground" />
          <span className="font-display font-semibold text-sm">Sales Inquiries</span>
        </a>
        <a
          href="mailto:technical@whittemoreco.com"
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-accent text-accent-foreground shadow-lg transition-all hover:bg-accent/80 hover:shadow-xl active:scale-95"
          onClick={() => setContactOpen(false)}
        >
          <Mail className="w-5 h-5 shrink-0 text-accent-foreground" />
          <span className="font-display font-semibold text-sm">Technical Inquiries</span>
        </a>
      </div>

      {/* Quote button expand (mobile only) */}
      <div
        className={`lg:hidden flex justify-end pb-3 px-4 transition-all duration-300 ${
          quoteOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Link
          href="/contact"
          onClick={() => setQuoteOpen(false)}
          className="inline-flex flex-col items-start gap-0 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide active:scale-95 shadow-lg"
        >
          <span>Questions, Quotes or Samples</span>
          <span className="text-[10px] normal-case tracking-normal opacity-90 font-light">sales@whittemoreco.com</span>
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="bg-secondary/80 backdrop-blur-md border-t border-secondary-foreground/10 px-6 py-3 flex items-center justify-between safe-bottom">
        <button
          onClick={() => { setContactOpen(!contactOpen); setQuoteOpen(false); }}
          className="flex items-center gap-2 text-secondary-foreground active:scale-95 transition-transform"
          aria-label="Contact options"
        >
          {contactOpen ? (
            <X className="w-5 h-5 text-accent" />
          ) : (
            <Headset className="w-5 h-5 text-accent" />
          )}
          <span className="font-display font-semibold text-sm text-secondary-foreground">
            {contactOpen ? "Close" : "Contact Options"}
          </span>
        </button>

        {/* Mobile: question mark circle / Desktop: full quote button */}
        <div className="lg:hidden">
          <button
            onClick={() => { setQuoteOpen(!quoteOpen); setContactOpen(false); }}
            className="w-11 h-11 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            aria-label="Request a quote"
          >
            {quoteOpen ? (
              <X className="w-5 h-5 text-accent-foreground" />
            ) : (
              <CircleHelp className="w-6 h-6 text-accent-foreground" />
            )}
          </button>
        </div>
        <Link
          href="/contact"
          className="hidden lg:inline-flex flex-col items-start gap-0 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide"
        >
          <span>Questions, Quotes or Samples</span>
          <span className="text-[10px] normal-case tracking-normal opacity-90 font-light">sales@whittemoreco.com</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomBar;
