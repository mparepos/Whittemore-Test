"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import Link from "next/link";

const whittemoreLogo = "/assets/whittemore-logo.avif";
const poolImg = "/assets/industry-pool.jpg";
const horticultureImg = "/assets/industry-horticulture.jpg";
const constructionImg = "/assets/industry-construction.jpg";
const industrialImg = "/assets/industry-industrial.jpg";
const environmentalImg = "/assets/industry-environmental.jpg";

const navLinks: { label: string; href: string; isRoute: boolean }[] = [];

const perliteLinks = [
  { label: "Perlite for Horticulture", path: "/perlite/horticulture" },
  { label: "Perlite for Construction", path: "/perlite/construction" },
  { label: "Perlite for Industrial", path: "/perlite/industrial" },
  { label: "Perlite for Environmental", path: "/perlite/environmental" },
];

const vermiculiteLinks = [
  { label: "Vermiculite for Horticulture", path: "/vermiculite/horticulture" },
  { label: "Vermiculite for Construction", path: "/vermiculite/construction" },
  { label: "Vermiculite for Industrial", path: "/vermiculite/industrial" },
  { label: "Vermiculite for Environmental", path: "/vermiculite/environmental" },
  { label: "Vermiculite for Pool Installs", path: "/industries/pool-installs" },
];

const industryLinks: { label: string; path: string; image: string }[] = [
  { label: "Pool Installs", path: "/industries/pool-installs", image: poolImg },
  { label: "Horticulture", path: "/industries/horticulture", image: horticultureImg },
  { label: "Construction", path: "/industries/construction", image: constructionImg },
  { label: "Industrial", path: "/industries/industrial", image: industrialImg },
  { label: "Environmental", path: "/industries/environmental", image: environmentalImg },
];

const poolsLinks = [
  { label: "Vermiculite for Pool Installs", path: "/industries/pool-installs" },
  { label: "Perlite Filter Aid", path: "/perlite-filter-aid" },
];

