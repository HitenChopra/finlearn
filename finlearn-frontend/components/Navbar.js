import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="navbar">
        <Link href="/" className="brand">
          <span className="brand-mark">₹</span>
          <span>FinLearn</span>
        </Link>

        <div className="nav-links">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/tutor">AI Tutor</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </nav>
    </header>
  );
}
