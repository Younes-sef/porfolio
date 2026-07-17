const skills = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"];

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
      <p className="reveal font-mono text-[13px] text-accent mb-5">
        {"// software engineer"}
      </p>
      <h1 className="reveal font-display text-[2.5rem] leading-[1.08] md:text-6xl font-semibold tracking-tight max-w-2xl">
        I build fast, reliable products end to end.
      </h1>
      <p
        className="reveal mt-6 text-[17px] leading-relaxed text-muted max-w-xl"
        style={{ animationDelay: "80ms" }}
      >
        I&apos;m Alex, a full-stack engineer who likes turning ambiguous
        problems into shipped software. Below are a few things I&apos;ve
        built recently.
      </p>

      <div
        className="reveal mt-8 flex flex-wrap gap-2"
        style={{ animationDelay: "140ms" }}
      >
        {skills.map((s) => (
          <span
            key={s}
            className="font-mono text-[12px] px-2.5 py-1 rounded-md border border-line text-muted bg-card"
          >
            &lt;{s}/&gt;
          </span>
        ))}
      </div>

      <div
        className="reveal mt-10 flex items-center gap-4"
        style={{ animationDelay: "200ms" }}
      >
        <a
          href="#work"
          className="inline-flex items-center rounded-md bg-ink text-paper px-4 py-2.5 text-[14px] font-medium hover:bg-accent transition-colors"
        >
          View work
        </a>
        <a
          href="#contact"
          className="inline-flex items-center text-[14px] font-medium text-ink hover:text-accent transition-colors"
        >
          Get in touch →
        </a>
      </div>
    </section>
  );
}
