import React from "react";

import { LuFolder } from "react-icons/lu";
import { IoIosContact } from "react-icons/io"; // Verify these imports
import { Link } from "react-router-dom";

function NavBar() {
  const navLinks = [
    {
      name: "Home",
      link: "/",
      icon: <LuFolder />,
    },
    {
      name: "Contact",
      link: "/contacts",
      icon: <IoIosContact />,
    },
  ];
  return (
    <div className="flex justify-center w-full pt-4 ">
      <header>
        <nav className="flex items-center justify-between border rounded-3xl px-1 md:px-4 bg-zinc-900/10">
          <ul className="flex  rounded-3xl text-white/80 hover:text-zinc-600">
            {navLinks.map((nav, id) => (
              <li key={id} className="flex items-center text-md md:text-lg">
                <Link to={nav.link}>
                  <div className="flex items-center gap-2  py-1.5 px-2 md:px-3 rounded-3xl transition-all duration-100 hover:text-white hover:font-semibold">
                    {nav.icon}
                    {nav.name}
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
