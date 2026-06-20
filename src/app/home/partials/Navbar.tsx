import { navigationData } from "@/components/ui/contant/navigation-data";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetClose, SheetTrigger, SheetContent } from "@/components/ui/sheet"
 
const Navbar = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: "#000000",
        borderBottom: "1px solid #252B37",
      }}
    >
      {/* ── INNER CONTAINER ─────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
          width: "100%",
          maxWidth: "1440px",
          marginLeft: "auto",
          marginRight: "auto",
          /* mobile: 16px | desktop: 128px via media query below */
          padding: "0 16px",
        }}
        className="navbar-inner"
      >
        {/* ── LEFT: Logo (line + name) ─────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px" /* Figma: gap: 9px mobile, 8px desktop */,
            flexShrink: 0,
          }}
        >
          {/* white horizontal line — 24px mobile / 40px desktop */}
          <span
            aria-hidden="true"
            className="logo-line"
            style={{
              display: "block",
              width: "24px" /* overridden to 40px on desktop via CSS */,
              height: "1px",
              backgroundColor: "#ffffff",
              flexShrink: 0,
            }}
          />
          {/* Edwin Anderson. */}
          <Link
            href="#home"
            aria-label="Go to homepage"
            className="logo-text"
            style={{
              fontFamily: "var(--font-red-hat-display), sans-serif",
              fontWeight: 700,
              fontSize: "1rem" /* 16px mobile — overridden 20px desktop */,
              lineHeight: "1.875rem",
              color: "#91ff02",
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            Edwin Anderson.
          </Link>
        </div>

        {/* ── RIGHT DESKTOP: Nav links (hidden on mobile) ─── */}
        <nav
          aria-label="Primary navigation"
          style={{
            display: "none" /* hidden mobile — shown desktop via CSS */,
          }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navigationData.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="nav-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px",
                    fontFamily: "var(--font-red-hat-display), sans-serif",
                    fontWeight: 400,
                    fontSize: "1rem",
                    lineHeight: "1.875rem",
                    color: "#ffffff",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s ease",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── RIGHT MOBILE: Hamburger (hidden on desktop) ─── */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open main navigation"
              className="hamburger-btn"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Menu size={24} strokeWidth={2} color="#ffffff" />
            </button>
          </SheetTrigger>

          {/* ── MOBILE MENU OVERLAY ──────────────────────── */}
          <SheetContent
            side="left"
            style={{
              backgroundColor: "#000000",
              width: "100vw",
              maxWidth: "100vw",
              padding: 0,
              border: "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Mobile header row — logo + X button */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 16px",
                height: "80px",
                borderBottom: "1px solid #252B37",
                flexShrink: 0,
              }}
            >
              {/* Logo inside menu */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "9px",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: "block",
                    width: "24px",
                    height: "1px",
                    backgroundColor: "#ffffff",
                    flexShrink: 0,
                  }}
                />
                <SheetClose asChild>
                  <Link
                    href="#home"
                    style={{
                      fontFamily: "var(--font-red-hat-display), sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      lineHeight: "1.875rem",
                      color: "#91ff02",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                    }}
                  >
                    Edwin Anderson.
                  </Link>
                </SheetClose>
              </div>

              {/* X close button — Figma: 24x24, border 2px solid white */}
              <SheetClose asChild>
                <button
                  aria-label="Close navigation"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <X size={24} strokeWidth={2} color="#ffffff" />
                </button>
              </SheetClose>
            </div>

            {/* Nav links — Figma: left: 16px, top: 96px, gap: 16px */}
            <nav
              aria-label="Mobile navigation"
              style={{ padding: "16px 0 0 16px" }}
            >
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {navigationData.map((item) => (
                  <li key={item.label}>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px",
                          fontFamily: "var(--font-red-hat-display), sans-serif",
                          fontWeight: 400,
                          fontSize: "1rem",
                          lineHeight: "1.875rem",
                          color: "#ffffff",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          width: "fit-content",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* ── RESPONSIVE OVERRIDES ────────────────────────────── */}
      <style>{`
        /* Desktop: 1024px+ */
        @media (min-width: 1024px) {
          .navbar-inner {
            padding: 0 128px !important;
          }
          .logo-line {
            width: 40px !important;
          }
          .logo-text {
            font-size: 1.25rem !important;   /* 20px — Text xl/Bold */
            line-height: 2.125rem !important;
          }
          .desktop-nav {
            display: flex !important;
          }
          .hamburger-btn {
            display: none !important;
          }
        }
        /* Hover for nav links */
        .nav-link:hover {
          color: #91ff02 !important;
        }
      `}</style>
    </header>
  );
};
 

export default Navbar;