type DropdownKey = "perlite" | "vermiculite" | "industry" | "pools" | null;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileDropdown, setMobileDropdown] = useState<DropdownKey>(null);
  const toggleLockRef = useRef(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const perlRef = useRef<HTMLDivElement>(null);
  const vermRef = useRef<HTMLDivElement>(null);
  const indRef = useRef<HTMLDivElement>(null);
  const poolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const refs = [perlRef, vermRef, indRef, poolsRef];
      const clickedInside = refs.some((r) => r.current && r.current.contains(target));
      if (!clickedInside) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        mobileMenuRef.current?.scrollTo(0, 0);
      });
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkClass = "text-sm font-medium text-secondary-foreground hover:text-accent transition-colors duration-200";

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const toggleMobileDropdown = (key: DropdownKey) => {
    setMobileDropdown(mobileDropdown === key ? null : key);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const renderDropdown = (
    label: string,
    key: DropdownKey,
    basePath: string | null,
    links: { label: string; path: string }[],
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <div className="relative" ref={ref}>
      <div className="inline-flex items-center">
        {basePath ? (
          <Link
            href={basePath}
            className={`${linkClass} px-1`}
            onClick={() => setOpenDropdown(null)}
            aria-label={`Go to ${label} page`}
          >
            {label}
          </Link>
        ) : (
          <button
            type="button"
            className={`${linkClass} px-1`}
            onClick={() => toggleDropdown(key)}
            aria-expanded={openDropdown === key}
            aria-haspopup="true"
          >
            {label}
          </button>
        )}
        <button
          type="button"
          className="ml-0.5 p-1 text-secondary-foreground hover:text-accent transition-colors duration-200"
          onClick={() => toggleDropdown(key)}
          aria-expanded={openDropdown === key}
          aria-haspopup="true"
          aria-label={`Toggle ${label} menu`}
        >
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === key ? "rotate-180" : ""}`} />
        </button>
      </div>
      {openDropdown === key && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-secondary rounded-lg border border-secondary-foreground/10 shadow-xl py-1 z-50">
          {links.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="block px-4 py-2.5 text-sm text-secondary-foreground/80 hover:text-accent hover:bg-secondary-foreground/5 transition-colors"
              onClick={() => setOpenDropdown(null)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const renderMobileDropdown = (
    label: string,
    key: DropdownKey,
    basePath: string | null,
    links: { label: string; path: string }[]
  ) => {
    const isOpen = mobileDropdown === key;
    return (
      <div className="border-b border-secondary-foreground/10 last:border-b-0">
        <div className="flex items-center">
          {basePath ? (
            <Link
              href={basePath}
              className="flex-1 px-6 py-4 text-lg font-display font-bold text-secondary-foreground hover:text-accent transition-colors"
              onClick={closeMobile}
            >
              {label}
            </Link>
          ) : (
            <button
              type="button"
              className="flex-1 text-left px-6 py-4 text-lg font-display font-bold text-secondary-foreground hover:text-accent transition-colors"
              onClick={() => toggleMobileDropdown(key)}
            >
              {label}
            </button>
          )}
          <button
            type="button"
            className="px-5 py-4 text-secondary-foreground/60 hover:text-accent transition-colors active:scale-95"
            onClick={() => toggleMobileDropdown(key)}
            aria-expanded={isOpen}
            aria-label={`Toggle ${label} submenu`}
          >
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-96 opacity-100 pb-2" : "max-h-0 opacity-0"
          }`}
        >
          {links.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="flex items-center gap-2 pl-10 pr-6 py-3 text-base text-secondary-foreground hover:text-accent hover:bg-secondary-foreground/5 transition-colors rounded-md mx-3"
              onClick={closeMobile}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 flex-shrink-0" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="h-2 bg-accent w-full" />

      <div className="bg-secondary relative z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="w-48 md:w-64" />

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              )
            )}

            <Link href="/about" className={linkClass}>About</Link>
            {renderDropdown("Perlite", "perlite", "/perlite", perliteLinks, perlRef as React.RefObject<HTMLDivElement>)}
            {renderDropdown("Vermiculite", "vermiculite", "/vermiculite", vermiculiteLinks, vermRef as React.RefObject<HTMLDivElement>)}
            {renderDropdown("Swimming Pools", "pools", null, poolsLinks, poolsRef as React.RefObject<HTMLDivElement>)}
            <Link href="/custom-solutions" className={linkClass}>Custom Blending</Link>
            <Link href="/quality-and-service" className={linkClass}>Quality & Service</Link>
          </div>

          <button
            className="lg:hidden text-secondary-foreground p-1"
            onClick={() => {
              if (toggleLockRef.current) return;
              toggleLockRef.current = true;
              setMobileOpen(!mobileOpen);
              setMobileDropdown(null);
              setTimeout(() => { toggleLockRef.current = false; }, 300);
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
          </button>
        </div>

        {/* Logo box */}
        <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
          <div className="bg-background h-[calc(100%+12px)] px-6 sm:px-10 md:px-14 py-3 flex items-center rounded-br-2xl shadow-md">
            <Link href="/" onClick={closeMobile}>
              <img src={whittemoreLogo} alt="Whittemore Company, Inc." className="h-7 sm:h-9 w-auto" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div ref={mobileMenuRef} className="lg:hidden bg-secondary fixed inset-0 top-16 z-40 overflow-y-auto pt-4">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link key={link.label} href={link.href} className="block px-6 py-4 text-lg font-display font-bold text-secondary-foreground hover:text-accent border-b border-secondary-foreground/10 transition-colors" onClick={closeMobile}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="block px-6 py-4 text-lg font-display font-bold text-secondary-foreground hover:text-accent border-b border-secondary-foreground/10 transition-colors" onClick={closeMobile}>
                {link.label}
              </a>
            )
          )}

          <Link href="/about" className="block px-6 py-4 text-lg font-display font-bold text-secondary-foreground hover:text-accent border-b border-secondary-foreground/10 transition-colors" onClick={closeMobile}>
            About
          </Link>
          {renderMobileDropdown("Perlite", "perlite", "/perlite", perliteLinks)}
          {renderMobileDropdown("Vermiculite", "vermiculite", "/vermiculite", vermiculiteLinks)}
          {renderMobileDropdown("Swimming Pools", "pools", null, poolsLinks)}

          <Link href="/custom-solutions" className="block px-6 py-4 text-lg font-display font-bold text-secondary-foreground hover:text-accent border-b border-secondary-foreground/10 transition-colors" onClick={closeMobile}>
            Custom Blending
          </Link>
          <Link href="/quality-and-service" className="block px-6 py-4 text-lg font-display font-bold text-secondary-foreground hover:text-accent border-b border-secondary-foreground/10 transition-colors" onClick={closeMobile}>
            Quality & Service
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
