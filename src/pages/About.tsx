import { Link } from "react-router-dom";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import teamImg from "@/assets/team.jpg";

const values = [
  { icon: Target, title: "Mission", description: "To empower Kenyan businesses with integrated technology and energy solutions that drive growth, security, and sustainability." },
  { icon: Eye, title: "Vision", description: "To be Kenya's most trusted partner for business technology and clean energy, transforming how companies operate and thrive." },
  { icon: Heart, title: "Values", description: "Integrity, innovation, reliability, and a deep commitment to customer success and Kenya's development." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">About Luminara</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Young, visionary, and deeply committed to Kenya's growth.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest text-accent">Our Story</span>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Born from a Simple Belief</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Luminara ICT & Power Solutions was founded on a simple conviction: every Kenyan business deserves access to reliable technology and clean energy, regardless of size or location.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We saw businesses struggling with unreliable internet, security gaps, and sky-high energy bills. So we built a company that tackles all three — under one roof, with one team you can trust.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From SME offices in Nairobi to schools in Central Kenya and farms beyond, we deliver solutions that just work — and keep working. That's the Luminara promise.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden card-shadow">
              <img src={teamImg} alt="Luminara team" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading tag="What Drives Us" title="Our Mission, Vision & Values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-6 card-shadow text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-4">Let's Build Together</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Whether you need internet, security, or solar — we're ready to be your technology partner.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
