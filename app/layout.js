import "./globals.css";
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "FinLearn",
  description: "Gamified personal finance learning with an AI tutor"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
