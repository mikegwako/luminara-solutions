import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, ShieldCheck, Sun, CheckCircle, ArrowRight, Star, Users, Wrench, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import heroBg from "@/assets/hero-bg.jpg";
import serviceIct from "@/assets/service-ict.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceSolar from "@/assets/service-solar.jpg";

const services = [
  {
    icon: Wifi,
    title: "ICT & Connectivity",
    description: "Reliable fibre, Wi-Fi, and cybersecurity solutions that keep your business connected and protected 24/7.",
    image: serviceIct,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Security & Surveillance",
    description: "Professional CCTV, access control, and alarm systems that give you complete peace of mind over your premises.",
    image: serviceSecurity,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Sun,
    title: "Solar Power Solutions",
    description: "Custom solar PV design & installation that slashes your energy costs and reduces grid dependence for good.",
    image: serviceSolar,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const whyChooseUs = [
  { icon: Users, title: "Local Kenyan Experts", description: "Deep understanding of local business needs and regulations." },
  { icon: Wrench, title: "End-to-End Solutions", description: "From consultation and design to installation and maintenance." },
  { icon: Award, title: "Quality Products", description: "Trusted brands: Hikvision, Ubiquiti, Huawei, Luminous." },
  { icon: Star, title: "After-Sales Support", description: "Ongoing maintenance contracts and rapid response times." },
];

const testimonials = [
  { name: "James Mwangi", role: "MD, Horizon Logistics", text: "Luminara transformed our office with reliable internet and a top-notch CCTV system. Downtime is a thing of the past." },
  { name: "Grace Wanjiku", role: "Principal, Greenfield Academy", text: "The solar installation has cut our electricity bill by 60%. The team was professional from start to finish." },
  { name: "Peter Ochieng", role: "Farm Manager, AgroVista", text: "From Wi-Fi across our farm to security cameras at every gate — Luminara delivered it all in one go." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Luminara hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <div className="relative container-narrow px-4 md:px-8 py-20">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent bg-accent/20 rounded-full">
              Trusted by 100+ Kenyan Businesses
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-background leading-[1.1] mb-6">
              Empowering Your Business in Kenya
            </h1>
            <p className="text-lg md:text-xl text-background/80 leading-relaxed mb-8 max-w-lg">
              Reliable Internet. Unbreachable Security. Clean Solar Power. 
              <span className="block mt-2 font-medium text-background/90">One Partner. Total Peace of Mind.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-8 hero-shadow">
                  Get Your Free Site Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+254710852527">
                <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 font-semibold text-base px-8">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading
            tag="Our Services"
            title="Integrated Solutions for Modern Business"
            description="We deliver end-to-end ICT, security, and solar solutions tailored for Kenyan SMEs, schools, and agribusinesses."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl overflow-hidden bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${service.bgColor} mb-4`}>
                    <service.icon className={`h-5 w-5 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className={`text-sm font-semibold ${service.color} inline-flex items-center gap-1 hover:gap-2 transition-all`}
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading
            tag="Why Luminara"
            title="Your Trusted Technology Partner"
            description="We're not just vendors — we're your long-term technology partners committed to Kenya's growth."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 card-shadow">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading
            tag="Testimonials"
            title="What Our Clients Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Lead Capture */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get a free site audit and customized quote — no obligation. Let's build the future of your business together.
          </p>
          <div className="max-w-lg mx-auto bg-card rounded-xl p-6 md:p-8 card-shadow">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
