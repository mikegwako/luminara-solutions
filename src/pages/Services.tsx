import { Link } from "react-router-dom";
import { Wifi, Shield, Sun, CheckCircle, ArrowRight, Server, Lock, Camera, BatteryCharging, Radio, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import serviceIct from "@/assets/service-ict.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceSolar from "@/assets/service-solar.jpg";

const ictServices = [
  { icon: Wifi, title: "Fibre & Internet", desc: "High-speed fibre, WISP, and leased lines for uninterrupted connectivity." },
  { icon: Server, title: "Structured Cabling", desc: "Professional Cat6/6A cabling for offices, schools, and warehouses." },
  { icon: Radio, title: "Business Wi-Fi", desc: "Enterprise-grade Wi-Fi networks with Ubiquiti and Mikrotik solutions." },
  { icon: Lock, title: "Cybersecurity", desc: "Firewalls, endpoint protection, and security audits to keep threats out." },
];

const securityServices = [
  { icon: Camera, title: "CCTV Installation", desc: "Hikvision and Dahua HD cameras with remote viewing capabilities." },
  { icon: Eye, title: "Access Control", desc: "Biometric, card, and PIN-based access systems for secure premises." },
  { icon: Shield, title: "Alarm Systems", desc: "Intrusion detection, panic buttons, and 24/7 monitoring integration." },
];

const solarServices = [
  { icon: Sun, title: "Solar PV Design", desc: "Custom solar system sizing and engineering for your specific needs." },
  { icon: BatteryCharging, title: "Battery & Inverter", desc: "Hybrid inverters and lithium battery backup for zero-downtime power." },
  { icon: CheckCircle, title: "Energy Audits", desc: "Comprehensive energy consumption analysis to optimize your savings." },
];

const ServicePillar = ({
  id, title, tag, description, image, items, color, bgColor,
}: {
  id: string; title: string; tag: string; description: string; image: string;
  items: { icon: any; title: string; desc: string }[]; color: string; bgColor: string;
}) => (
  <section id={id} className="section-padding scroll-mt-20">
    <div className="container-narrow">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className={`inline-block mb-3 text-xs font-bold uppercase tracking-widest ${color}`}>{tag}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{description}</p>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className={`shrink-0 h-10 w-10 rounded-lg ${bgColor} flex items-center justify-center`}>
                  <item.icon className={`h-5 w-5 ${color}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-8 inline-block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="rounded-xl overflow-hidden card-shadow">
          <img src={image} alt={title} className="w-full h-80 object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Comprehensive ICT, security, and solar solutions designed for Kenyan businesses.
          </p>
        </div>
      </section>

      <ServicePillar
        id="ict"
        tag="Connectivity"
        title="ICT & Internet Solutions"
        description="Keep your business connected with enterprise-grade internet, networking, and cybersecurity solutions trusted by SMEs across Kenya."
        image={serviceIct}
        items={ictServices}
        color="text-primary"
        bgColor="bg-primary/10"
      />

      <div className="bg-muted">
        <ServicePillar
          id="security"
          tag="Protection"
          title="Security & Surveillance"
          description="Protect your premises with professional-grade CCTV, access control, and alarm systems installed by certified technicians."
          image={serviceSecurity}
          items={securityServices}
          color="text-accent"
          bgColor="bg-accent/10"
        />
      </div>

      <ServicePillar
        id="solar"
        tag="Clean Energy"
        title="Solar Power for Business"
        description="Reduce your electricity costs by up to 70% with custom-designed solar PV systems. We handle everything from design to installation and maintenance."
        image={serviceSolar}
        items={solarServices}
        color="text-secondary"
        bgColor="bg-secondary/10"
      />

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-4">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Every business is unique. Let's discuss your specific requirements and build the right solution together.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
              Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
