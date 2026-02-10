import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import projectSolar from "@/assets/project-solar.jpg";
import projectCctv from "@/assets/project-cctv.jpg";
import projectNetwork from "@/assets/project-network.jpg";

const projects = [
  {
    image: projectSolar,
    title: "Greenfield Academy — 20kW Solar Installation",
    category: "Solar Power",
    challenge: "The school faced monthly electricity bills exceeding KES 150,000, straining their operating budget.",
    solution: "We designed and installed a 20kW solar PV system with battery backup, cutting their bill by 60% and providing power during outages.",
  },
  {
    image: projectCctv,
    title: "Horizon Logistics — 32-Camera CCTV Network",
    category: "Security",
    challenge: "The warehouse complex had blind spots and no centralized monitoring, leading to recurring theft.",
    solution: "We deployed 32 Hikvision IP cameras with a dedicated control room, NVR storage, and remote mobile access for the MD.",
  },
  {
    image: projectNetwork,
    title: "AgroVista Farm — Enterprise Wi-Fi & Network",
    category: "ICT",
    challenge: "A 50-acre farm with no reliable internet, hindering operations and communication between field and office.",
    solution: "We installed a Ubiquiti point-to-point link and mesh Wi-Fi covering the entire farm, plus structured cabling for the main office.",
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Our Projects</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Real solutions for real Kenyan businesses. See the impact of our work.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading tag="Portfolio" title="Featured Installations" />
          <div className="space-y-16">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 !== 0 ? "lg:direction-rtl" : ""}`}
              >
                <div className={`rounded-xl overflow-hidden card-shadow ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <img src={project.image} alt={project.title} className="w-full h-72 object-cover" loading="lazy" />
                </div>
                <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                  <span className="inline-block mb-2 text-xs font-bold uppercase tracking-widest text-accent">{project.category}</span>
                  <h3 className="text-2xl font-extrabold text-foreground mb-4">{project.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-bold text-foreground">Challenge:</span>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-foreground">Solution:</span>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-4">Want Similar Results?</h2>
          <p className="text-primary-foreground/80 mb-6">Let us design the perfect solution for your business.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
              Get Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
