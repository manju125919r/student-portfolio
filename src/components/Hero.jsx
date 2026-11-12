
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Download,
  Sparkles
} from "lucide-react";

function Hero() {
  return (
    <section className="hero section" id="home">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="availability">
          <span className="status-dot"></span>
          Open to Internship Opportunities
        </div>

        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          Sannidhi Manikanta
          <span className="gradient-text"> Manjunadh</span>
        </h1>

        <h2>
          Aspiring Full Stack Developer
          <Sparkles className="sparkle" size={22} />
        </h2>

        <p className="hero-description">
          I'm a B.Tech Computer Science student specializing in
          Artificial Intelligence and Machine Learning at
          Uttaranchal University.

          I build modern web applications and explore AI-powered
          solutions to solve real-world problems.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            Explore My Work ↗
          </a>

          <a
            href="/resume.pdf"
            download
            className="secondary-btn"
          >
            <Download size={17} />
            Download Resume
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>

          <a href="mailto:yourmail@gmail.com" aria-label="Email">
            <Mail />
          </a>

        </div>

      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="profile-glow">
          <div className="profile-placeholder">
            <span>MM</span>
          </div>
        </div>

        <div className="floating-card card-one">
          <span>💻</span>
          <div>
            <strong>Full Stack</strong>
            <small>Development</small>
          </div>
        </div>

        <div className="floating-card card-two">
          <span>🤖</span>
          <div>
            <strong>AI & ML</strong>
            <small>Enthusiast</small>
          </div>
        </div>

      </motion.div>

      <a href="#about" className="scroll-down">
        <ArrowDown size={18} />
        Scroll to explore
      </a>

    </section>
  );
}

export default Hero;
