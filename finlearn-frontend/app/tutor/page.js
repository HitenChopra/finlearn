import TutorDemo from "@/components/TutorDemo";

export default function TutorPage() {
  return (
    <section className="page-shell tutor-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">AI TUTOR INTERFACE</span>
          <h1>Ask FinLearn</h1>
          <p className="lead compact">
            This screen completes the tutor frontend. A real RAG/LLM backend can be connected later.
          </p>
        </div>
      </div>

      <TutorDemo />
    </section>
  );
}
