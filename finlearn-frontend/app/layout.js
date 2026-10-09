import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "FinLearn",
  description: "Gamified personal finance learning with an AI tutor"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
