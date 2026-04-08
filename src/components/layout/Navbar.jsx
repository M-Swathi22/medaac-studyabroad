import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  {
    label: "Courses",
    href: "#",
    children: ["MBBS", "Nursing", "Paramedical"],
  },
  {
    label: "Study India",
    href: "#",
    children: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra"],
  },
  { label: "Study Abroad", href: "#" }, // NO dropdown
  {
    label: "MBBS Abroad",
    href: "#",
    children: ["Georgia", "Tajikistan", "Uzbekistan"],
  },
  { label: "Blog", href: "#" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-5 left-0 w-full z-50 flex justify-center px-3">
        <div
          className={`
            w-full max-w-7xl rounded-full px-5 py-3 flex items-center justify-between
            transition-all duration-300
            ${
              scrolled
                ? "bg-white/90 backdrop-blur-md shadow-lg"
                : "bg-[var(--primary-light)]/90 backdrop-blur-md shadow-md"
            }
          `}
        >
          {/* LOGO */}
          <img src={logo} alt="logo" className="h-9 w-auto object-contain" />

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={() => setActiveLink(item.label)}
                  className={`relative px-2 py-1 transition duration-300
                  ${
                    activeLink === item.label
                      ? "text-[var(--primary)]"
                      : "text-[var(--primary)] hover:text-[var(--secondary)]"
                  }`}
                >
                  {item.label}

                  {/* underline ONLY on hover */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--secondary)] transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* DROPDOWN (only if children exists) */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-lg py-2">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="relative block px-4 py-2 text-sm text-[var(--primary)] hover:text-[var(--secondary)] whitespace-nowrap"
                      >
                        {child}

                        {/* underline on hover */}
                        <span className="absolute left-4 right-4 bottom-1 w-0 h-[2px] bg-[var(--secondary)] transition-all duration-300 hover:w-[calc(100%-2rem)]"></span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-[var(--secondary)] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Contact Us
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[var(--primary)]"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} className="h-8" />
          <button onClick={() => setMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((item) => (
            <div key={item.label}>
              <p className="text-[var(--primary)] text-base font-medium">
                {item.label}
              </p>

              {item.children && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      className="text-sm text-[var(--primary)] hover:text-[var(--secondary)] whitespace-nowrap"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="#"
            className="mt-4 bg-[var(--secondary)] text-white text-center py-3 rounded-full"
          >
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