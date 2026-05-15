"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/DotPattern";
import FadeIn from "@/components/FadeIn";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    mineralInterest: "", requestType: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative pt-16 md:pt-28 pb-16 md:pb-24 bg-background overflow-hidden" aria-label="Request a Quote or Sample">
      <DotPattern className="top-8 right-0 text-accent" />

      <div className="container max-w-2xl relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-4">
              Request a Quote or Sample
            </h2>
            <p className="text-muted-foreground font-body text-[14px]">
              Let us match the right material to your application and send you a custom quote.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
        {submitted ? (
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-xl border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-foreground mb-3">Thank You for Your Message</h3>
            <p className="text-muted-foreground font-body text-base">
              Someone from our team will get back to you within 24 hours.
            </p>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-5 sm:p-8 md:p-10 shadow-xl border border-border space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-display font-bold text-foreground mb-1.5 block uppercase tracking-wide text-xs">First name *</label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-display font-bold text-foreground mb-1.5 block uppercase tracking-wide text-xs">Last name *</label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-display font-bold text-foreground mb-1.5 block uppercase tracking-wide text-xs">Email *</label>
              <input
                required
                type="email"
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-display font-bold text-foreground mb-1.5 block uppercase tracking-wide text-xs">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-display font-bold text-foreground mb-1.5 block uppercase tracking-wide text-xs">Mineral Interest *</label>
              <select
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
                value={formData.mineralInterest}
                onChange={(e) => setFormData({ ...formData, mineralInterest: e.target.value })}
              >
                <option value="">Select...</option>
                <option value="perlite">Perlite</option>
                <option value="vermiculite">Vermiculite</option>
                <option value="both">Both</option>
                <option value="custom">Custom Blend</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-display font-bold text-foreground mb-1.5 block uppercase tracking-wide text-xs">Request Type *</label>
              <select
                required
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow"
                value={formData.requestType}
                onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
              >
                <option value="">Select...</option>
                <option value="quote">Quote</option>
                <option value="sample">Sample</option>
                <option value="technical">Technical Info</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-display font-bold text-foreground mb-1.5 block uppercase tracking-wide text-xs">Message *</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none resize-none transition-shadow"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground font-display font-medium border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 py-3.5 uppercase tracking-wide">
            Submit Request
          </Button>
        </form>
        )}
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
