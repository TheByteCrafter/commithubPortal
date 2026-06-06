import { useState } from "react";

const NavBar = () => {
  //states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-slate-50 text-slate-800 antialiased overflow-x-hidden  w-full flex flex-col">
      <nav className="sticky top-0 z-50 bg-[#0A2540] border-b border-white/10 text-white bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-[#FF6B35] text-white p-2.5 rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B35]/30">
                <img
                  src="https://res.cloudinary.com/dsqfbbf6m/image/upload/v1780729076/svgviewer-output_mk9y7m.svg"
                  className="w-6 h-6 rotate-45"
                />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight flex items-center">
                  CommitHub
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold block -mt-1">
                  Endless Opprtunities.
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 font-medium">
              <a
                href="#how-it-works"
                className="text-slate-200 hover:text-[#FF6B35] transition-colors text-sm"
              >
                How It Works
              </a>
              <a
                href="#preview-board"
                className="text-slate-200 hover:text-[#FF6B35] transition-colors text-sm"
              >
                Browse Demo
              </a>
              <a
                href="#roi-value"
                className="text-slate-200 hover:text-[#FF6B35] transition-colors text-sm"
              >
                Cost Comparison
              </a>
              <a
                href="#testimonials"
                className="text-slate-200 hover:text-[#FF6B35] transition-colors text-sm"
              >
                Testimonials
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-[#FF6B35] focus:outline-none"
                aria-label="Toggle Menu"
              >
                <div className="space-y-1.5">
                  <span
                    className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A2540] border-t border-white/10 px-4 py-6 space-y-4 animate-fadeUp">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-[#FF6B35] font-medium"
            >
              How It Works
            </a>
            <a
              href="#preview-board"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-[#FF6B35] font-medium"
            >
              Browse Demo
            </a>
            <a
              href="#roi-value"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-[#FF6B35] font-medium"
            >
              Cost Comparison
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-[#FF6B35] font-medium"
            >
              Testimonials
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
