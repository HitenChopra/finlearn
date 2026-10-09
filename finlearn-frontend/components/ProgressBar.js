export default function ProgressBar({ value = 0 }) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className="progress-track" aria-label={`Progress ${safeValue}%`}>
      <div className="progress-fill" style={{ width: `${safeValue}%` }} />
    </div>
  );
}
