import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const posts = [
  {
    slug: "benefits-business-firewall-kenya",
    title: "5 Benefits of a Business Firewall in Kenya",
    excerpt: "Cyber threats are on the rise in East Africa. Here's why every Kenyan SME needs a professional firewall — and what to look for when choosing one.",
    category: "Cybersecurity",
    date: "Jan 15, 2026",
    readTime: "5 min",
  },
  {
    slug: "solar-power-slash-office-costs",
    title: "How Solar Power Can Slash Your Office Operating Costs",
    excerpt: "With Kenya Power tariffs climbing, solar PV is no longer a luxury — it's a smart investment. We break down the numbers for a typical Nairobi office.",
    category: "Solar",
    date: "Jan 8, 2026",
    readTime: "7 min",
  },
  {
    slug: "cctv-regulations-kenya",
    title: "CCTV Regulations for Businesses in Kenya",
    excerpt: "Before installing cameras, know your legal obligations. This guide covers Kenya's data protection laws and best practices for business surveillance.",
    category: "Security",
    date: "Dec 20, 2025",
    readTime: "6 min",
  },
];

const categoryColor: Record<string, string> = {
  Cybersecurity: "text-primary bg-primary/10",
  Solar: "text-secondary bg-secondary/10",
  Security: "text-accent bg-accent/10",
};

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Blog & Resources</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Expert insights on ICT, security, and solar for Kenyan businesses.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading tag="Latest Posts" title="Stay Informed" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group bg-card rounded-xl border border-border card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden">
                <div className="h-44 bg-muted flex items-center justify-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${categoryColor[post.category] || ""}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
