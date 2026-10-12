import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero page-shell">
      <div className="hero-copy">
        <span className="eyebrow">LEARN MONEY. BUILD JUDGEMENT.</span>
        <h1>Personal finance that finally feels learnable.</h1>
        <p className="lead">Short lessons, practical examples, multi-question quizzes and an AI tutor interface built around understanding the “why”.</p>
        <div className="button-row">
          <Link href="/learn" className="button primary">Start learning</Link>
          <Link href="/dashboard" className="button secondary">Open dashboard</Link>
        </div>
        <div className="mini-stats">
          <div><strong>6</strong><span>tracks</span></div>
          <div><strong>60</strong><span>sub-modules</span></div>
          <div><strong>3+</strong><span>questions per lesson</span></div>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-card-top"><span>Recommended start</span><span className="pill">Money Basics</span></div>
        <h3>Income vs Expenses</h3>
        <p>Understand the first equation behind every budget: what comes in, what goes out, and what remains.</p>
        <div className="fake-chart"><div className="bar b1"/><div className="bar b2"/><div className="bar b3"/><div className="bar b4"/><div className="bar b5"/></div>
        <div className="hero-card-footer"><span>3 quiz questions</span><span>+50 XP</span></div>
      </div>
    </section>
  );
}
