
import { Github, Linkedin, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <a href="#home" className="logo">
        Manjunadh<span className="accent">.</span>
      </a>

      <p>
        Designed & Built with ❤️ by Manjunadh
      </p>

      <div className="footer-socials">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github />
        </a>

        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>

        <a href="#home" aria-label="Back to top">
          <ArrowUp />
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} Manjunadh. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;
