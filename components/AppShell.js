"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const authPage = pathname === "/";

  useEffect(() => {
    if (authPage) return;
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.user?.id) localStorage.setItem("finlearn-active-user-id", String(data.user.id));
      })
      .catch(() => {});
  }, [authPage]);

  return (
    <>
      {!authPage && <Navbar />}
      <main className={authPage ? "auth-main" : ""}>{children}</main>
    </>
  );
}
