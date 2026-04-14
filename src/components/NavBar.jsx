import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../lib/constants";

function NavBar() {
  return (
    <div className="flex justify-center w-full pt-6 sticky top-0 z-50">
      <header>
        <nav className="flex items-center justify-between border border-white/10 rounded-full px-2 py-1 bg-zinc-900/60 backdrop-blur-md shadow-2xl">
          <ul className="flex items-center text-zinc-400">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link to={nav.link}>
                  <div className="flex items-center gap-2 py-2 px-4 rounded-full transition-all duration-300 hover:text-white hover:bg-white/10">
                    <span className="text-sm md:text-base font-medium">{nav.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
