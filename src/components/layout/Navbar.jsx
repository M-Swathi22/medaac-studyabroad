import { useState } from "react";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Courses","Study India", "Study Abroad", "Blog"];

  return (
    <>
      {/* FLOATING NAVBAR */}
      <div className="fixed top-5 left-0 w-full z-50 flex justify-center px-2 sm:px-4">
        
        <div className="w-full max-w-7xl bg-[var(--primary-light)] backdrop-blur-md rounded-full shadow-md px-4 sm:px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="medaac logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </div>

          {/* 🔥 MENU WITH UNDERLINE EFFECT */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-base font-medium">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href="#"
                className="relative text-[var(--primary)] hover:text-[var(--secondary)] transition duration-300 group"
              >
                {item}

                {/* 🔥 UNDERLINE */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--secondary)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* BUTTON */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-[var(--secondary)] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Contact Us
            </a>
          </div>

          {/* MOBILE */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <span className="text-2xl text-[var(--primary)]">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <span className="text-2xl">✕</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 text-base font-medium">
          {navLinks.map((item, i) => (
            <a
              key={i}
              href="#"
              className="text-[var(--primary)] hover:text-[var(--secondary)]"
            >
              {item}
            </a>
          ))}

          <a
            href="#"
            className="mt-4 bg-[var(--secondary)] text-white text-center py-3 rounded-md"
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
        ></div>
      )}
    </>
  );
}

export default Navbar;