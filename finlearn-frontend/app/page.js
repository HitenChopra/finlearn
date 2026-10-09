import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero page-shell">
      <div className="hero-copy">
        <span className="eyebrow">LEARN MONEY. BUILD CONFIDENCE.</span>
        <h1>Personal finance that finally feels learnable.</h1>
        <p className="lead">
          Short lessons, quick quizzes, progress tracking, and an AI tutor
          interface designed to help you understand the “why”, not just memorize definitions.
        </p>

        <div className="button-row">
          <Link href="/learn" className="button primary">Start learning</Link>
          <Link href="/dashboard" className="button secondary">Open dashboard</Link>
        </div>

        <div className="mini-stats">
          <div><strong>6</strong><span>starter lessons</span></div>
          <div><strong>3–5 min</strong><span>lesson format</span></div>
          <div><strong>XP</strong><span>gamified progress</span></div>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-card-top">
          <span>Today&apos;s lesson</span>
          <span className="pill">Money Basics</span>
        </div>
        <h3>Inflation & Purchasing Power</h3>
        <p>Learn why the same ₹100 can buy less over time.</p>

        <div className="fake-chart">
          <div className="bar b1"></div>
          <div className="bar b2"></div>
          <div className="bar b3"></div>
          <div className="bar b4"></div>
          <div className="bar b5"></div>
        </div>

        <div className="hero-card-footer">
          <span>+40 XP</span>
          <span>1 quick quiz</span>
        </div>
      </div>
    </section>
  );
}
