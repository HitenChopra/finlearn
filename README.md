# FinLearn — Final Project

This package includes the requested updated frontend, learning content, quizzes, progress tracking, login flow, email verification hooks and local SQL storage.

## Included changes

- Login/create-account screen appears first.
- Signup asks for **full name, email and a unique username**.
- Username uniqueness is checked in SQL.
- Email syntax + MX domain check are performed.
- A 6-digit verification code confirms actual mailbox ownership when SMTP is configured.
- User records, pending codes and sessions are stored in SQLite.
- 6 learning tracks.
- **10 sub-modules per track** = 60 lessons total.
- **3 quiz questions per sub-module** = 180 quiz questions total.
- Sub-module progress bars inside every track.
- Individual lesson pages no longer show the old top progress/duration strip.
- The sub-module heading is the first element at the top.
- The old summary line is now incorporated into the larger Concept section.
- Concepts and real-world examples are expanded.
- Every example includes an **Explanation** bullet list.
- Correct quiz answers reveal **Continue**; the final correct answer reveals **Finish**.
- Profile shows the user's full name and **@username** instead of the old Money Basics line.
- Profile includes a **Log out** button.

## 1. Install

Open PowerShell in the project folder:

```powershell
npm install
```

Then:

```powershell
npm run dev
```

Open:

```text
http://localhost:3000
```

## 2. SQL database

The schema is here:

```text
db/schema.sql
```

The app automatically creates this SQLite file on the first authentication request:

```text
storage/finlearn.sqlite
```

Tables:

- `users`
- `pending_auth_codes`
- `sessions`

No manual SQL setup is required for local development.

## 3. Real email verification

Copy:

```text
.env.example
```

to:

```text
.env.local
```

For real email delivery, configure SMTP. Example with Gmail:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM=FinLearn <your-email@gmail.com>
AUTH_CODE_SALT=replace-this-with-a-long-random-string
DEV_SHOW_EMAIL_CODE=false
SKIP_MX_CHECK=false
```

For Gmail, use a **Google App Password**, not your normal Gmail password.

### What “email verification” does

The app checks:

1. valid email syntax,
2. whether the email domain has MX mail records,
3. actual mailbox ownership using a 6-digit code delivered by email.

If SMTP is not configured while running locally, the app exposes a **development verification code** so you can still test the project. That development fallback is not real mailbox verification, so configure SMTP before demonstrating true email verification.

## 4. Main routes

```text
/                         Login / Create account
/home                     Main landing page after login
/learn                    All tracks + lesson search
/learn/track/money-basics Track page with sub-module progress
/learn/income-vs-expenses Individual lesson
/dashboard                Progress dashboard
/tutor                    AI Tutor frontend
/profile                  User profile + logout
```

## 5. Curriculum

Each track has 10 sub-modules:

1. Money Basics
2. Banking & Digital Money
3. Credit & Debt
4. Investing Fundamentals
5. Taxes & Insurance
6. Behavioural Finance

Each lesson contains:

- expanded Concept section,
- real-world example,
- Explanation bullets,
- key points,
- 3 quiz questions,
- saved quiz progress,
- XP on lesson completion.

## 6. Important scope note

The AI Tutor remains a frontend demonstration in this package. Connecting the tutor to ChromaDB/FAISS + a grounded RAG/LLM pipeline belongs to the later AI module.

Financial rules that change over time, especially tax, insurance, banking limits and product terms, should be verified against current official RBI, SEBI, IRDAI, Income Tax Department, EPFO/NPS or other authoritative sources before public deployment.
