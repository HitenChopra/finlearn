# FinLearn Frontend / Learning Interface

A complete frontend prototype for a gamified personal-finance learning platform.

## What is included

- Landing page
- Dashboard
- Learning path
- Track + lesson cards
- 6 starter Money Basics lessons
- Dynamic lesson routes
- Real-world examples
- Key-point cards
- Interactive MCQ quizzes
- XP + progress tracking using browser localStorage
- Streak/profile interface
- AI Tutor frontend shell
- Responsive mobile/desktop layout
- JSON-driven lesson content
- Reusable React components

## Important scope note

This repository completes the **Frontend / Learning Interface** stage only.

The following are intentionally **not connected yet**:
- Supabase/PostgreSQL backend
- Authentication
- ChromaDB / FAISS
- Real RAG pipeline
- Real LLM tutor
- Server-side progress sync

The AI Tutor screen is a frontend prototype that demonstrates the intended interaction pattern.

## Run locally

1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open:

```text
http://localhost:3000
```

## Project structure

```text
finlearn-frontend/
├─ app/
│  ├─ page.js
│  ├─ dashboard/page.js
│  ├─ learn/page.js
│  ├─ learn/[lessonId]/page.js
│  ├─ tutor/page.js
│  ├─ profile/page.js
│  └─ globals.css
├─ components/
│  ├─ Navbar.js
│  ├─ ProgressBar.js
│  ├─ LessonCard.js
│  ├─ QuizCard.js
│  ├─ LessonExperience.js
│  └─ TutorDemo.js
├─ data/
│  └─ lessons.json
└─ lib/
   └─ progress.js
```

## Content workflow

For now, lessons live in:

```text
data/lessons.json
```

This lets the frontend behave like a real content-driven learning product without requiring a database.

Later, replace the JSON import with Supabase queries while keeping the same UI components.

## Academic note

The lesson copy in this repository is **starter/demo educational content** created to exercise the interface. Before final academic or public deployment, verify every finance fact and example against your approved sources such as RBI, SEBI, NCFE, and other authoritative material.
