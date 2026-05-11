import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/images/medaac_logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "MBBS", href:  "/courses/medical/mbbs" },
      { label: "Nursing", href:  "/courses/nursing/bsc-nursing" },
      { label: "Paramedical", href: "/courses/paramedical" },
    ],
  },
  {
    label: "Study India",
    href: "/study-india",
    children: [
      { label: "Tamil Nadu", href: "/study-india/tamilnadu"},
      { label: "Kerala", href: "/study-india/kerala" },
      { label: "Karnataka", href: "/study-india/karnataka" },
      { label: "Andhra", href: "/study-india/andhra" },
    ],
  },
  { label: "Study Abroad", href: "/studyAbroad" },
  {
    label: "MBBS Abroad",
    href: "/mbbs-abroad",
    children: [
      { label: "Georgia", href: "/mbbs-abroad/georgia" },
      { label: "Tajikistan", href: "/mbbs-abroad/tajikistan" },
      { label: "Uzbekistan", href: "/mbbs-abroad/uzbekistan" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

const isActivePath = (href) => {
  if (typeof window === "undefined") return false;
  if (href === "/") return window.location.pathname === "/";
  return window.location.pathname.startsWith(href);
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const closeTimer = useRef(null);

  const handleMouseEnter = (label) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-5 left-0 w-full z-50 flex justify-center px-3">
        <div
          className="
            w-full max-w-7xl rounded-full px-5 py-2 flex items-center justify-between
            bg-white/95 backdrop-blur-md shadow-lg border border-gray-200
          "
        >
          {/* LOGO (FIXED) */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className={`relative flex items-center gap-1 px-3 py-1.5 transition duration-200
                  ${
                    isActivePath(item.href)
                      ? "text-[var(--primary)]"
                      : "text-[var(--dark)] hover:text-[var(--primary)]"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
                </a>

                {/* DROPDOWN */}
                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-3 w-52 bg-white rounded-2xl shadow-xl py-2 border border-gray-100"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        className={`block px-4 py-2 text-sm transition ${
                          isActivePath(child.href)
                            ? "text-[var(--primary)] font-semibold bg-[var(--primary-light)]"
                            : "text-[var(--dark)] hover:text-[var(--primary)] hover:bg-gray-50"
                        }`}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[var(--primary-dark)] transition"
            >
              Contact Us
            </a>
          </div>

          {/* MOBILE MENU BTN */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[var(--dark)]"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} className="h-12" />
          <button onClick={() => setMenuOpen(false)}>
            <X size={22} className="text-[var(--dark)]" />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-5">
          {navLinks.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <button
                  onClick={() =>
                    setMobileOpenDropdown(
                      mobileOpenDropdown === item.label ? null : item.label
                    )
                  }
                  className="w-full flex justify-between py-2 text-left text-[var(--dark)]"
                >
                  {item.label}
                  <ChevronDown
                    className={`${
                      mobileOpenDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <a href={item.href} className="block py-2 text-[var(--dark)]">
                  {item.label}
                </a>
              )}

              {item.children && mobileOpenDropdown === item.label && (
                <div className="ml-3">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block py-1 text-sm text-gray-600"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a className="mt-4 bg-[var(--primary)] text-white text-center py-3 rounded-full">
            Contact Us
          </a>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;