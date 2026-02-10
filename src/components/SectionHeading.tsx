interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ tag, title, description, align = "center" }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {tag && (
        <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest text-accent">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
