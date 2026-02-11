import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const SERVICE_LABELS: Record<string, string> = {
  ict: "ICT & Internet Solutions",
  security: "Security & Surveillance",
  solar: "Solar Power Solutions",
  multiple: "Multiple Services",
};

// Web3Forms access key (publishable — safe for client-side use)
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

const LeadCaptureForm = ({ variant = "default" }: { variant?: "default" | "hero" }) => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    const serviceLabel = SERVICE_LABELS[formData.service] || formData.service;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Lead: ${formData.name} — ${serviceLabel}`,
          from_name: "Luminara Website",
          name: formData.name,
          business: formData.business || "N/A",
          phone: formData.phone,
          email: formData.email || "N/A",
          service_interest: serviceLabel,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Thank you! We'll get back to you within 24 hours.");
        setFormData({ name: "", business: "", phone: "", email: "", service: "" });
      } else {
        toast.error("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      toast.error("Network error. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${isHero ? "max-w-md" : ""}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className={isHero ? "text-primary-foreground/80" : ""}>Name *</Label>
          <Input
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            maxLength={100}
            className={isHero ? "bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="business" className={isHero ? "text-primary-foreground/80" : ""}>Business Name</Label>
          <Input
            id="business"
            placeholder="Your business"
            value={formData.business}
            onChange={(e) => setFormData({ ...formData, business: e.target.value })}
            maxLength={100}
            className={isHero ? "bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="phone" className={isHero ? "text-primary-foreground/80" : ""}>Phone *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+254 7XX XXX XXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            maxLength={20}
            className={isHero ? "bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className={isHero ? "text-primary-foreground/80" : ""}>Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@business.co.ke"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            maxLength={255}
            className={isHero ? "bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="service" className={isHero ? "text-primary-foreground/80" : ""}>Service Interest *</Label>
        <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
          <SelectTrigger className={isHero ? "bg-background/10 border-background/20 text-primary-foreground" : ""}>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border z-50">
            <SelectItem value="ict">ICT & Internet Solutions</SelectItem>
            <SelectItem value="security">Security & Surveillance</SelectItem>
            <SelectItem value="solar">Solar Power Solutions</SelectItem>
            <SelectItem value="multiple">Multiple Services</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base"
      >
        {isSubmitting ? "Sending…" : "Get Your Free Site Audit & Quote"}
      </Button>
    </form>
  );
};

export default LeadCaptureForm;
