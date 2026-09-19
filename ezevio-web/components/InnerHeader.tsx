"use client";

import Link from "next/link";
import { HeaderLogoMark } from "@/components/HeaderLogoMark";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { usePathname } from "next/navigation";
import { SITE_NAV_ITEMS } from "@/lib/siteNav";

const WORK_NAV_HIDDEN = "work-nav-hidden";

function navPathActive(pathname: string, href: string) {
  const p = pathname.replace(/\/$/, "") || "/";
  const h = href.replace(/\/$/, "") || "/";
  /** `/` is Services landing; `/services` is the same page for bookmarks. */
  if (h === "/" && (p === "/" || p === "/services")) return true;
  /** `/work` + any case URL (`/work/slug`) keep Work highlighted. */
  if (h === "/work" && (p === "/work" || p.startsWith("/work/"))) return true;
  return p === h;
}

function isWorkCasePath(pathname: string) {
  const p = pathname.replace(/\/$/, "") || "/";
  return p.startsWith("/work/") && p !== "/work";
}

function scrollY() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

export function InnerHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const hiddenRef = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    if (menuOpen) {
      root.classList.add("menu-is-open", "no--scroll");
      root.classList.remove(WORK_NAV_HIDDEN);
      hiddenRef.current = false;
    } else {
      root.classList.remove("menu-is-open", "no--scroll");
    }
    return () => {
      root.classList.remove("menu-is-open", "no--scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(WORK_NAV_HIDDEN);
    hiddenRef.current = false;
    lastScrollY.current = scrollY();

    if (!isWorkCasePath(pathname)) return;

    const setHidden = (hidden: boolean) => {
      if (hiddenRef.current === hidden) return;
      hiddenRef.current = hidden;
      root.classList.toggle(WORK_NAV_HIDDEN, hidden);
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const y = scrollY();
        const delta = y - lastScrollY.current;

        if (root.classList.contains("menu-is-open") || y < 40) {
          setHidden(false);
        } else if (delta > 4) {
          setHidden(true);
        } else if (delta < -4) {
          setHidden(false);
        }

        lastScrollY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, true);
      root.classList.remove(WORK_NAV_HIDDEN);
      hiddenRef.current = false;
    };
  }, [pathname]);

  const toggleMenu = () => setMenuOpen((o) => !o);

  const onMenuKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <header>
      <div className="o-container">
        <nav className="o-col-12 inner-nav">
          <Link href="/" className="header__logo">
            <HeaderLogoMark priority />
          </Link>
          <div
            className="menu-toggle"
            role="button"
            tabIndex={0}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            onKeyDown={onMenuKeyDown}
          >
            <div className={`hamburger${menuOpen ? " active" : ""}`}>
              <div className="hamburger-box">
                <div className="hamburger-inner" />
                <div className="close-inner" />
              </div>
            </div>
          </div>
          <ul>
            {SITE_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    navPathActive(pathname, item.href) ? "active" : undefined
                  }
                  aria-current={
                    navPathActive(pathname, item.href) ? "page" : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={`mobile-menu${menuOpen ? " active" : ""}`}>
          <ul>
            {SITE_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    navPathActive(pathname, item.href) ? "active" : undefined
                  }
                  aria-current={
                    navPathActive(pathname, item.href) ? "page" : undefined
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
