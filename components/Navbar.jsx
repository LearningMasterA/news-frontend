"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Top News", href: "/#topnews" },
  { label: "Sports", href: "/#sports" },
  { label: "Business", href: "/#business" },
  { label: "Technology", href: "/#technology" },
  { label: "Entertainment", href: "/#entertainment" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => l.href.replace("/#", ""));
      let current = "";

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;

          if (top <= 100 && top > -500) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold" href="/">
          NewsPortal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link
                  href={link.href}
                  className={`nav-link ${active === link.href.replace("/#", "") ? "fw-bold text-warning" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
}
