import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { FaInstagram, FaXTwitter, FaTiktok, FaFacebookF } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+254 710 852 527", href: "tel:+254710852527" },
  { icon: MessageCircle, label: "WhatsApp", value: "+254 710 852 527", href: "https://wa.me/254710852527" },
  { icon: Mail, label: "Email", value: "theluminaragroup@gmail.com", href: "mailto:theluminaragroup@gmail.com" },
  { icon: MapPin, label: "Location", value: "Serving Nairobi & Central Kenya", href: undefined },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 8am–6pm, Sat: 9am–1pm", href: undefined },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Ready to transform your business? Get in touch for a free consultation and site audit.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeading
                tag="Get Started"
                title="Request Your Free Audit"
                description="Fill in the form and our team will get back to you within 24 hours."
                align="left"
              />
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border card-shadow">
                <LeadCaptureForm />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading
                tag="Reach Us"
                title="Get in Touch"
                description="Prefer to talk directly? Here's how to reach us."
                align="left"
              />
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-card rounded-lg p-4 border border-border">
                    <div className="shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
                </div>

                {/* Socials */}
                <div className="flex items-center gap-3 mb-8">
                  {[
                    { icon: FaInstagram, href: "https://instagram.com/the_luminara_group", label: "Instagram" },
                    { icon: FaXTwitter, href: "https://x.com/the_luminara_group", label: "Twitter" },
                    { icon: FaTiktok, href: "https://tiktok.com/@the_luminara_group", label: "TikTok" },
                    { icon: FaFacebookF, href: "https://facebook.com/the_luminara_group", label: "Facebook" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden card-shadow border border-border h-64">
                <iframe
                  title="Luminara Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853731544!2d36.68218835!3d-1.302861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
