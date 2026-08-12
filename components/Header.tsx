"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Compass, BookOpen, Mail, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/#how-we-help", label: "Our approach", icon: Compass },
  { href: "/knowledge-hub", label: "Knowledge Hub", icon: BookOpen },
  { href: "/contact", label: "Contact us", icon: Mail },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/" className="group" onClick={() => setOpen(false)}>
            <Logo />
            <span className="mt-0.5 block h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#enquiry"
            className="hidden rounded-full bg-accent-vivid px-5 py-2.5 text-sm font-semibold text-brand shadow-sm transition hover:bg-accent-vivid-dark md:inline-block"
          >
            Get help now
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-brand transition hover:bg-brand/5 md:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-brand/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col overflow-hidden rounded-l-3xl bg-surface px-6 py-6 shadow-2xl md:hidden"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-accent-vivid/20 blur-[90px]"
              />

              <div className="relative flex items-center justify-between">
                <Logo size="sm" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-brand transition hover:bg-brand/5"
                >
                  <X className="h-6 w-6" strokeWidth={2} />
                </button>
              </div>

              <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Menu
              </p>

              <nav className="relative mt-4 flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 border-b border-border py-4 text-lg font-medium text-brand transition hover:text-accent"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition group-hover:bg-accent-vivid group-hover:text-brand">
                        <link.icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span className="flex-1">{link.label}</span>
                      <ArrowRight className="h-4 w-4 text-muted opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="relative mt-auto pt-10">
                <Link
                  href="/#enquiry"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-accent-vivid px-6 py-3.5 text-center text-sm font-semibold text-brand shadow-lg shadow-accent-vivid/20 transition hover:bg-accent-vivid-dark"
                >
                  Get help now
                </Link>
                <p className="mt-4 text-center text-xs text-muted">
                  Confidential · UK-based specialists
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
