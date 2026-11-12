
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Certificates", "#certificates"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar">

      <a href="#home" className="logo">
        <Code2 size={25} />
        <span>
          Manjunadh<span className="accent">.</span>
        </span>
      </a>

      <div className={`nav-links ${open ? "active" : ""}`}>
        {links.map(([name, link]) => (
          <a
            key={name}
            href={link}
            onClick={() => setOpen(false)}
          >
            {name}
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-button">
        Hire Me ↗
      </a>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>

    </nav>
  );
}

export default Navbar;
